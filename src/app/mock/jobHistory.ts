const NODEJS  :string = 'NodeJs'
const JAVASCRIPT :string = 'Javascript'
const REACT :string = 'React'
const NEXTJS :string = 'NextJs'
const TYPESCRIPT :string = 'TypeScript'
const SEQUALIZE :string = 'Sequalize'
const PYTHON :string = 'Python'
const DJAngo :string = 'DJAngo'
const FLASK :string = 'Flask'
const JAVA :string = 'Java'
const GO :string = 'GO'
const SPRINGBOOT :string = 'SpringBoot'
const SPRINGFRAMEWORK :string = 'Spring Framework'
const SPRINGSECURITY :string = 'Spring Security'
const JBOSS :string = 'JBOSS'
const WILDFLY :string = 'Wildfly'
const ELECTRONJS :string = 'ElectronJS'
const MYSQL: string = 'MYSQL'
const MSSQL: string = 'MSSQL'
const HTML: string = 'HTML'
const CSS: string = 'CSS'
const REDUX: string = 'Redux'
const JQUERY: string = 'JQuery'
const MUI: string = 'MUI'
const BOOSTRAP: string = 'Boostrap'
const MONGODB: string = 'Mongo DB'
const NGINX: string = 'NGINX'
const MIKROTIK: string = 'Mikrotik'
const FORTIGATE: string = 'Fortigate'
const WINDOWSSERVER: string = 'Windows Server'
const UBUNTUSERVER: string = 'Ubuntu Server'
const DOCKER: string = 'Docker'



export interface IJobHistory{
    year_start: number
    year_end?: number | ''
    company: string
    job_details: string
    job_techs: string[]
    
}

const jobHistory:IJobHistory[] = [
    {
        year_start: 2025,
        year_end: '',
        company: 'MercadoLibre',
        job_details: 'Software Engineer | Backend Developer',
        job_techs: [GO,JAVA  ]
    },
    {
        year_start: 2023,
        year_end: 2025,
        company: 'Gestion de EMP. DEP.',
        job_details: 'Full Stack Deveper',
        job_techs: [JAVA, NODEJS, JAVASCRIPT, REACT, NEXTJS, TYPESCRIPT, SEQUALIZE, PYTHON , FLASK, DOCKER]
    },
    {
        year_start: 2023,
        year_end: 2022,
        company: 'EY',
        job_details: 'Backend Developer',
        job_techs: [JAVA, SPRINGBOOT, SPRINGFRAMEWORK, SPRINGSECURITY, JBOSS, WILDFLY, NODEJS, ELECTRONJS]
    },
    {
        year_start: 2022,
        year_end: 2022,
        company: 'CoderHouse',
        job_details: 'Tutoria Curso SQL',
        job_techs: [MYSQL]
    },
    {
        year_start: 2021,
        year_end: 2022,
        company: 'Sportclub',
        job_details: 'Full Stack Deveper',
        job_techs: [REACT, ELECTRONJS, MYSQL,MSSQL, JAVASCRIPT, REDUX, HTML, CSS, JQUERY, MUI, MONGODB  ]
    },
    {
        year_start: 2013,
        year_end: 2021,
        company: 'Sportclub',
        job_details: 'SysAdmin, Networking, Infraestructura',
        job_techs: [NGINX,MIKROTIK, FORTIGATE, WINDOWSSERVER, UBUNTUSERVER  ]
    },
   



]

export const returnAllSkills = ():Array<string> => {

    let newArr = []
    const techs = jobHistory.map(job => job.job_techs)

    for (let i = 0; i < techs.length; i++) {
        const elm = techs[i];
        for (let j = 0; j < elm.length; j++) {
            const elminter = elm[j];
            newArr.push(elminter)
        }
    }
  
    return [...new Set(newArr)]



}

export const baseTech:Array<string> = [JAVASCRIPT, PYTHON, JAVA]


export default jobHistory

