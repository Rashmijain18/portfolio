export const About = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-[50vw] ">
        <h3 className="text-lightest-slate flex-start">About Me</h3>
        <div className="flex flex-row gap-20">
          <p className="border border-green">
            Hello! My name is Rashmi and I enjoy creating things that live on
            the internet. My interest in web development started back in 2015
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! Fast-forward to today, and I've had the privilege of working at
            an advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients. I also recently launched a
            course that covers everything you need to build a web app with the
            Spotify API using Node & React.
          </p>
          <div className="border border-white w-[100dvw] "></div>
        </div>
      </div>
    </section>
  );
};
