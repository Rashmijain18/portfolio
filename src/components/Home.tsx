import { ContactInformation } from "./ContactInformation";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Introduction } from "./Introduction";

export const Home = () => {
  return (
    <div className="min-h-screen bg-dark-navy text-slate w-full flex">
      <div className="w-full flex flex-col gap-8">
        <div className="section-container ">
          <Introduction />
          <About />
          <Skills />
          <Projects />
          <ContactInformation />
        </div>
      </div>
    </div>
  );
};
