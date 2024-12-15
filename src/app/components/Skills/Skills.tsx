"use client";
import React from "react";
import FrontEnd from "./FrontEnd";
import { baseTech, returnAllSkills } from "@/app/mock/jobHistory";


const Skills = () => {
  
  return (
    <div>
      <article id="skills" className=" w-full h-auto bg-[#1b1e23]">
        <div className="flex flex-wrap items-center justify-evenly">
          {baseTech.map((res, index) => {
            return (
              <div key={index} className=" hover:shadow-[0px_0px_0px_2px_#0B6B95] transition duration-500 ease-in-out  text-white rounded-full px-4 py-2 shadow-md m-3">
              <span className="flex items-center justify-center">
               
               {res}
              </span>
            </div>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default Skills;
