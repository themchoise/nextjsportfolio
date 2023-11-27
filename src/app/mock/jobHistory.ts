const NODEJS  :string = 'NodeJs'
const JAVASCRIPT :string = 'Javascript'
const REACT :string = 'React'
const NEXTJX :string = 'NextJs'
const TYPESCRIPT :string = 'TypeScript'
const SEQUALIZE :string = 'Sequalize'
const PYTHON :string = 'Python'
const DJAngo :string = 'DJAngo'
const FLASK :string = 'Flask'
const JAVA :string = 'Java'
const SPRINGBOOT :string = 'SpringBoot'
const SPRINGFRAMEWORK :string = 'Spring Framework'
const SPRINGSECURITY :string = 'Spring Security'
const JBOSS :string = 'JBOSS'
const WILDFLY :string = 'Wildfly'
const ELECTRONJS :string = 'ElectronJS'
const MYSQL: string = 'MYSQL'

export interface IJobHistory{
    year_start: number
    year_end?: number | ''
    company: string
    job_details: string
    job_techs: string[]
    
}

const jobHistory:IJobHistory[] = [
    {
        year_start: 2023,
        year_end: '',
        company: 'Gestion de EMP. DEP.',
        job_details: 'NODEJS PYTHON DEV',
        job_techs: [NODEJS, JAVASCRIPT, REACT, NEXTJX, TYPESCRIPT, SEQUALIZE, PYTHON, DJAngo, FLASK]
    },
    {
        year_start: 2023,
        year_end: 2022,
        company: 'EY',
        job_details: 'JAVA DEV',
        job_techs: [JAVA, SPRINGBOOT, SPRINGFRAMEWORK, SPRINGSECURITY, JBOSS, WILDFLY, NODEJS, ELECTRONJS]
    },
    {
        year_start: 2022,
        year_end: 2022,
        company: 'CoderHouse',
        job_details: 'Tareas a desarrollar: Dictado de clases especiales ( clases de refuerzo ).Seguimiento a estudiantes.Corrección de desafíos.Resolución de consultas.',
        job_techs: [MYSQL]
    },
    {
        year_start: 2021,
        year_end: 2021,
        company: 'Sportclub',
        job_details: 'Web Developer Full Stack',
        job_techs: ['Java', 'SpringBoot', 'Spring Framework', 'Spring Security', 'JBOSS', 'Wildfly', 'NodeJS', ELECTRONJS]
    }



]


export default jobHistory
