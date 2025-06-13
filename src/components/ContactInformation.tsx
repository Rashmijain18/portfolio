import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

export const ContactInformation = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center min-h-[90vh]"
    >
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h3 className="text-lightest-slate">Get In Touch</h3>
        <h3 className="text-green">Contact Me</h3>
        <div className="flex gap-4">
          <a
            href="mailto:rashmi.jain24@outlook.com"
            className="flex items-center gap-2 text-lightest-slate hover:text-green transition-colors"
          >
            <HiMail size={20} />
            <span>rashmi.jain24@outlook.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hirerashmi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors flex gap-2 items-center"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <p className="mt-auto text-center p-4 bottom-0">Built by Rashmi Jain</p>
    </section>
  );
};
