import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin, IconCode } from "@tabler/icons-react";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* HERO SECTION */}
      <section className="w-full py-24 md:py-32 lg:py-40 flex flex-col items-center text-center px-4">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
          Sana Ullah
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mb-4">
          Computer Science Student.<br />Full-Stack Developer.
        </p>
        <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mb-10">
          Building and learning at the intersection of software, AI, and cloud computing.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/projects" className={buttonVariants({ size: "lg", className: "rounded-full bg-foreground text-background hover:bg-foreground/90" })}>
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full border-border hover:bg-accent/10 hover:text-accent hover:border-accent/30" })}>
            Contact Me
          </Link>
        </div>
        <div className="flex items-center gap-6 mt-12 text-muted-foreground">
          <Link href="https://github.com/Sanaullah-01" target="_blank" className="hover:text-accent transition-colors">
            <span className="sr-only">GitHub</span>
            <IconBrandGithub className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/sana-ullah-aa370b32a/" target="_blank" className="hover:text-accent transition-colors">
            <span className="sr-only">LinkedIn</span>
            <IconBrandLinkedin className="h-6 w-6" />
          </Link>
          <Link href="https://leetcode.com/u/Sanaullahdev/" target="_blank" className="hover:text-accent transition-colors">
            <span className="sr-only">LeetCode</span>
            <IconCode className="h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="w-full max-w-6xl px-4 py-20 border-t border-border/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">Adaptability & Curiosity</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I started my academic journey with a pre-medical background, but my curiosity about how technology shapes the modern world led me to transition into Computer Science.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Today, I build full-stack web applications, explore machine learning, and continuously expand my understanding of systems architecture.
            </p>
            <Link href="/about" className={buttonVariants({ variant: "link", className: "p-0 text-accent hover:text-accent/80 text-base" })}>
              Read my full story <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-muted/30 rounded-3xl p-8 border border-border/50">
            <h3 className="font-medium text-foreground mb-4">Current Status</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0"></div>
                <span>Studying B.S. Computer Science at National University of Technology (NUTECH)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0"></div>
                <span>Building <strong>StudySync</strong>, a real-time collaborative platform</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0"></div>
                <span>Deepening knowledge in Cloud Architecture (AWS)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="w-full max-w-6xl px-4 py-20 border-t border-border/40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              A selection of my recent projects focusing on real-time systems, cloud architecture, and machine learning.
            </p>
          </div>
          <Link href="/projects" className={buttonVariants({ variant: "outline", className: "shrink-0 rounded-full" })}>
            View all projects
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Featured Project 1 (Full width) */}
          <Link href="/projects/studysync" className="group block">
            <div className="bg-card rounded-3xl border border-border overflow-hidden transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs font-medium text-accent mb-4 uppercase tracking-wider">
                    <span>Real-Time Full-Stack</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4 group-hover:text-accent transition-colors">StudySync</h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    A real-time collaborative study platform featuring a custom HTML5 Canvas collaborative whiteboard and instant state synchronization for concurrent users.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {['React', 'Node.js', 'Socket.io', 'Canvas'].map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-muted aspect-video md:aspect-auto border-t md:border-t-0 md:border-l border-border relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-display text-4xl">
                    [Project Visual]
                  </div>
                </div>
              </div>
            </div>
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 2 */}
            <Link href="/projects/cloud-gallery" className="group block h-full">
              <div className="bg-card rounded-3xl border border-border overflow-hidden h-full flex flex-col transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                <div className="bg-muted aspect-video border-b border-border relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-display text-2xl">
                    [Cloud Gallery]
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">Cloud-Based Photo Gallery</h3>
                  <p className="text-muted-foreground mb-6">
                    A secure gallery system using AWS S3, IAM policies, and Presigned URLs for direct-to-cloud uploads.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">AWS S3</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">React</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project 3 */}
            <Link href="/projects/house-price" className="group block h-full">
              <div className="bg-card rounded-3xl border border-border overflow-hidden h-full flex flex-col transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                <div className="bg-muted aspect-video border-b border-border relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-display text-2xl">
                    [ML Prediction]
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">House Price Prediction</h3>
                  <p className="text-muted-foreground mb-6">
                    A machine learning model predicting property values based on location, area, and real-world features.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">Python</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">Pandas</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="w-full max-w-4xl px-4 py-24 my-20 text-center bg-card border border-border/50 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-6">Let&apos;s build something.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            I am currently open for opportunities, collaborations, and conversations about technology.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full bg-foreground text-background hover:bg-foreground/90 px-8" })}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
