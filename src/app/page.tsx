import  AboutMe  from "./components/AboutMe";
import NavBar from "./components/NavBar";
import ExpLab from './components/ExpLab/ExpLab';
import Divisor from "./components/Divisor";
import Skills from "./components/Skills/Skills";
import { Formation } from "./components/Formation/Formation";
import Contact from "./components/Contact/Contact";


export default function Home() {


enum Sections {
  ABOUTME = 'Acerca de ',
  EXPL = 'Experiencia Laboral',
  SK = 'Skills',
  FORMATION = 'Formation',
  CONTACT = 'Contacto',
}

  return (
    <main className="flex flex-col spa space-y-4 min-h-screen min-w-full bg-dark-graf-bgmain ml p-3 scroll-smooth">
    <NavBar/>
    <p className="text-white text-center">*** Contador de visitas: 99282 ***</p>
    
    <AboutMe/>
    <Divisor text={Sections.EXPL}/>
    <ExpLab/>
    <Divisor text={Sections.SK}/>
    <Skills/>
    <Divisor text={Sections.FORMATION}/>
    <Formation/>
    <Divisor text={Sections.CONTACT}/>
    <Contact/>
    </main>
  )
}
