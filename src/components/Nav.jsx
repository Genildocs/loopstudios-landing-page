import React, { useEffect } from 'react';
import IconHamburguer from '../assets/icon-hamburger.svg';
import IconClose from '../assets/icon-close.svg';
import { motion } from 'motion/react';
export default function Nav({ devices, isOpen, setIsOpen }) {
  const listMenu = ['About', 'Careers', 'Events', 'Products', 'Support'];

  const toggleMenu = () => setIsOpen(!isOpen);

  const variantsModal = {
    open: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 1)',
      zIndex: 10,
      transition: { duration: 0.6 },
    },
    close: {
      position: 'absolute',
      left: '-100%',
      transition: { duration: 0.3 },
    },
  };

  const variantsMenu = {
    active: { opacity: 1, y: 0, visibility: 'visible' },
    inactive: { opacity: 0, y: -20, visibility: 'hidden' },
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return (
    <nav>
      {/* Menu mobile */}
      {devices.small && (
        <div>
          <motion.button
            className="cursor-pointer relative z-50 "
            style={{ display: isOpen ? 'none' : 'block' }}
            onClick={toggleMenu}>
            <img src={IconHamburguer} alt="menu icon hamburguer" />
          </motion.button>
          <button
            className="cursor-pointer relative z-50 "
            style={{ display: isOpen ? 'block' : 'none' }}
            onClick={toggleMenu}>
            <img src={IconClose} alt="menu icon close" />
          </button>

          <motion.div
            variants={variantsModal}
            animate={isOpen ? 'open' : 'close'}
            exit="close"
            className=" top-0  w-full h-screen z-auto bg-transparent">
            <motion.ul
              className="absolute left-6 top-[30%] flex flex-col justify-between gap-5 text-white  text-3xl  font-josefin font-light"
              variants={variantsMenu}
              animate={isOpen ? 'active' : 'close'}>
              {listMenu.map((item, index) => {
                return (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <a href="#" className="hoverAndBeforeLink">
                      {item}
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        </div>
      )}
      {/* Menu desktop */}
      {devices.medium && (
        <ul className="flex items-center justify-between gap-3 text-white text-lg font-normal">
          {listMenu.map((item, index) => {
            return (
              <li key={index}>
                <a href="#" className="hoverAndBeforeLink">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
