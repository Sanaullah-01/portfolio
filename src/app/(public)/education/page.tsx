import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background and educational journey.",
};

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="max-w-2xl mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">Education</h1>
        <p className="text-xl text-muted-foreground">
          My academic journey, transitioning from pre-medical studies to computer science.
        </p>
      </div>

      <div className="space-y-12">
        <div className="relative border-l border-border/60 ml-4 md:ml-8 pb-4">
          
          <div className="relative pl-8 md:pl-12 mb-16">
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background"></div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Bachelor of Science in Computer Science</h3>
                <div className="text-lg text-muted-foreground font-medium">
                  National University of Technology <span className="text-border mx-2">•</span> Islamabad, Pakistan
                </div>
              </div>
              <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                September 2023 – Present
              </div>
            </div>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground mt-4">
              <p>
                Pursuing a comprehensive degree in Computer Science, focusing on software engineering, 
                artificial intelligence, and systems architecture.
              </p>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-border ring-4 ring-background"></div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Intermediate in Pre-Medical</h3>
                <div className="text-lg text-muted-foreground font-medium">
                  Govt Post Grad. College Layyah <span className="text-border mx-2">•</span> Pakistan
                </div>
              </div>
              <div className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit whitespace-nowrap">
                August 2019 – April 2021
              </div>
            </div>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground mt-4">
              <p>
                My early academic focus was in the medical sciences, which instilled in me a strong foundation 
                in analytical thinking, research, and scientific methodology before my transition to technology.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
