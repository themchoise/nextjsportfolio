const NavBar = () => {
  return (
    <header>
      <div className="bg-dark-graf-nav h-auto shadow-[0px_0px_0px_0.2px_#f7fafc] m-2">
        <ul className="flex justify-center p-1">
          <li className="mr-6">
            <a className="text-white hover:text-blue-100" href="#">
              Sobre mi
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
