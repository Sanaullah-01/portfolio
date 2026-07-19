import { createClient } from '@supabase/supabase-js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!email || !password || !supabaseUrl || !serviceRoleKey) {
    console.error('Missing required environment variables for seeding admin.')
    console.error('Ensure ADMIN_EMAIL, ADMIN_PASSWORD, NEXT_PUBLIC_SUPABASE_URL, and SUPABASE_SERVICE_ROLE_KEY are set.')
    process.exit(1)
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  console.log(`Checking if admin user exists: ${email}`)

  // List users to see if the admin already exists
  const { data: usersData, error: listError } = await supabase.auth.admin.listUsers()
  
  if (listError) {
    console.error('Failed to list users:', listError)
    process.exit(1)
  }

  let authUser = usersData.users.find((u) => u.email === email)

  if (!authUser) {
    console.log('Creating admin user in Supabase Auth...')
    const { data: createData, error: createError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    if (createError || !createData.user) {
      console.error('Failed to create user:', createError)
      process.exit(1)
    }
    
    authUser = createData.user
    console.log('User created:', authUser.id)
  } else {
    console.log('Admin user already exists in Supabase Auth.')
    console.log('Updating password to match environment variable...')
    await supabase.auth.admin.updateUserById(authUser.id, { password })
  }

  console.log('Ensuring Prisma Profile exists with ADMIN role...')
  
  await prisma.profile.upsert({
    where: { authUserId: authUser.id },
    update: {
      role: 'ADMIN',
      email: email,
    },
    create: {
      authUserId: authUser.id,
      email: email,
      name: 'Admin User',
      role: 'ADMIN',
    },
  })

  console.log('Admin seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
