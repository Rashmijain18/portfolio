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
    ],
    aiTools: ["Cursor", "Microsoft Copilot", "ChatPwC"],
    tools: ["Visual Studio", "Postman", "GitHub", "Azure DevOps (ADO)"],
    additionalSkills: [
      "Team management",
      "Requirements gathering",
      "Design discussions",
      "Stakeholder demo presentations",
      "Experience in the full project life cycle",
      "Leading Scrum meetings",
      "Project management using Azure DevOps",
    ],
  };

  return (
    <div className="flex flex-col gap-6 prose prose-invert">
      <h2 className="text-lightest-slate">Skills</h2>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-green">Frontend</h3>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((tech, index) => (
                  <span
                    key={index}
                    className="text-lightest-slate bg-light-navy px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-green">Backend</h3>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((tech, index) => (
                  <span
                    key={index}
                    className="text-lightest-slate bg-light-navy px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-green">AI/ML & GenAI</h3>
          <div className="flex flex-wrap gap-2">
            {skills.aiTools.map((tool, index) => (
              <span
                key={index}
                className="text-lightest-slate bg-light-navy px-3 py-1 rounded"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-green">Additional Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="text-lightest-slate bg-light-navy px-3 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
