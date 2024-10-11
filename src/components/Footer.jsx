import React from "react";
import { languages } from "../../data";

function Footer() {
  return (
    <div className=" bg-white flex flex-col justify-between items-center gap-8 px-60 py-20">
      <h2 className="text-[#4731d2] text-4xl font-bold">
        {languages.en.footer.title}
      </h2>
      <p className="text-2xl">{languages.en.footer.intro}</p>
      <p className="text-[#4731d2] text-lg font-medium underline decoration-solid">
        {languages.en.footer.email}
      </p>
      <div className="flex gap-x-4 items-center">
        <i className="fa-brands fa-twitter text-[#4731d2] text-2xl"></i>
        <i className="fa-brands fa-codepen text-[#4731d2] text-2xl"></i>
        <i className="fa-solid fa-at text-[#4731d2] text-2xl"></i>
        <i className="fa-brands fa-instagram text-[#4731d2] text-2xl"></i>
      </div>
    </div>
  );
}

export default Footer;
