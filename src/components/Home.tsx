import { ContactInformation } from "./ContactInformation";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Introduction } from "./Introduction";
import { Header } from "./Header";

export const Home = () => {
  return (
    <div className="min-h-screen bg-dark-navy text-slate w-full flex">
      <div className="w-full flex flex-col">
        <Header />
        <main className="flex justify-center items-center min-h-screen">
          <div className="section-container w-[70vw] flex flex-col justify-center">
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
