import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Envelope from './components/Envelope';
import Hero from './components/Hero';
import CeremonyInfo from './components/Ceremony_info';
import CelebrateTime from './components/Celebrate_time';
import Background from './components/Background';

function AppContent() {
  const navigate = useNavigate();
  const [isOpening, setIsOpening] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      navigate('/main');
      setIsOpening(false);
    }, 1500);
  };

  return (
    <Background>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ 
                opacity: isOpening ? 0 : 1,
                scale: isOpening ? 1.2 : 1,
              }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut" 
              }}
              exit={{ 
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.8 }
              }}
            >
              <Envelope onOpen={handleEnvelopeClick} />
            </motion.div>
          } />

          <Route path="/main" element={
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: 0.2
                }
              }}
              exit={{ 
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.5 }
              }}
            >
              <div className="space-y-0">
                <Hero />
                <CeremonyInfo />
                <CelebrateTime />
              </div>
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </Background>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;