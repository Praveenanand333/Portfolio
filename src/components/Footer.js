import React from 'react';
import { Box, Container, Typography, IconButton, Link, Divider, Grid, useTheme } from '@mui/material';
import { Email, LinkedIn, GitHub, Code, ArrowUpward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import socialUrl from '../Data/SocialUrl';

function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { icon: <Email />, url: socialUrl.email, label: 'Email' },
    { icon: <LinkedIn />, url: socialUrl.linkedin, label: 'LinkedIn' },
    { icon: <GitHub />, url: socialUrl.github, label: 'GitHub' },
    { icon: <Code />, url: socialUrl.leetcode, label: 'LeetCode' },
  ];

  const quickLinks = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#experience' },
    { text: 'Projects', href: '#projects' },
    { text: 'Skills', href: '#skills' },
    { text: 'Education', href: '#education' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <Box 
      component="footer"
      sx={{ 
        py: 6, 
        mt: 6,
        backgroundColor: theme.palette.background.section,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.03,
          backgroundImage: `radial-gradient(${theme.palette.primary.main} 2px, transparent 2px)`,
          backgroundSize: '30px 30px',
          pointerEvents: 'none',
        }}
      />

      <Container>
        {/* Top section with back to top button */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 4,
          }}
        >
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton 
              onClick={scrollToTop} 
              size="large" 
              sx={{ 
                bgcolor: theme.palette.primary.main,
                color: '#fff',
                '&:hover': { 
                  bgcolor: theme.palette.primary.dark,
                },
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 5px 15px rgba(0,0,0,0.5)' 
                  : '0 5px 15px rgba(0,0,0,0.1)',
              }}
            >
              <ArrowUpward />
            </IconButton>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {/* About section */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              component={motion.div}
              whileHover={{ x: 5 }}
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                background: 'linear-gradient(45deg, #3a86ff 30%, #fb5607 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Praveen V
            </Typography>
            
            <Typography variant="body2" paragraph>
              Aspiring Software Engineer specializing in full-stack development, cloud-native applications, and machine learning.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {socialLinks.map((link, index) => (
                <IconButton 
                  key={index} 
                  href={link.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  component={motion.a}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  sx={{ 
                    color: theme.palette.primary.main,
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(82,169,255,0.1)' : 'rgba(58,134,255,0.1)',
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  component={motion.a}
                  whileHover={{ x: 5 }}
                  sx={{ 
                    mb: 1, 
                    color: 'text.primary', 
                    textDecoration: 'none',
                    '&:hover': { color: theme.palette.primary.main },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Contact
            </Typography>
            
            <Typography variant="body2" paragraph>
              Feel free to reach out if you have any questions or would like to connect!
            </Typography>
            
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Email:</strong> praveenanand333@gmail.com
            </Typography>
            
            <Typography variant="body2">
              <strong>Location:</strong> Chennai, India
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, opacity: 0.6 }} />

        {/* Copyright */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Praveen V. All Rights Reserved.
          </Typography>
          
          <Typography variant="caption" color="text.secondary" sx={{ mt: { xs: 1, sm: 0 } }}>
            Made with React & Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;