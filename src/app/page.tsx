import  AboutMe  from "./components/AboutMe";
import NavBar from "./components/NavBar";
import ExpLab from './components/ExpLab/ExpLab';


export default function Home() {
  return (
    <main className="flex flex-col space-y-4 min-h-screen min-w-full bg-dark-graf-bgmain ml p-3">
    <NavBar/>
    <AboutMe/>
    <ExpLab/>
    </main>
  )
}
