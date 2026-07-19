import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  return {
    title: `Blog Post: ${params.slug}`,
    description: "A blog post by Sana Ullah.",
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;

  return (
    <article className="container mx-auto px-4 py-24 max-w-3xl">
      <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to blog
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-6">
          <span className="font-medium text-accent uppercase tracking-wider">Category</span>
          <span className="text-border">•</span>
          <time>July 12, 2026</time>
          <span className="text-border">•</span>
          <span>5 min read</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          Understanding the Architecture: {params.slug.replace(/-/g, ' ')}
        </h1>
        <div className="flex items-center justify-between border-y border-border/50 py-4 mt-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
              SU
            </div>
            <div>
              <div className="font-medium text-foreground">Sana Ullah</div>
              <div className="text-xs text-muted-foreground">Full-Stack Developer</div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="bg-muted aspect-video rounded-3xl border border-border mb-12 relative overflow-hidden flex items-center justify-center">
        <span className="font-display text-2xl text-muted-foreground/40">[Cover Image]</span>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead">
          This is a placeholder for the blog post content. In Phase 2, this section will be dynamically populated from the database using a rich text editor or MDX renderer.
        </p>
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h3>Core Concepts</h3>
        <ul>
          <li>First important concept to understand</li>
          <li>Second architectural pattern</li>
          <li>Performance implications and trade-offs</li>
        </ul>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <blockquote>
          &quot;A profound quote about software engineering and building great products goes here.&quot;
        </blockquote>
        <h2>Conclusion</h2>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum. This template establishes the typographic rhythm and spacing for future database-driven content.
        </p>
      </div>
    </article>
  );
}
