"use client";
import { useEffect, useState } from "react";
import formationArr, { IFormation } from "../../mock/formation";
import ArrowIcon from "../Icons/Arrrow";



export const Formation = () => {
  const handleSort = (data: IFormation[] | any, sortBy: any) => {
    if (data.find((x:any) => typeof x[sortBy] !== "number"))
      // sort by localeCompare
      return data.sort((a: any, b: any) => b[sortBy].localeCompare(a[sortBy]));
    // sort by number
    else return data.sort((a: any, b: any) => b[sortBy] - a[sortBy]);
  };

  interface IFormationState {
    sortedby: string;
    data: IFormation[];
  }

  const initialState: IFormationState = {
    sortedby: "",
    data: formationArr,
  };

  const [data, setData] = useState<IFormationState>(initialState);

  const handleSortClick = (sortby: any) => {
    setData((prev) => {
      return { ...prev, sortedby: sortby, data: handleSort(data.data, sortby) };
    });
  };

  const textWithIcon =(text:string) => {
    return (<div className="flex items-center justify-center">
      <p>{text} </p>
      <ArrowIcon/>
    </div>)
  }


  return (
    <>
      <div id="formation" className="flex  w-full overflow-auto  ">
        <table className="table text-white w-fit">
          <thead>
            <tr className="text-cyan-600">
              <th className="" onClick={() => handleSortClick("year_start")}> 
                {textWithIcon('Inicio')}
                </th>
              <th onClick={() => handleSortClick("year_end")}>  {textWithIcon('Fin')}</th>
              <th onClick={() => handleSortClick("academy")}>{textWithIcon('Academia')}</th>
              <th>Titulacion</th>
              <th onClick={() => handleSortClick("grade")}>{textWithIcon('Grado')}</th>
              <th>Cred Id</th>
              <th onClick={() => handleSortClick("cred_url")}>{textWithIcon('Cred URL')}</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((formation: IFormation, index) => (
              <tr className="border-b justify-center text-center" key={index}>
                <td className="p-3">{formation.year_start}</td>
                <td className="p-3">{formation.year_end}</td>
                <td className="p-3">{formation.academy}</td>
                <td className="w-auto p-3">{formation.titulation}</td>
                <td className="w-auto p-3">{formation.grade}</td>
                <td className="p-3">{formation.cred_id}</td>
                <td className="p-3">
                  {formation.cred_url.length > 0 && (
                    <a href={formation.cred_url}> Link </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
