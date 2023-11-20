import aboutme from "../mock/information";
import Image from 'next/image'


 const AboutMe = () => {
  return (
    <>
    
    <article className="bg-dark-graf-nav">
    <div className="grid grid-cols-2 gap-2">
    <div className="text-cyan-50 text-justify m-2">
        {aboutme}
    </div>
    <div className="m-2">
    <Image 
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
