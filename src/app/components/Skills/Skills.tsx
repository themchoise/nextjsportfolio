"use client";
import React from "react";
import FrontEnd from "./FrontEnd";
import { returnAllSkills } from "@/app/mock/jobHistory";

const Skills = () => {
  
  return (
    <div>
      <article className=" w-auto h-auto ">
        <div className="flex flex-wrap items-center justify-center">
          {returnAllSkills().map((res, index) => {
            return (
              <div key={index} className=" text-white rounded-full px-4 py-2 shadow-md m-3">
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
