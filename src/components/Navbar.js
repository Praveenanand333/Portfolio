import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
  Switch,
  FormControlLabel,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, DarkMode, LightMode } from '@mui/icons-material';
import { motion } from 'framer-motion';

// HideOnScroll component for hiding the navbar when scrolling down
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar({ onDarkModeToggle, darkMode, scrollToSection }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Find the current section
      const sections = navItems.map(item => ({
        id: item.id,
        offset: document.getElementById(item.id)?.offsetTop - 100 || 0,
      }));
      
      // Sort sections by offset to find the current section
      const currentSection = sections
        .sort((a, b) => a.offset - b.offset)
        .find(section => scrollPosition < section.offset);

      const currentSectionId = currentSection ? 
        sections[Math.max(0, sections.indexOf(currentSection) - 1)].id : 
        sections[sections.length - 1].id;

      if (currentSectionId !== activeSection) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, navItems]);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const navDrawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box display="flex" justifyContent="flex-end" p={1}>
        <IconButton onClick={toggleDrawer} edge="end" aria-label="close drawer">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.id} 
            onClick={() => handleNavClick(item.id)}
            sx={{
              backgroundColor: activeSection === item.id ? 
                theme.palette.action.selected : 'transparent',
            }}
          >
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                sx: {
                  fontWeight: activeSection === item.id ? 600 : 400,
                  color: activeSection === item.id ? 
                    theme.palette.primary.main : 'inherit',
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
      <AppBar 
        position="fixed" 
        sx={{
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        }}
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <Container>
          <Toolbar sx={{ py: 1, display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo/Name */}
            <Typography 
              variant="h6" 
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{ 
                fontWeight: 700, 
                cursor: 'pointer',
                color: theme.palette.primary.main,
                background: 'linear-gradient(45deg, #3a86ff 30%, #fb5607 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.5px',
              }}
              onClick={() => handleNavClick('home')}
            >
              Praveen V
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box display="flex" alignItems="center">
                <Box sx={{ mr: 2, display: 'flex', flexWrap: 'nowrap', overflow: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                  {navItems.map((item) => (
                    <Button 
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      sx={{
                        mx: 0.25,
                        fontSize: '0.9rem',
                        px: 0.75,
                        fontWeight: activeSection === item.id ? 600 : 400,
                        color: activeSection === item.id ? 
                          theme.palette.primary.main : 'text.primary',
                        position: 'relative',
                        '&::after': activeSection === item.id ? {
                          content: '""',
                          position: 'absolute',
                          bottom: -2,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '20px',
                          height: '3px',
                          borderRadius: '3px',
                          backgroundColor: theme.palette.primary.main,
                        } : {},
                      }}
                      component={motion.button}
                      whileHover={{ 
                        scale: 1.05,
                      }}
                      whileTap={{ 
                        scale: 0.95,
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}

            {/* Mobile Navigation */}
            {isMobile && (
              <Box display="flex" alignItems="center">
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>

        {/* Mobile Navigation Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer}
        >
          {navDrawer}
        </Drawer>
      </AppBar>
  );
}

export default Navbar;