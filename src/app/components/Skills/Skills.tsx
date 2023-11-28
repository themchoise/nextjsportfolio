'use client'
import React from 'react'
import FrontEnd from './FrontEnd'
import { returnAllSkills } from '@/app/mock/jobHistory'

const Skills = () => {


  return (
    <div>
        <article className="bg-dark-graf-nav shadow-[0px_0px_0px_0.2px_#f7fafc] w-auto h-auto ">
          <div className='flex flex-wrap'>
          
    {returnAllSkills().map( (res,index) => (
      <span key={index} className=" m-3 bg-gray-200 rounded-full h-10 px-3 py-1 text-sm font-semibold text-gray-700 ">#{res}</span>
    ))}
  
    </div>
   
    </article>
    </div>
  )
}

export default Skills
