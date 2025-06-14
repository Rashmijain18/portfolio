import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-green text-xl font-bold">Rashmi Jain</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className={`${
                  activeSection === "about"
                    ? "text-green"
                    : "text-lightest-slate hover:text-green"
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`${
                  activeSection === "skills"
                    ? "text-green"
                    : "text-lightest-slate hover:text-green"
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`${
                  activeSection === "projects"
                    ? "text-green"
                    : "text-lightest-slate hover:text-green"
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${
                  activeSection === "contact"
                    ? "text-green"
                    : "text-lightest-slate hover:text-green"
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
