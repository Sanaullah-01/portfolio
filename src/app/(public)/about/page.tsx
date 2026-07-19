import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Sana Ullah and his journey into Computer Science.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-12">About Me</h1>
      
      <div className="space-y-16">
        <section>
          <h2 className="font-display text-2xl font-bold mb-6 border-b border-border/50 pb-2">Personal Story</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <p>
              My journey into technology wasn&apos;t a straight line. I initially pursued an intermediate education in Pre-Medical at Govt Post Grad. College Layyah. However, I found myself increasingly fascinated by how software and intelligent systems were solving complex problems.
            </p>
            <p>
              This curiosity drove me to make a significant pivot. I transitioned into Computer Science, dedicating myself to mastering the fundamentals of programming, algorithms, and web development. This adaptability has become one of my core strengths—I&apos;m not afraid to dive into unfamiliar territory, learn rapidly, and apply new concepts.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-6 border-b border-border/50 pb-2">Academic Foundation</h2>
          <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 mb-8">
            <h3 className="font-bold text-lg mb-1">Bachelor of Science in Computer Science</h3>
            <p className="text-muted-foreground mb-4">National University of Technology, Islamabad • Sept 2023 – Present</p>
            <p className="text-sm text-muted-foreground mb-6">
              Currently building a strong foundation in both theoretical and applied computer science.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-sm text-accent uppercase tracking-wider mb-3">Core CS</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Data Structures and Algorithms</li>
                  <li>Object-Oriented Programming</li>
                  <li>Operating Systems</li>
                  <li>Computer Networks</li>
                  <li>Computer Architecture</li>
                  <li>Compiler Construction</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-accent uppercase tracking-wider mb-3">AI & Math</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Artificial Intelligence</li>
                  <li>Probability & Statistics</li>
                  <li>Linear Algebra & Calculus</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-accent uppercase tracking-wider mb-3">Software & Web</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Web Technologies & Engineering</li>
                  <li>MVC Architecture</li>
                  <li>Software Quality Assurance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-accent uppercase tracking-wider mb-3">Systems</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Digital Logic Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-6 border-b border-border/50 pb-2">Current Direction</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <p>
              I am focused on bridging the gap between theoretical computer science and production-ready software. By combining my understanding of core concepts like DSA and system architecture with modern tools like Next.js, AWS, and AI, I strive to build scalable, high-performance applications.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
