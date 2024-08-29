import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#projects" className="hover:underline">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;