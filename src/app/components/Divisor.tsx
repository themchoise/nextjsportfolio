import React from 'react'

const Divisor = ({text=''}) => {
  return (
    <div className='w-full h-full'>
          <div className="flex justify-center items-center m-1 font-medium py-1 px-2  text-purple-300  ">
            <div className="text-xl font-normal  border-b-[0.1mm] border-gray-50;  p-3  leading-none max-w-full flex-initial">{text}</div>
        </div>
    </div>
  )
}
 
export default Divisor
