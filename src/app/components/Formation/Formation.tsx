"use client"
import formationArr, { IFormation } from '../../mock/formation';
import { FormationCard } from './FormationCard';



export const Formation = () => {
  return (<>
  {formationArr.map((formation:IFormation , index) => 

  (
  <div key={index}>
  <FormationCard key={index}
    academy = {formation.academy}
    titulation = {formation.titulation}
    grade = {formation.grade}
    year_start = {formation.year_start}
    year_end = {formation.year_end}
    cred_id = {formation.cred_id}
    cred_url = {formation.cred_url}
    />
    </div>
    
    )
  
  )}
  </>           );
};
