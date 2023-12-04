import  AboutMe  from "./components/AboutMe";
import NavBar from "./components/NavBar";
import ExpLab from './components/ExpLab/ExpLab';
import Divisor from "./components/Divisor";
import Skills from "./components/Skills/Skills";
import { FormationCard } from "./components/Formation/FormationCard";
import { Formation } from "./components/Formation/Formation";


export default function Home() {

const expl:string = 'Experiencia Laboral' || ''
const sk:string = 'Skills' || ''
const formation:string = 'Formation' || ''

  return (
    <main className="flex flex-col spa space-y-4 min-h-screen min-w-full bg-dark-graf-bgmain ml p-3">
    <NavBar/>
    <p className="text-white text-center">*** SITIO EN CONSTRUCCION ***</p>
    
    <AboutMe/>
    <Divisor text={expl}/>
    <ExpLab/>
    <Divisor text={sk}/>
    <Skills/>
    <Divisor text={formation}/>
    <Formation/>
    </main>
  )
}
