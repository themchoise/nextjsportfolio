import React from 'react'
import jobHistory from '../../mock/jobHistory'
import JobCard from './JobCard';

const ExpLab = () => {
  return (
    <div className=''>
    <article className="bg-dark-graf-nav text-white  shadow-[0px_0px_0px_0.2px_#f7fafc] ">

      <div className='flex justify-center space-x-5'>
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
    </div>
  )
}
export default ExpLab