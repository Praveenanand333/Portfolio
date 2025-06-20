import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Box mt={2}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Footer />
      </Box>
    </Container>
  );
}

export default App;
