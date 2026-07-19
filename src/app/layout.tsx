import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.defaultSeo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.defaultSeo.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.defaultSeo.title,
    description: siteConfig.defaultSeo.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultSeo.title,
    description: siteConfig.defaultSeo.description,
    creator: "@sanaullah_haraj",
  },
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col font-sans bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
