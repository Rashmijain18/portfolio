import { ContactInformation } from "./ContactInformation";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Introduction } from "./Introduction";

export const Home = () => {
  return (
    <div className="min-h-screen bg-dark-navy text-slate">
      <div className="container mx-auto p-8 flex flex-col gap-8">
        <Introduction />
        <About />
        <Skills />
        <Projects />
        <ContactInformation />
      </div>
    </div>
  );
};
