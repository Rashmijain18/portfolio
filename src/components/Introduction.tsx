import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Introduction = () => {
  return (
    <section className="w-full p-6 prose prose-invert flex flex-col items-center justify-center gap-8">
      <div className="mb-8">
        <p className="text-green">Hi, my name is</p>
        <h1 className="text-lightest-slate">Rashmi Jain.</h1>
        <h2>I build things for the web.</h2>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
      </div>
      <div className="flex text-green gap-8">
        <button className="border border-green rounded-md p-3">
          Download Resume
        </button>
        <button className="border border-green rounded-md p-3">
          Contact Me
        </button>
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/hirerashmi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightest-slate hover:text-green transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Rashmijain18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightest-slate hover:text-green transition-colors"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </section>
  );
};
