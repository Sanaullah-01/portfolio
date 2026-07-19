import { Metadata } from "next";
import { experienceData } from "@/config/data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional work experience and internships.",
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="max-w-2xl mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">Experience</h1>
        <p className="text-xl text-muted-foreground">
          My professional journey in software engineering, cloud computing, and technical leadership.
        </p>
      </div>

      <div className="relative border-l border-border/60 ml-4 md:ml-8 space-y-16 pb-8">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background"></div>
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                <div className="text-lg text-muted-foreground font-medium">
                  {exp.company} <span className="text-border mx-2">•</span> {exp.location}
                </div>
              </div>
              <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                {exp.period}
              </div>
            </div>

            {exp.project && (
              <div className="mb-4">
                <h4 className="font-semibold text-foreground/90">Project: {exp.project}</h4>
                <p className="text-muted-foreground mt-1">{exp.description}</p>
              </div>
            )}

            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Highlights</h4>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground">
                    <div className="mt-2 h-1 w-1 rounded-full bg-foreground/30 shrink-0 mr-3"></div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full border border-border/50 text-muted-foreground text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
