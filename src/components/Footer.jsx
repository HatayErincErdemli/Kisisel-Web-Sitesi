import React, { useContext } from "react";
import { languages } from "../../data";
import { MyContext } from "../contexts/Context";

function Footer() {
  const { langData } = useContext(MyContext);

  return (
    <div className=" bg-white dark:bg-[#242128] flex flex-col justify-between items-center gap-8 px-60 py-20 max">
      <h2 className="text-[#4731d2] dark:text-[#c7bff1] text-4xl font-bold text-center">
        {langData.footer.title}
      </h2>
      <p className="text-2xl text-center dark:text-white">
        {langData.footer.intro}
      </p>
      <p className="text-[#4731d2] dark:text-[#c7bff1] text-lg font-medium underline decoration-solid">
        {langData.footer.email}
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
