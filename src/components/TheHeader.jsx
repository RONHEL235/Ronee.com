const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Literary Works</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

