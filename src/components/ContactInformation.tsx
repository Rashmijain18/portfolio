import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

export const ContactInformation = () => {
  return (
    <div className="flex flex-col prose prose-invert">
      <h2 className="text-lightest-slate">Get In Touch</h2>
      <div className="flex flex-col gap-4">
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
            className="text-lightest-slate hover:text-green transition-colors flex gap-2  items-center"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};
