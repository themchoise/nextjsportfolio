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
        job_techs: ['NodeJS', 'Javascript', 'React', 'NextJs', 'TypeScript', 'Sequalize', 'Python', 'DJAngo', 'Flask']
    },
    {
        year_start: 2023,
        year_end: 2022,
        company: 'EY',
        job_details: 'JAVA DEV',
        job_techs: ['Java', 'SpringBoot', 'Spring Framework', 'Spring Security', 'JBOSS', 'Wildfly', 'NodeJS', 'ElectronJS']
    },
    {
        year_start: 2022,
        year_end: 2022,
        company: 'CoderHouse',
        job_details: 'Tareas a desarrollar: Dictado de clases especiales ( clases de refuerzo ).Seguimiento a estudiantes.Corrección de desafíos.Resolución de consultas.',
        job_techs: ['Java', 'SpringBoot', 'Spring Framework', 'Spring Security', 'JBOSS', 'Wildfly', 'NodeJS', 'ElectronJS']
    }


]


export default jobHistory