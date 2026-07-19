import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What I am currently focused on.",
};

export default function NowPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl">
      <div className="mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">Now</h1>
        <p className="text-xl text-muted-foreground">
          What I&apos;m focused on right now.
        </p>
        <p className="text-sm text-muted-foreground mt-4 italic">
          Last updated: July 2026
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-8">
        <p className="lead">
          I am currently a Computer Science student at National University of Technology (NUTECH) in Islamabad. My main focus is on balancing my academic workload with practical, hands-on software engineering.
        </p>

        <div>
          <h2 className="font-display font-bold text-2xl text-foreground mt-8 mb-4">Currently focused on:</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0 mr-4"></div>
              <span>Building full-stack applications with Next.js and React ecosystem.</span>
            </li>
            <li className="flex items-start">
              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0 mr-4"></div>
              <span>Strengthening my foundation in Data Structures and Algorithms.</span>
            </li>
            <li className="flex items-start">
              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0 mr-4"></div>
              <span>Learning System Design for scalable applications.</span>
            </li>
            <li className="flex items-start">
              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0 mr-4"></div>
              <span>Exploring AI Engineering and building intelligent AI Agents.</span>
            </li>
            <li className="flex items-start">
              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0 mr-4"></div>
              <span>Improving my knowledge of cloud architecture, specifically AWS.</span>
            </li>
            <li className="flex items-start">
              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0 mr-4"></div>
              <span>Building production-quality software and contributing to the open-source community.</span>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-base">
          <em>This is a &quot;now&quot; page, inspired by Derek Sivers. It serves as a public declaration of my current priorities.</em>
        </p>
      </div>
    </div>
  );
}
