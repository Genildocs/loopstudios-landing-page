import React from 'react';
import Logo from '../assets/logo.svg';
import Facebook from '../assets/icon-facebook.svg';
import Twitter from '../assets/icon-twitter.svg';
import Pinterest from '../assets/icon-pinterest.svg';
import Instagram from '../assets/icon-instagram.svg';

export default function Footer({ devices }) {
  const listMenu = ['About', 'Careers', 'Events', 'Products', 'Support'];
  const socialMedia = [
    {
      title: 'Facebook',
      src: Facebook,
    },
    {
      title: 'Twitter',
      src: Twitter,
    },
    {
      title: 'Pinterest',
      src: Pinterest,
    },
    {
      title: 'Instagram',
      src: Instagram,
    },
  ];

  return (
    <footer className="bg-black px-6 md:px-40 p-8 flex flex-col md:flex-row items-center md:justify-between text-white">
      <div className="flex flex-col items-center md:items-start">
        <div className="logo relative z-50">
          <img src={Logo} alt="logo" className="w-36 h-6 md:w-48 md:h-8" />
        </div>
        <div className="py-3">
          <ul className="md:flex gap-5">
            {listMenu.map((item, index) => (
              <li key={index} className="hoverAndBeforeLink ">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end gap-5">
        <ul className="socialMedia flex gap-5 mt-3 mb-1">
          {socialMedia.map((item, index) => (
            <li key={index} className="hoverAndBeforeLink">
              <a href="#">
                <img src={item.src} alt={item.title} />
              </a>
            </li>
          ))}
        </ul>
        <p>© 2025 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
}
