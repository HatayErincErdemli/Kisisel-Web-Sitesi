import React from "react";
import { languages } from "../../data";

function Skills() {
  return (
    <div className="w-auto h-auto dark:bg-[#242128] px-60 pt-20 pb-10 items-start flex flex-wrap flex-row ">
      <h2 className="text-4xl text-[#4731d2] dark:text-[#cbf180] font-bold mr-20">
        {languages.en.skills.title}
      </h2>
      <div className="flex flex-row flex-wrap justify-between w-3/4">
        {languages.en.skills.skills_items.map(({ logo, name }, index) => {
          return (
            <div
              className="skills-items flex flex-row items-center justify-between space-x-4 px-28 pb-10 "
              key={index}
            >
              <img className="size-24 rounded-md" src={logo} />
              <p className="text-xl text-gray-700 dark:text-white font-semibold">
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
