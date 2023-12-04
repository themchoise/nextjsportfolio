export interface IFormation {
    academy: string;
    titulation: string;
    grade: string;
    year_start: number;
    year_end: number;
    cred_id: string;
    cred_url: string;
}


const formationArr: IFormation[] = [
    {
        academy: 'EETNº1 Manuel Belgrano',
        titulation: 'Tecnico en Informatica',
        grade: 'Bachillerato',
        year_start: 2008,
        year_end: 2011,
        cred_id: '',
        cred_url: ''
    },
    {
        academy: 'CISCO',
        titulation: 'IT Essentials',
        grade: 'Course',
        year_start: 2013,
        year_end: 2013,
        cred_id: '',
        cred_url: ''
    },
    {
        academy: 'CISCO',
        titulation: 'CCNA 1-4 & CCNA Security',
        grade: 'Course',
        year_start: 2015,
        year_end: 2018,
        cred_id: '',
        cred_url: ''
    },
    {
        academy: 'CISCO',
        titulation: 'Cybersecurity',
        grade: 'Course',
        year_start: 2018,
        year_end: 2018,
        cred_id: '',
        cred_url: ''
    },
    {
        academy: 'LACNIC',
        titulation: 'NetWorking',
        grade: 'Course',
        year_start: 2018,
        year_end: 2019,
        cred_id: '',
        cred_url: ''
    },
    {
        academy: 'CISCO',
        titulation: 'CyberOps',
        grade: 'Course',
        year_start: 2019,
        year_end: 2020,
        cred_id: '',
        cred_url: ''
    }
    ,
    {
        academy: 'UNSAM',
        titulation: 'Tecnicatura en Programacion',
        grade: 'Pre-Grade',
        year_start: 2022,
        year_end: 0,
        cred_id: '',
        cred_url: ''
    }
]


export default formationArr;