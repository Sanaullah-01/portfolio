import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center px-4">
      <h1 className="font-display text-8xl md:text-9xl font-bold tracking-tighter text-muted/20 mb-4 select-none">
        404
      </h1>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        Page not found
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link href="/" className={buttonVariants({ size: "lg", className: "rounded-full" })}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Return Home
        </Link>
        <Link href="/projects" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full border-border" })}>
          View Projects
        </Link>
      </div>
    </div>
  );
}
