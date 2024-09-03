"use client"
import aboutme from "../mock/information";
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { useBorderColor } from "../hooks/useBorderColor";

 const AboutMe = () => {



  return (
    <>
    
    
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 bg-r">
    <div className="hover:shadow-[0px_0px_0px_2px_#0B6B95] transition duration-500 ease-in-out text-cyan-50 text-justify m-2 shadow-[0px_0px_0px_0.2px_#f7fafc]  bg-dark-graf-nav p-5"

    >
        {aboutme}
    </div>
    <div className={` hover:shadow-[0px_0px_0px_2px_#0B6B95] transition duration-500 ease-in-out m-2 shadow-[0px_0px_0px_0.2px_#f7fafc]  bg-dark-graf-nav flex justify-center p-5 	object-contain	`}
  
    >
    <Image 
      className ='object-contain'
      src="/random2.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
    </div>
   
    
    
    </>
  )
}


export default AboutMe;
