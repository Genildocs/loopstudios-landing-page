import React from 'react';
import Logo from '../assets/logo.svg';
export default function Footer({ devices }) {
  const listMenu = ['About', 'Careers', 'Events', 'Products', 'Support'];
  return (
    <footer className="bg-black p-8 flex flex-col md:flex-row items-center text-white">
      <div className="logo relative z-50">
        <img src={Logo} alt="logo" className="w-36 h-6 md:w-48 md:h-8" />
      </div>
      <div className="py-3">
        <ul>
          {listMenu.map((item, index) => (
            <li
              className="hoverAndBeforeLink [&:nth-child(-n+4)]:mb-3"
              key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <p>© 2025 Loopstudios. All rights reserved.</p>
    </footer>
  );
}
