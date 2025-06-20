import React, { useState, useEffect } from 'react';
import { Container, Box, CssBaseline, ThemeProvider, GlobalStyles, Fab, Tooltip } from '@mui/material';
import { LightMode as LightModeIcon, DarkMode as DarkModeIcon } from '@mui/icons-material';
import { lightTheme, darkTheme } from './theme';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // First try to get from localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    // Fall back to system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    console.log('Dark mode set to:', darkMode); // Debug logging
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Define section refs for smooth scrolling
  const sections = {
    home: React.createRef(),
    about: React.createRef(),
    experience: React.createRef(),
    projects: React.createRef(),
    skills: React.createRef(),
    education: React.createRef(),
    certifications: React.createRef(),
    achievements: React.createRef(),
    contact: React.createRef(),
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = sections[sectionId];
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* Floating Dark Mode Toggle */}
      <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} arrow placement="left">
        <Fab 
          size="small" 
          onClick={toggleDarkMode}
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          sx={{
            position: 'fixed',
            top: 20,
            right: 20,
            zIndex: 9999,
            bgcolor: darkMode ? '#ffd166' : '#023e8a',
            color: darkMode ? '#121212' : '#ffffff',
            '&:hover': {
              bgcolor: darkMode ? '#ffb703' : '#0077b6',
            },
            boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={darkMode ? 'dark' : 'light'}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Show sun icon in dark mode, moon icon in light mode */}
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </motion.div>
          </AnimatePresence>
        </Fab>
      </Tooltip>
      <GlobalStyles
        styles={(theme) => ({
          body: {
            transition: 'background-color 0.3s ease',
            overflowX: 'hidden',
          },
          '*::-webkit-scrollbar': {
            width: '8px',
          },
          '*::-webkit-scrollbar-track': {
            background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f1f1f1',
          },
          '*::-webkit-scrollbar-thumb': {
            background: theme.palette.mode === 'dark' ? '#555' : '#ccc',
            borderRadius: '4px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            background: theme.palette.mode === 'dark' ? '#777' : '#aaa',
          },
        })}
      />
      <Navbar onDarkModeToggle={toggleDarkMode} darkMode={darkMode} scrollToSection={scrollToSection} />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        <Box
          component="main"
          sx={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
          }}
        >
          <Box ref={sections.home} id="home" sx={{ pb: 10 }}>
            <Hero />
          </Box>
          
          <Box ref={sections.about} id="about" sx={{ py: 10 }}>
            <About />
          </Box>
          
          <Box ref={sections.experience} id="experience" sx={{ py: 10 }}>
            <Experience />
          </Box>
          
          <Box ref={sections.projects} id="projects" sx={{ py: 10 }}>
            <Projects />
          </Box>
          
          <Box ref={sections.skills} id="skills" sx={{ py: 10 }}>
            <Skills />
          </Box>
          
          <Box ref={sections.education} id="education" sx={{ py: 10 }}>
            <Education />
          </Box>
          
          <Box ref={sections.certifications} id="certifications" sx={{ py: 10, bgcolor: (theme) => theme.palette.background.section }}>
            <Certifications />
          </Box>
          
          <Box ref={sections.achievements} id="achievements" sx={{ py: 10 }}>
            <Achievements />
          </Box>
          
          <Box ref={sections.contact} id="contact" sx={{ py: 10 }}>
            <Contact />
          </Box>
          
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
