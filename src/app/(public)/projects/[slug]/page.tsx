import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { projectsData } from "@/config/data";
import { Button } from "@/components/ui/button";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-24 max-w-4xl">
      <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
      </Link>

      <header className="mb-16">
        <div className="flex items-center gap-2 text-sm font-medium text-accent mb-4 uppercase tracking-wider">
          {project.category}
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Button className="rounded-full">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </Button>
          <Button variant="outline" className="rounded-full border-border">
            <IconBrandGithub className="mr-2 h-4 w-4" /> Source Code
          </Button>
        </div>
      </header>

      <div className="bg-muted aspect-video rounded-3xl border border-border mb-16 relative overflow-hidden flex items-center justify-center">
        <span className="font-display text-2xl text-muted-foreground/40">[Project Cover Image]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-border/40">
        <div className="md:col-span-2 space-y-8 prose prose-lg dark:prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            This project represents a significant technical challenge and a robust solution. 
            Detailed database-driven content for this section will be implemented in Phase 2.
            Currently, this layout establishes the visual hierarchy and architectural pattern 
            for the project details.
          </p>
          <h2>Key Features</h2>
          <ul>
            <li>Comprehensive full-stack architecture</li>
            <li>Optimized user experience and accessibility</li>
            <li>Scalable database design</li>
            <li>Secure data handling and authentication</li>
          </ul>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Key Concepts</h3>
            <ul className="space-y-2">
              {project.keyConcepts.map(concept => (
                <li key={concept} className="flex items-start text-sm">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0 mr-3"></div>
                  <span className="text-foreground/80">{concept}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
