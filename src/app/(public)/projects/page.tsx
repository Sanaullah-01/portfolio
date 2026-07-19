import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/config/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my recent full-stack, cloud, and machine learning projects.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="max-w-2xl mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A selection of my recent work focusing on real-time systems, cloud architecture, and machine learning models.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group block h-full">
            <div className="bg-card rounded-3xl border border-border overflow-hidden h-full flex flex-col transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
              <div className="bg-muted aspect-video border-b border-border relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-display text-2xl group-hover:scale-105 transition-transform duration-500">
                  [{project.title} Visual]
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs font-medium text-accent mb-3 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-auto flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
