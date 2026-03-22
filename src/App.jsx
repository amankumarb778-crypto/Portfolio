import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import './App.css';
import CustomCursor from './components/common/CustomCursor';

import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className="App">
      <CustomCursor />
      {/* Global Video Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // Dynamic overlay based on theme
          background: theme === 'light'
            ? 'rgba(244, 244, 245, 0.97)'
            : 'rgba(30, 30, 47, 0.97)', // Soft dark background #1e1e2f with high opacity
          backdropFilter: 'none', // Removed blur for cleaner look
          zIndex: 1
        }}></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.8, // Increased video visibility
            background: '#0f172a'
          }}
        >
          <source src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
