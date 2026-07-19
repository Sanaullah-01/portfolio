import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "Software, hardware, and tools I use on a daily basis.",
};

const equipmentData = [
  {
    category: "Development",
    items: [
      { name: "VS Code", description: "Primary editor for web development." },
      { name: "Visual Studio", description: "Used for specific C/C++ or .NET projects." },
      { name: "PyCharm", description: "Go-to IDE for Python and Machine Learning." },
      { name: "IntelliJ", description: "Preferred IDE for Java development." },
      { name: "Git & GitHub", description: "Version control and code hosting." },
    ]
  },
  {
    category: "Design",
    items: [
      { name: "Figma", description: "UI/UX design and prototyping." },
      { name: "Canva", description: "Quick graphics and presentation design." },
    ]
  },
  {
    category: "Learning & Practice",
    items: [
      { name: "LeetCode", description: "For practicing Data Structures and Algorithms." },
    ]
  }
];

export default function UsesPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="max-w-2xl mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">Uses</h1>
        <p className="text-xl text-muted-foreground">
          A curated list of the software, tools, and services I use to build, learn, and design.
        </p>
      </div>

      <div className="space-y-16">
        {equipmentData.map((section) => (
          <section key={section.category}>
            <h2 className="font-display text-2xl font-bold mb-6 pb-2 border-b border-border/50">
              {section.category}
            </h2>
            <ul className="space-y-6">
              {section.items.map((item) => (
                <li key={item.name} className="flex flex-col md:flex-row md:items-baseline gap-2">
                  <span className="font-semibold text-foreground md:w-48 shrink-0">{item.name}</span>
                  <span className="text-muted-foreground">{item.description}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
