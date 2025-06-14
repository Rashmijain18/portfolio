export const Skills = () => {
  const skills = {
    frontend: [
      "React",
      "JavaScript",
      "TypeScript",
      "Redux",
      "React-Query",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Jest",
    ],
    backend: [
      "NodeJs",
      "Hono.Js",
      "Drizzle",
      "C#",
      "Microsoft Azure",
      "SignalR",
      "Redis",
      "SQL Server",
      "NoSQL",
      "Docker",
    ],
    aiTools: ["Cursor", "Microsoft Copilot", "ChatPwC"],
    tools: ["Visual Studio", "Postman", "GitHub", "Azure DevOps (ADO)"],
    additionalSkills: [
      "Team management",
      "Requirements gathering",
      "Design discussions",
      "Stakeholder demo presentations",
      "Leading Scrum meetings",
      "Experience in the full project life cycle",
      "Project management using Azure DevOps",
    ],
  };

  const formatCategoryName = (category: string) => {
    if (category === "aiTools") return "AI/ML & GenAI";
    return (
      category.charAt(0).toUpperCase() +
      category.slice(1).replace(/([A-Z])/g, " $1")
    );
  };

  return (
    <section className="flex flex-col" id="skills">
      <h3 className="text-lightest-slate">Tech Toolbox 🧰</h3>
      <div className="flex flex-col gap-4">
        {Object.keys(skills).map((category) => (
          <div key={category}>
            <h4 className="!text-green">{formatCategoryName(category)}</h4>
            <div className="flex flex-wrap gap-2">
              {skills[category as keyof typeof skills].map((skill, index) => (
                <span
                  key={index}
                  className="text-lightest-slate bg-light-navy px-3 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
