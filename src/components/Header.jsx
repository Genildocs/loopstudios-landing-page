import React from 'react';
import Logo from '/assets/images/logo.svg';
import HeroMobile from '/assets/images/mobile/image-hero.jpg';
import { motion } from 'motion/react';
export default ({ children }) => (
  <header
    className={`relative px-6 md:px-40 pt-10 md:pt-16 min-h-[650px] bg-[url(${HeroMobile})] md:bg-[url(${HeroMobile})] bg-no-repeat bg-cover bg-center `}>
    <div className="flex items-center justify-between">
      <div className="logo relative z-50">
        <img src={Logo} alt="logo" className="w-36 h-6 md:w-48 md:h-8" />
      </div>
      {children}
    </div>
    <motion.div
      className="border-3 border-white border-solid mt-36 w-full max-w-[330px] md:max-w-[650px] p-5"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true, amount: 'some' }}>
      <motion.h1 className="text-white text-4xl md:text-7xl uppercase font-josefin font-light w-full">
        Immersive experiences that deliver
      </motion.h1>
    </motion.div>
  </header>
);
