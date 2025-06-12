import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Chore Chart",
      description:
        "A collaborative chore chart app built with Cursor, designed to help parents and kids manage daily tasks and rewards together. Focused on clean UI and seamless interaction to promote habit-building and accountability.",
      technologies: [
        "React",
        "Tailwind CSS",
        "NodeJs",
        "Hono.Js",
        "Drizzle",
        "PostgreSQL",
        "Docker",
        "Cursor",
      ],
      githubLink: "https://github.com/jermbo/ChoreChart",
      liveDemoLink: "https://your-live-demo-url.com",
      image: "/Sudoku.png",
    },
    {
      title: "Sudoku",
      description:
        "A playable Sudoku game built from scratch, letting users solve puzzles interactively in the browser. Includes real-time number validation and intuitive controls for a smooth and engaging logic experience.",
      technologies: ["React", "CSS"],
      githubLink: "https://github.com/Rashmijain18/Sudoku/tree/master",
      liveDemoLink: "https://sudoku-five-neon.vercel.app/",
      image: "/Sudoku.png",
    },
    {
      title: "Article on Hoisting",
      liveDemoLink:
        "https://medium.com/@rashmijain1861993/understanding-hoisting-in-javascript-245794b1d327",
      image: "/Hoisting.png",
    },
    {
      title: "Article on Higher Order Functions",
      liveDemoLink:
        "https://medium.com/@rashmijain1861993/higher-order-functions-in-javascript-a1874e6ee378",
      image: "/HOF.png",
    },
  ];

  return (
    <section className="p-40">
      <h3 className="text-lightest-slate pb-8">Some Things I've Built</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};
