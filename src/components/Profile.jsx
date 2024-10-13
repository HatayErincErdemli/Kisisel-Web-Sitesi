import React, { useContext } from "react";
import { languages } from "../../data";
import { MyContext } from "../contexts/Context";

function Profile() {
  const { langData } = useContext(MyContext);
  return (
    <div className="w-auto h-auto flex flex-col items-start px-60 pt-10 pb-20 gap-8 bg-[#4731d2] dark:bg-[#171042]">
      <h2 className="text-4xl text-[#cbf180] font-bold pt-10">
        {langData.profile.title}
      </h2>

      <div className="flex flex-row justify-between w-full h-full max-xl:flex-col max-xl:w-auto max-xl:h-auto">
        <div className="flex flex-col gap-8 w-full h-full">
          <p className="text-3xl text-white font-semibold">
            {langData.profile.info}
          </p>
          <div className="">
            {langData.profile.info_items.map(({ title, answer }, index) => {
              return (
                <div
                  className="skills-items flex flex-row justify-between items-center mb-5"
                  key={index}
                >
                  <p className="text-lg font-semibold text-[#cbf180] ">
                    {title}
                  </p>
                  <p className="text-lg text-right text-white">{answer}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img
            className="rounded-md size-72"
            src={langData.hero.profile_img}
            alt=""
          />
        </div>
        <div className="flex flex-col text-white justify-start gap-8 w-full">
          <p className="text-3xl font-semibold">{langData.profile.about}</p>
          <p className="text-xl">{langData.profile.about_content}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
