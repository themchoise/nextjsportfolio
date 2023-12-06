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
    ,
    {
        academy: 'Linkedin',
        titulation: 'Javascript',
        grade: 'Course',
        year_start: 2020,
        year_end: 2020,
        cred_id: '',
        cred_url: 'https://www.linkedin.com/learning/certificates/a8cad059b7d5a83291277430cd379024baf60331b25723aff676507695163146?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BVwTJDHkPQKmg5RK6ilC5jQ%3D%3D'
    }
    ,
    {
        academy: 'Argentina Programa',
        titulation: 'Java Etapa II',
        grade: 'Course',
        year_start: 2022,
        year_end: 2022,
        cred_id: '',
        cred_url: ''
    }
    ,
    {
        academy: 'Argentina Programa',
        titulation: 'Java Etapa I',
        grade: 'Course',
        year_start: 2021,
        year_end: 2021,
        cred_id: '',
        cred_url: ''
    }
    ,
    {
        academy: 'Udemy',
        titulation: 'JavaScript Full',
        grade: 'Course',
        year_start: 2021,
        year_end: 2021,
        cred_id: 'UC-59c46af9-dd32-4739-965a-ca9c9a1b9e48',
        cred_url: 'https://www.udemy.com/certificate/UC-59c46af9-dd32-4739-965a-ca9c9a1b9e48/'
    }
    ,
    {
        academy: 'CoderHouse',
        titulation: 'JavaScript',
        grade: 'Course',
        year_start: 2021,
        year_end: 2021,
        cred_id: '617a1fd23088d40045607c27',
        cred_url: ''
    }
    ,
    {
        academy: 'Udemy',
        titulation: 'React',
        grade: 'Course',
        year_start: 2022,
        year_end: 2022,
        cred_id: 'UC-3312d70f-e13f-45b2-9f11-bd0012b9c68a',
        cred_url: ''
    }
    ,
    {
        academy: 'Platzi',
        titulation: 'Nodejs Api Rest',
        grade: 'Course',
        year_start: 2022,
        year_end: 2022,
        cred_id: '',
        cred_url: 'https://platzi.com/p/maximiliano.joyce/curso/2485-backend-nodejs/diploma/detalle/'
    }
    ,
    {
        academy: 'Platzi',
        titulation: 'Docker',
        grade: 'Course',
        year_start: 2023,
        year_end: 2023,
        cred_id: '',
        cred_url: 'https://platzi.com/p/maximiliano.joyce/curso/2066-docker/diploma/detalle/'
    }
    ,
    {
        academy: 'Platzi',
        titulation: 'Nodejs Microservicios Redis',
        grade: 'Course',
        year_start: 2023,
        year_end: 2023,
        cred_id: '',
        cred_url: 'https://platzi.com/p/maximiliano.joyce/curso/1767-nodejs-microservicios/diploma/detalle/'
    }
]


export default formationArr;