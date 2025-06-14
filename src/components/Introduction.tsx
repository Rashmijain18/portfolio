import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Introduction = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col gap-8 pt-40">
      <div>
        <p className="text-green">Hi, my name is</p>
        <h1 className="!text-lightest-slate">Rashmi Jain.</h1>
        <h2>I build things for the web.</h2>
        <p className="flex w-[40vw]">
          Bridging code and intelligence—crafting scalable apps with the power
          of AI and the precision of experience.
        </p>
      </div>
      <div className="flex text-green gap-4">
        <a
          href="/Rashmi_Jain_Resume.pdf"
          download="Rashmi_Jain_Resume.pdf"
          className="border border-green rounded-md p-3 hover:bg-green-tint transition-colors cursor-pointer !text-green !no-underline"
        >
          Download Resume
        </a>
        <button
          onClick={scrollToContact}
          className="border border-green rounded-md p-3 hover:bg-green-tint transition-colors"
        >
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
