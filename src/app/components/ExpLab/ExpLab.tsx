import React from 'react'
import jobHistory from '../../mock/jobHistory'
import JobCard from './JobCard';
//sm:flex-wrap sm:justify-center sm:items-center md:flex flex-wrap 
const ExpLab = () => {
  return (

    <article id='explab' className=" text-white">
    
    <div className="xl:flex xl:justify-evenly md:flex md:flex-wrap md:justify-center   ">
    {jobHistory.map( (job, index : number) => (
    <JobCard
      key = {index}
       year_start={job.year_start}
        year_end={job.year_end}
        company={job.company}
        job_details={job.job_details}
        job_techs={job.job_techs}
        />
    ) )}
    
    </div>
 
    </article>
    
  )
}
export default ExpLab