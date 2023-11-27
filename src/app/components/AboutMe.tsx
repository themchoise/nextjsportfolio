import aboutme from "../mock/information";
import Image from 'next/image'


 const AboutMe = () => {
  return (
    <>
    
    <article className=" ">
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
    <div className="text-cyan-50 text-justify m-2 shadow-[0px_0px_0px_0.2px_#f7fafc]  bg-dark-graf-nav p-5">
        {aboutme}
    </div>
    <div className="m-2 shadow-[0px_0px_0px_0.2px_#f7fafc]  bg-dark-graf-nav flex justify-center p-5 	object-contain	">
    <Image 
      className ='object-contain'
      src="/random1.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
    </div>
   
    </article>
    
    </>
  )
}


export default AboutMe;
