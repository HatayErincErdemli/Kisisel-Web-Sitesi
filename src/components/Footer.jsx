import React, { useContext } from "react";
import { languages } from "../../data";
import { MyContext } from "../contexts/Context";

function Footer() {
  const { getData, data } = useContext(MyContext);

  return (
    <div className=" bg-white dark:bg-[#242128] flex flex-col justify-between items-center gap-8 px-60 py-20">
      <h2 className="text-[#4731d2] dark:text-[#c7bff1] text-4xl font-bold">
        {languages.en.footer.title}
      </h2>
      <p className="text-2xl dark:text-white">{languages.en.footer.intro}</p>
      <p className="text-[#4731d2] dark:text-[#c7bff1] text-lg font-medium underline decoration-solid">
        {languages.en.footer.email}
      </p>
      <div className="flex gap-x-4 items-center">
        <i className="fa-brands fa-twitter text-[#4731d2] dark:text-[#c7bff1] text-2xl"></i>
        <i className="fa-brands fa-codepen text-[#4731d2] dark:text-[#c7bff1] text-2xl"></i>
        <i className="fa-solid fa-at text-[#4731d2] dark:text-[#c7bff1] text-2xl"></i>
        <i className="fa-brands fa-instagram text-[#4731d2] dark:text-[#c7bff1] text-2xl"></i>
      </div>
    </div>
  );
}

export default Footer;
