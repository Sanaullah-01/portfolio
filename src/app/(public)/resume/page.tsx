import { Metadata } from "next";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experienceData, skillsData, certificationsData } from "@/config/data";

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download my professional resume.",
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border/50 pb-8">
        <div>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4">Resume</h1>
          <p className="text-xl text-muted-foreground">
            A summary of my academic and professional qualifications.
          </p>
        </div>
        <Button className="rounded-full shadow-lg">
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
      </div>

      <div className="bg-card border border-border shadow-sm rounded-3xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12 pb-12 border-b border-border/50">
          <h2 className="font-display text-4xl font-bold text-foreground mb-2">Sana Ullah</h2>
          <p className="text-lg text-muted-foreground mb-4">Full-Stack Developer & Computer Science Student</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>Islamabad, Pakistan</span>
            <span>•</span>
            <span>sanaullahharaj0435@gmail.com</span>
            <span>•</span>
            <span>github.com/Sanaullah-01</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Summary */}
          <section>
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2">Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Computer Science student at National University of Technology with a strong foundation in full-stack development, real-time systems, and cloud architecture. Proven ability to quickly learn new technologies and apply them to build scalable, high-performance applications.
            </p>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2">Education</h3>
            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline">
                <h4 className="font-bold text-foreground">Bachelor of Science in Computer Science</h4>
                <span className="text-sm font-medium text-accent">Sept 2023 - Present</span>
              </div>
              <p className="text-muted-foreground">National University of Technology, Islamabad</p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2">Experience</h3>
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-1">
                    <h4 className="font-bold text-foreground">{exp.role}</h4>
                    <span className="text-sm font-medium text-accent">{exp.period}</span>
                  </div>
                  <div className="text-muted-foreground mb-2">{exp.company} | {exp.location}</div>
                  <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1 text-sm">
                    {exp.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2">Technical Skills</h3>
            <div className="space-y-3">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category}>
                  <span className="font-bold text-foreground text-sm">{category}: </span>
                  <span className="text-muted-foreground text-sm">{skills.join(", ")}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2">Certifications</h3>
            <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1 text-sm">
              {certificationsData.slice(0, 4).map((cert, idx) => (
                <li key={idx}>{cert.title} {cert.issuer && `- ${cert.issuer}`}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
