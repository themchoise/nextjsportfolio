"use client"
import aboutme from "../mock/information";
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

 const AboutMe = () => {

  const [effect, setEffect]  = useState('')
  const [position, setPosition]  = useState(0)

  const colorList:string[] = ['#f7fafc', '#3A6166  ','#454B1B']
  const rndNumber = () => {
    const intervalNumbers:number = colorList.length 
    if (position === intervalNumbers) {
      setPosition(0);
      return 0;
    };
    setPosition(position + 1)
    return position
   }


  console.log(effect)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(rndNumber())
      setEffect(colorList[rndNumber() ]) 
    }, 1000);
    return () => clearInterval(interval);
  }, [colorList]);
  

  return (
    <>
    
    
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 bg-r">
    <div className="text-cyan-50 text-justify m-2 shadow-[0px_0px_0px_0.2px_#f7fafc]  bg-dark-graf-nav p-5">
        {aboutme}
    </div>
    <div className={`hover:shadow-[0px_0px_0px_2px_${effect}] transition duration-1000 ease-in-out animate-colorChange m-2 shadow-[0px_0px_0px_0.2px_#f7fafc]  bg-dark-graf-nav flex justify-center p-5 	object-contain	`}
   
    >
    <Image 
      className ='object-contain'
      src="/random1.jpg"
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
