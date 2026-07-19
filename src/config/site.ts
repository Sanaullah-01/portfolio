export const siteConfig = {
  name: "Sana Ullah",
  description: "Computer Science student and Full-Stack Developer exploring AI and cloud computing.",
  url: process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL 
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}` 
    : process.env.NEXT_PUBLIC_APP_URL || "https://sanaullah.dev",
  author: {
    name: "Sana Ullah",
    email: "sanaullahharaj0435@gmail.com",
    phone: "+92-3051027435",
    location: "Islamabad, Pakistan",
    university: "National University of Technology (NUTECH)",
  },
  defaultSeo: {
    title: "Sana Ullah | Full-Stack Developer",
    description: "Personal portfolio and engineering blog of Sana Ullah, a Full-Stack Developer and CS student at NUTECH.",
  },
};
