import React, { useContext } from "react";
import { languages } from "../../data";
import "../App.css";
import { MyContext } from "../contexts/Context";

function Hero() {
  const { toggleDarkMode, darkMode, data } = useContext(MyContext);
  const div = "div1";

  console.log(div);
  return (
    <div
      id={darkMode ? "div2" : "div1"}
      className="w-auto h-auto flex flex-col flex-wrap justify-between px-60"
    >
      <div className=" flex flex-row justify-end pt-4 space-x-4">
        <button className="text-base text-[#cbf180] dark:text-[#b7aee3] font-bold">
          TÜRKÇE<span className="text-white dark:text-gray-600">'YE GEÇ</span>
        </button>
        <div className="flex flex-row items-center space-x-2">
          <label className="switch">
            <input onClick={() => toggleDarkMode()} type="checkbox" />
            <span className="slider round"></span>
          </label>
          {!darkMode ? (
            <p className="text-base text-indigo-900 font-bold">DARK MODE</p>
          ) : (
            <p className="text-base text-white font-bold">LIGHT MODE</p>
          )}
        </div>
      </div>
      <div className="m-0 pt-4 pb-8 flex flex-row items- justify-between">
        <p className="text-3xl text-[#cbf180] font-bold">
          {languages.en.hero.profile_name}
        </p>
      </div>

      <div className="pt-8 pb-40 flex flex-row items-center justify-between content-center">
        <div className="flex flex-col gap-8 m-0 max-w-md">
          <h2 className="text-5xl text-[#cbf180] font-bold">
            {languages.en.hero.intro}
          </h2>
          <p className="text-2xl text-white">{languages.en.hero.intro_2}</p>
          <div className="flex text-xl text-indigo-800 flex-row items-center space-x-4">
            <a href="https://github.com/HatayErincErdemli">
              <button className="px-3 py-2 border border-solid border-indigo-800 dark:border-white bg-white dark:bg-[#242128] rounded-md flex flex-row items-center space-x-2">
                <i className="fa-brands fa-github text-indigo-800 dark:text-white text-2xl"></i>
                <p className="text-indigo-800 dark:text-white">Github</p>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/hatay-erinç-erdemlili-a2b5b5332">
              <button className="px-3 py-2 border border-solid border-indigo-800 dark:border-white bg-white dark:bg-[#242128] rounded-md flex flex-row items-center space-x-2">
                <i className="fa-brands fa-linkedin-in text-indigo-800 dark:text-white text-2xl"></i>
                <p className="text-indigo-800 dark:text-white">Linkedin</p>
              </button>
            </a>
          </div>
        </div>
        <div className="">
          <img
            src={languages.en.hero.profile_img}
            alt=""
            className="m-0 p-0 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
