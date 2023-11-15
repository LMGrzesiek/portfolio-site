import React from "react";

function Intro() {
  return (
    <div className=" flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Logan Grzesiek
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Web Developer & Math Tutor
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
      As a former math teacher, I value the people side of development the most. Whether it be as a part of a small team that developed software to help humanize call centers across the globe, or as a part of the agency promotional team that tackled the needs of multiple brands of a Fortune 500 company - I have enjoyed all the time spent brainstorming, implementing and collaborating with the people that help bring web and software development projects to life. If you'd like to see a more in-depth synopsis of
        my professional career, please visit my{" "}
        <a
          href="https://www.linkedin.com/in/logan-grzesiek/"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default Intro;
