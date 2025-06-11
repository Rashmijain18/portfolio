import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export const Projects = () => {
  const projects = [
    {
      title: "Chore Chart",
      description:
        "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      technologies: ["Algolia", "WordPress", "PHP"],
      githubLink: "https://github.com/your-username/algolia-wordpress",
      liveDemoLink: "https://your-live-demo-url.com",
    },
    {
      title: "Chore Chart",
      description:
        "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      technologies: ["Algolia", "WordPress", "PHP"],
      githubLink: "https://github.com/your-username/algolia-wordpress",
      liveDemoLink: "https://your-live-demo-url.com",
    },
    {
      title: "Chore Chart",
      description:
        "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      technologies: ["Algolia", "WordPress", "PHP"],
      githubLink: "https://github.com/your-username/algolia-wordpress",
      liveDemoLink: "https://your-live-demo-url.com",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-12 p-8">
      <h2 className="text-lightest-slate">Some Things I've Built</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md flex flex-col h-full overflow-hidden"
          >
            {
              <div className="bg-navy p-6 rounded-lg flex flex-col justify-between h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-slate hover:text-green transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.liveDemoLink && (
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-slate hover:text-green transition-colors"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-light-slate mb-4 flex-grow">
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <ul className="flex flex-wrap gap-2 text-sm mt-auto text-light-slate">
                    {project.technologies.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="bg-light-navy text-light-slate px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            }
          </div>
        ))}
      </div>
    </section>
  );
};
