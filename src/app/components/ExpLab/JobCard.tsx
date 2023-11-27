import jobData from "../../mock/information";
import { IJobHistory } from '../../mock/jobHistory';

const JobCard = ({year_start,year_end,company,job_details,job_techs}:IJobHistory) => {

  const renderTechs = () => {
   return job_techs.map((job, index) => {
      return(<>
      <div  key={index}>
       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{job}</span>
       </div>
      </>)
    })

  }
 
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#1b1e23] ">
          <sub className="text-xl ">{year_start} - {year_end?year_end:'Actualidad'}</sub>
       
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{company}</div>
          <p className="text-blue-300 text-base h-24">
            {job_details}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        {job_techs.map((tech, index) => ( <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tech}</span>))} 
        </div>
      </div>
    );
  };
  
  export default JobCard;
  