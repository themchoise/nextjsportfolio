"use client"
import { useEffect, useState } from 'react';
import formationArr, { IFormation } from '../../mock/formation';




export const Formation = () => {


  const handleSort = (data:IFormation[], sortitem:any) => data.sort((a:any,b:any) =>  b[sortitem] - a[sortitem] )


  interface IFormationState{
    sortedby:string
    data:IFormation[] 
  }

  const initialState:IFormationState = {
    sortedby:'',
    data: formationArr //handleSort(formationArr, 'year_end')
  }


  const [sortedBy, setSortedBy] = useState<IFormationState>(initialState)




const handleSortClick = (sortItem) =>{
  setSortedBy(prev => {return {...prev, sortedby:'grade', data:handle
  Sort(sortedBy.data, 'grade')}})

}

console.log(sortedBy)


  return (<>
<div className='flex  justify-center items-center w-full '>
<table className="md:table-fixed    text-white w-auto">
  <thead>
    <tr className='text-cyan-600'>
      <th onClick={ (e) =>  handleSortClick(e) }>Inicio</th>
      <th>Fin</th>
      <th>Academia</th>
      <th>Titulacion</th>
      <th>Grado</th>
      <th>Cred Id</th>
      <th>Cred URL</th>
    </tr>
  </thead>
  <tbody>
  {sortedBy.data.map((formation:IFormation , index) => 

(
     <tr className='border-b justify-center text-center' key={index}>
        <td className='p-3'>
          {formation.year_start}
        </td>
        <td className='p-3'>
          {formation.year_end}
        </td>
        <td className='p-3'>
          {formation.academy}
        </td>
        <td className='w-auto p-3'>
          {formation.titulation}
        </td>
        <td className='w-auto p-3'>
          {formation.grade}
        </td>
        <td className='p-3'>
          {formation.cred_id}
        </td>
        <td className='p-3'>
        {formation.cred_url.length>0 && <a href= {formation.cred_url}> Link </a>  }
        </td>
     </tr>
  )

)}
  </tbody>
</table>
</div>
  
  </>           );
};
