import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface Project {
  title: string;
  description?: string;
  technologies?: string[];
  githubLink?: string;
  liveDemoLink?: string;
  image?: string;
  video?: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    title,
    description,
    technologies,
    githubLink,
    liveDemoLink,
    image,
    video,
  } = project;

  return (
    <div className="rounded-lg shadow-md flex flex-col h-full overflow-hidden">
      <div className="bg-navy p-6 rounded-lg flex flex-col justify-between h-full">
        <div className="flex justify-between items-center">
          <h5 className="text-white text-xl font-bold">{title}</h5>
          <div className="flex gap-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-slate hover:text-green transition-colors"
              >
                <FaGithub size={20} />
              </a>
            )}
            {liveDemoLink && (
              <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-slate hover:text-green transition-colors"
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {video && (
          <video
            src={video}
            controls
            className="w-full h-48 object-cover rounded-lg !my-0"
          />
        )}
        {image && (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-48 object-cover rounded-lg !my-0"
          />
        )}

        <p className="text-light-slate flex-grow">{description}</p>
        {technologies && technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2 text-sm mt-auto text-light-slate">
            {technologies.map((tech, techIndex) => (
              <li
                key={techIndex}
                className="bg-light-navy text-light-slate px-3 py-1 rounded-full text-sm list-none"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
