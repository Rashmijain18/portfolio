export const About = () => {
  return (
    <section className="flex flex-col" id="about">
      <h3 className="text-lightest-slate flex-start">About Me 👩‍💻 </h3>
      <div className="flex flex-row gap-20">
        <div className="w-[40vw] flex items-center justify-center">
          <img
            src={"/profile.png"}
            alt="profile"
            className="w-[340px] h-[340px] rounded-full border-2 border-green object-cover object-center"
          />
        </div>
        <div className="w-[60vw]">
          <p>
            I'm a Full Stack Developer with over 9 years of experience building
            scalable web applications and AI-driven solutions. I specialize in
            integrating AI tools into the development workflow to boost
            efficiency and innovation—most notably using platforms like Cursor,
            which helped me
            <b className="text-lightest-slate">
              {" "}
              reduce development time by up to 50%.
            </b>{" "}
            I've developed applications powered by AI and conducted{" "}
            <b className="text-lightest-slate">
              prompt engineering training for over 50 employees at PwC
            </b>
            , helping teams better utilize AI in their day-to-day work.
          </p>
          <p>
            Currently, I'm building more personal projects using AI tools and
            experimenting with prompt strategies to understand what works
            best—refining my approach to faster, smarter website development
            with AI. I'm also actively exploring cutting-edge platforms such as
            Replit, Codeium, and more to stay at the forefront of AI-enhanced
            development.
          </p>
          <p>
            I thrive in Agile, collaborative environments that value clean code,
            open communication, and continuous improvement. I enjoy
            <b className="text-lightest-slate">
              {" "}
              leading teams, mentoring junior developers, conducting code
              reviews, and tackling complex feature development
            </b>{" "}
            with a focus on quality and performance. I'm always motivated by
            opportunities to make a meaningful impact through thoughtful
            engineering and strong team dynamics.
          </p>
        </div>
      </div>
    </section>
  );
};
