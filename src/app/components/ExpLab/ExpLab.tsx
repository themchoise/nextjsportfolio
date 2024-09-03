import React from 'react'
import jobHistory from '../../mock/jobHistory'
import JobCard from './JobCard';

const ExpLab = () => {
  return (

    <article id='explab' className=" text-white">
    <div className="min-w-full container mx-auto ">
    <div className="flex space-x-3 ">
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
    </div>
    </article>
    
  )
}
export default ExpLab