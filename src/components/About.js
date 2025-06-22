import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  Chip,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { specializations } from '../Data/SpecializationsData';
import AboutData from '../Data/AboutData';

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          component={motion.h3}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          align="center"
          sx={{ 
            mb: 5, 
            fontWeight: 700,
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(90deg, #52a9ff 0%, #ff9e40 100%)' 
              : 'linear-gradient(90deg, #3a86ff 0%, #fb5607 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={4}>
          {/* About Text */}
          <AboutData/>
          
          {/* Specialization Cards */}
          <Grid item xs={12} md={6}>
            <Box>
              {specializations.map((spec, index) => (
                <Paper
                  key={spec.title}
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                  elevation={4}
                  sx={{
                    p: 3,
                    mb: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 3,
                    background: theme.palette.background.card,
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    transform: 'translateZ(0)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px) translateZ(0)',
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 10px 30px rgba(0,0,0,0.5)' 
                        : '0 10px 30px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    }}
                  >
                    {spec.icon}
                  </Avatar>
                  
                  <Box>
                    <Typography variant="h6" fontWeight={500}>
                      {spec.title}
                    </Typography>
                    
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                      {spec.description}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;