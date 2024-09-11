import Link from 'next/link'


const NavBar = () => {
  return (
    <header>
      <div className="bg-dark-graf-nav h-auto shadow-[0px_0px_0px_0.2px_#f7fafc] m-2 ">
        <ul className="flex justify-center p-1">
          <li className="mr-6  space-x-2 overflow-auto xl:space-x-8" >
          <Link href="#aboutme" className='text-white'>
            Sobre Mi
          </Link>
            <Link href="#explab" className='text-white'>
           Experiencia
          </Link>
            <Link href="#skills" className='text-white'>
            Habilidades
          </Link>
          <Link href="#formation" className='text-white'>
            Formacion
          </Link>
          <Link href="#contact" className='text-white'>
            Contacto
          </Link>

          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
