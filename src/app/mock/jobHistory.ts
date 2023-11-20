interface JobHistory{
    year_start: number
    year_end?: number | null
    company: string
    job_details: string

}

const jobHistory:JobHistory[] = [
    {
        year_start: 2023,
        year_end: null,
        company: 'Gestion de EMP. DEP.',
        job_details: 'DEV',
    
    }


]


export default jobHistory