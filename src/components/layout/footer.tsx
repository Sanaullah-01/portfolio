import Link from "next/link";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social-links";
import { navigation } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-display text-xl font-bold tracking-tight">
              {siteConfig.name}
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <span className="sr-only">{link.name}</span>
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-tight">Navigation</h4>
            <ul className="space-y-2">
              {navigation.public.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-tight">More</h4>
            <ul className="space-y-2">
              {navigation.public.slice(5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border/40 mt-12 pt-8 gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="hover:text-foreground transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
