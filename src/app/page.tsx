import  AboutMe  from "./components/AboutMe";
import NavBar from "./components/NavBar";
import ExpLab from './components/ExpLab/ExpLab';
import Divisor from "./components/Divisor";
import Skills from "./components/Skills/Skills";


export default function Home() {

const expl:string = 'Experiencia Laboral' || ''
const sk:string = 'Skills' || ''

  return (
    <main className="flex flex-col space-y-4 min-h-screen min-w-full bg-dark-graf-bgmain ml p-3">
    <NavBar/>
    
    <AboutMe/>
    <Divisor text={expl}/>
    <ExpLab/>
    <Divisor text={sk}/>
    <Skills/>
    </main>
  )
}
