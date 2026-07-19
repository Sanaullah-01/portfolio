# Sana Ullah Personal Portfolio and Engineering Blog Platform

## Project Overview
A comprehensive full-stack personal portfolio and engineering blog platform for Sana Ullah. It includes a modern, responsive UI with light/dark themes, an integrated contact system, and a secure admin dashboard for managing contacts and messages.

## Tech Stack
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Database & ORM:** PostgreSQL (via Supabase), Prisma
* **Authentication:** Supabase Auth (Admin Login)
* **Email:** Resend
* **Security:** Google reCAPTCHA v3, Rate Limiting
* **Hosting:** Vercel

## Local Setup

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd sana-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   Copy `.env.example` to `.env` and fill in the required environment variables.
   ```bash
   cp .env.example .env
   ```

## Environment Variables
The application requires several environment variables for Database, Supabase Auth, Resend, and Admin Security. Please refer to `.env.example` for the required keys and format. Do NOT expose real values in `.env.example`.

## Database Setup
1. Create a Supabase project and obtain the PostgreSQL connection strings.
2. Add `DATABASE_URL` and `DIRECT_URL` to your `.env` file.
3. Run the Prisma setup to push the schema:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## Admin Setup
To set up the admin user, run the seed script:
```bash
npm run seed:admin
```
This will create the default admin role required for dashboard access.

## Starting Development Server
```bash
npm run dev
```

## Deployment
This project is configured for deployment on **Vercel**. 
1. Connect your GitHub repository to Vercel.
2. Add all environment variables from `.env` to Vercel's environment variables settings.
3. The Vercel build command is `npm run build`. Prisma generation should happen automatically if configured in `package.json` scripts, or add `npx prisma generate && next build`.
4. Deploy and verify the live domain.
