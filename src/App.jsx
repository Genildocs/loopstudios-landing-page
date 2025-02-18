import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { useMediaQuery } from '@uidotdev/usehooks';
import SectionInteractive from './components/SectionInteractive';
import Footer from './components/Footer';
export default function App() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const isMediumDevice = useMediaQuery('only screen and (min-width : 769px) ');

  const device = {
    small: isSmallDevice,
    medium: isMediumDevice,
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header>
        <Nav devices={device} isOpen={isOpen} setIsOpen={setIsOpen} />
      </Header>
      <SectionInteractive />
      <Footer devices={device} />
    </>
  );
}
