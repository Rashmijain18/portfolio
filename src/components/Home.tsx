import { ContactInformation } from "./ContactInformation";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Introduction } from "./Introduction";
import { Header } from "./Header";

export const Home = () => {
  return (
    <div className="bg-dark-navy text-slate w-full flex">
      <div className="w-full flex flex-col">
        <Header />
        <main className="flex justify-center items-center">
          <div className="section-container w-[70vw] flex flex-col gap-60">
            <Introduction />
            <About />
            <Skills />
            <Projects />
            <ContactInformation />
          </div>
        </main>
      </div>
    </div>
  );
};
