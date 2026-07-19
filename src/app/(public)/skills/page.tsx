import { Metadata } from "next";
import { skillsData, certificationsData } from "@/config/data";

export const metadata: Metadata = {
  title: "Skills & Certifications",
  description: "Technical skills, tools, and certifications.",
};

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="max-w-2xl mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">Skills</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive overview of my technical expertise, tools, and professional certifications.
        </p>
      </div>

      <div className="space-y-20">
        <section>
          <h2 className="font-display text-3xl font-bold mb-10 border-b border-border/50 pb-4">Technical Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-bold text-lg mb-4 text-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-md bg-secondary/50 text-secondary-foreground text-sm font-medium border border-border/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl font-bold mb-10 border-b border-border/50 pb-4">Certifications & Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certificationsData.map((cert, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border border-border/50 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 leading-snug">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
