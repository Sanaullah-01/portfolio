"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Close menu when navigating
  React.useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-tight hover:text-accent transition-colors"
            >
              Sana Ullah
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navigation.public.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    isActive ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-background border-t md:hidden flex flex-col"
          >
            <nav className="flex flex-col p-4 overflow-y-auto">
              {navigation.public.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center py-4 text-lg font-medium border-b border-border/50",
                      isActive ? "text-foreground" : "text-foreground/70"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
