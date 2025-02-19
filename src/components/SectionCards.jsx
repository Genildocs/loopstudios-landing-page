import React from 'react';
import { motion } from 'motion/react';
import Image2Mobile from '../assets/mobile/image-deep-earth.jpg';
import Image2Desktop from '../assets/desktop/image-deep-earth.jpg';
import Image3Mobile from '../assets/mobile/image-night-arcade.jpg';
import Image3Desktop from '../assets/desktop/image-night-arcade.jpg';
import Image4Mobile from '../assets/mobile/image-soccer-team.jpg';
import Image4Desktop from '../assets/desktop/image-soccer-team.jpg';
import Image5Mobile from '../assets/mobile/image-grid.jpg';
import Image5Desktop from '../assets/desktop/image-grid.jpg';
import Image6Mobile from '../assets/mobile/image-from-above.jpg';
import Image6Desktop from '../assets/desktop/image-from-above.jpg';
import Image7Mobile from '../assets/mobile/image-pocket-borealis.jpg';
import Image7Desktop from '../assets/desktop/image-pocket-borealis.jpg';
import Image8Mobile from '../assets/mobile/image-curiosity.jpg';
import Image8Desktop from '../assets/desktop/image-curiosity.jpg';
import Image9Mobile from '../assets/mobile/image-fisheye.jpg';
import Image9Desktop from '../assets/desktop/image-fisheye.jpg';

export default function SectionCards({ devices }) {
  const cardsImageMobile = [
    { mobile: 'image-deep-earth', src: Image2Mobile },
    { mobile: 'image-night-arcade', src: Image3Mobile },
    { mobile: 'image-soccer-team-vr', src: Image4Mobile },
    { mobile: 'image-the-grid', src: Image5Mobile },
    { mobile: 'image-from-up-above-vr', src: Image6Mobile },
    { mobile: 'image-pocket-borealis', src: Image7Mobile },
    { mobile: 'image-the-curiosity', src: Image8Mobile },
    { mobile: 'image-make-it-fisheye', src: Image9Mobile },
  ];
  const cardsImageDesktop = [
    { desktop: 'image-deep-earth', src: Image2Desktop },
    { desktop: 'image-night-arcade', src: Image3Desktop },
    { desktop: 'image-soccer-team-vr', src: Image4Desktop },
    { desktop: 'image-the-grid', src: Image5Desktop },
    { desktop: 'image-from-up-above-vr', src: Image6Desktop },
    { desktop: 'image-pocket-borealis', src: Image7Desktop },
    { desktop: 'image-the-curiosity', src: Image8Desktop },
    { desktop: 'image-make-it-fisheye', src: Image9Desktop },
  ];
  return (
    <section className="px-6 md:px-40 mb-5 relative">
      <div className="flex justify-center md:justify-start mb-5">
        <span className="text-center text-3xl font-josefin font-light uppercase">
          Our Creations
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {devices.small &&
          cardsImageMobile.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 'some' }}>
              <img src={img.src} alt={img.mobile} />
              <span className="positionNameCards">
                {img.mobile
                  .replace('image-', '')
                  .replaceAll('-', ' ')
                  .toUpperCase()}
              </span>
            </motion.div>
          ))}
        {devices.medium &&
          cardsImageDesktop.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 'some' }}>
              <img src={img.src} alt={img.desktop} />
              <span className="positionNameCards">
                {img.desktop
                  .replace('image-', '')
                  .replaceAll('-', ' ')
                  .toUpperCase()}
              </span>
            </motion.div>
          ))}
      </div>
      <div className="flex items-center justify-center mt-5 md:absolute -top-6 right-45">
        <button className="border-[1px] border-black border-solid px-8 py-2 cursor-pointer hover:bg-black hover:text-white uppercase tracking-[0.2rem] transition-all">
          See All
        </button>
      </div>
    </section>
  );
}
