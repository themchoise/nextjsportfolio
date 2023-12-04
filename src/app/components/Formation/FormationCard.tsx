import { IFormation } from '@/app/mock/formation'
import React from 'react'

export const FormationCard = ({...formation }:IFormation) => {
  return (
    <div className=" flex flex-row justify-center items-center text-white">
    <div className="p-5 w-auto h-auto    hover:shadow-[0px_0px_0px_2px_#0B6B95] transition duration-500 ease-in-out m-2 shadow-[0px_0px_0px_0.2px_#f7fafc] rounded-full">
      <div className="grid grid-cols-4 gap-4 items-center">
        <div className='relative'>
            <small className='text-center justify-center items-center'>{formation.year_start} - {formation.year_end}</small>
            <p>{formation.academy}</p>
            </div>
        <div>{formation.titulation}</div>
        <div>Grado: {formation.grade}</div>
        <div></div>
      </div>
    </div>
  </div>
  )
}
