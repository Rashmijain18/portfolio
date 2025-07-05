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
      video: "/ChoreChart.mp4",
    },
    {
      title: "Sudoku",
      description:
        "A playable Sudoku game built from scratch, letting users solve puzzles interactively in the browser. Includes real-time number validation and intuitive controls for a smooth and engaging logic experience.",
      technologies: ["React", "CSS"],
      githubLink: "https://github.com/Rashmijain18/Sudoku/tree/master",
      liveDemoLink: "https://sudoku-five-neon.vercel.app/",
      image: "/Sudoku.png",
      video: "",
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
    <section className="flex flex-col" id="projects">
      <h3 className="text-lightest-slate pb-8">Some Things I've Built 💻 </h3>

      <div className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-navy [&::-webkit-scrollbar-thumb]:bg-lightest-slate [&::-webkit-scrollbar-thumb]:rounded-full">
        {projects.map((project, index) => (
          <div key={index} className="flex-none w-[400px] snap-center">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};
