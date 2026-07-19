import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about software engineering, web development, and cloud computing.",
};

const placeholderPosts = [
  {
    slug: "understanding-react-server-components",
    title: "Understanding React Server Components in Next.js",
    excerpt: "A deep dive into how Server Components change the way we think about building React applications.",
    date: "July 12, 2026",
    readingTime: "5 min read",
    category: "Web Development",
    featured: true,
  },
  {
    slug: "secure-file-uploads-aws-s3",
    title: "Secure Direct-to-S3 File Uploads",
    excerpt: "How to implement secure, direct client-to-S3 file uploads using IAM policies and Presigned URLs.",
    date: "June 28, 2026",
    readingTime: "8 min read",
    category: "Cloud Computing",
    featured: false,
  },
  {
    slug: "realtime-collaboration-websockets",
    title: "Building Real-Time Collaboration with WebSockets",
    excerpt: "Architecting a concurrent state synchronization system for a collaborative HTML5 canvas.",
    date: "May 15, 2026",
    readingTime: "12 min read",
    category: "Architecture",
    featured: false,
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl">
      <div className="max-w-2xl mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Thoughts and tutorials on software engineering, artificial intelligence, and building scalable systems.
        </p>
      </div>

      <div className="space-y-12">
        {placeholderPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <article className={`p-8 rounded-3xl border transition-all ${post.featured ? 'bg-card border-accent/20 hover:border-accent shadow-lg shadow-accent/5' : 'bg-transparent border-border/50 hover:bg-card hover:border-border'}`}>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                <time className="text-sm text-muted-foreground">{post.date}</time>
                <span className="hidden md:inline text-border">•</span>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">{post.category}</span>
                <span className="hidden md:inline text-border">•</span>
                <span className="text-sm text-muted-foreground">{post.readingTime}</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                Read article <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
