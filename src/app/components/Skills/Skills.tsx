'use client'
import React from 'react'
import FrontEnd from './FrontEnd'
import { returnAllSkills } from '@/app/mock/jobHistory'

const Skills = () => {
console.log('here')
  console.log ( returnAllSkills() )

  return (
    <div>
        <article className="bg-dark-graf-nav shadow-[0px_0px_0px_0.2px_#f7fafc] w-auto h-[500px] ">
          <div className='flex p-5'>
          <div className='px-2 pt-4 pb-2 flex  overflow-auto w-auto h-[500px] '>
    {returnAllSkills().map( (res,index) => (
      <span key={index} className=" m-3 bg-gray-200 rounded-full h-10 px-3 py-1 text-sm font-semibold text-gray-700 ">#{res}</span>
    ))}
    </div>
    </div>
   
    </article>
    </div>
  )
}

export default Skills
