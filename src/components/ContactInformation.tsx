import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

export const ContactInformation = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center min-h-[90vh]"
    >
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h3 className="text-lightest-slate">Let’s Connect ✉️</h3>
        <p className="w-[50vw] text-center">
          I’m currently open to new opportunities where I can create,
          collaborate, and grow. Whether you’re hiring, have a project in mind,
          or just want to chat tech — feel free to reach out. My inbox is always
          open, and I’d love to hear from you!
        </p>
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
