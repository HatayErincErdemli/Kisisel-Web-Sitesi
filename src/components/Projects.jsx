import React from "react";
import { languages } from "../../data";
function Projects() {
  return (
    <div className="bg-[#cbf180] px-60 pt-20 flex flex-col gap-y-6">
      <h2 className="text-4xl text-[#4731d2] font-bold">
        {languages.en.projects.title}
      </h2>
      <div>
        {languages.en.projects.projects_items.map(
          (
            { img, name, about_content, site_url, github_url, site, github },
            index
          ) => {
            return (
              <div
                className="bg-white rounded-xl shadow-md mb-8 flex flex-row"
                key={index}
              >
                <img
                  className="max-w-md rounded-l-xl border-r border-black"
                  src={img}
                  alt=""
                />
                <div className="px-12 py-8 flex flex-col items-start justify-around">
                  <p className="text-[#4731d2] text-2xl font-bold">{name}</p>
                  <p className="text-lg">{about_content}</p>
                  <div className="text-white flex items-center gap-x-2">
                    <a
                      className="bg-[#4731d2] rounded-3xl px-5 py-1"
                      href="https://tr.react.dev"
                    >
                      react
                    </a>
                    <a
                      className="bg-[#4731d2] rounded-full px-5 py-1"
                      href="https://redux.js.org"
                    >
                      redux
                    </a>
                    <a
                      className="bg-[#4731d2] rounded-full px-5 py-1"
                      href="https://vercel.com"
                    >
                      vercel
                    </a>
                  </div>
                  <div className="flex flex-row gap-8">
                    <a
                      className="underline decoration-solid font-semibold"
                      href={site_url}
                    >
                      {site}
                    </a>
                    <a
                      className="underline decoration-solid font-semibold"
                      href={github_url}
                    >
                      {github}
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
