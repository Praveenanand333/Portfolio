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
import { Code as CodeIcon, Cloud as CloudIcon, Psychology as PsychologyIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Specializations with icons
  const specializations = [
    {
      title: 'Full-Stack Development',
      icon: <CodeIcon fontSize="large" />,
      description: 'Experienced in building responsive web applications using React, Node.js, and various databases.',
    },
    {
      title: 'Cloud-Native Applications',
      icon: <CloudIcon fontSize="large" />,
      description: 'Proficient in AWS services including S3, Lambda, SageMaker, API Gateway, and Bedrock.',
    },
    {
      title: 'Machine Learning',
      icon: <PsychologyIcon fontSize="large" />,
      description: 'Skilled in developing ML/DL pipelines for data analysis and predictive modeling.',
    },
  ];

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
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Typography variant="h5" gutterBottom fontWeight={600}>
                Aspiring Software Developer Engineer
              </Typography>
              
              <Typography paragraph sx={{ mb: 3 }}>
                I'm an enthusiastic software engineer with hands-on experience in full-stack development, 
                cloud-native applications, and machine learning. Currently working as a Software Developer 
                Engineer Intern at Amazon, I've been involved in developing tools for power analysis on Kindle devices 
                and building an internal chatbot using Amazon Bedrock.
              </Typography>
              
              <Typography paragraph sx={{ mb: 3 }}>
                With a strong foundation in computer science fundamentals and a track record of academic excellence, 
                I'm passionate about building scalable, production-grade applications that solve real-world problems.
              </Typography>
              
              <Typography paragraph>
                My technical expertise includes a wide range of programming languages and frameworks, 
                with particular strength in React, AWS services, and Python for machine learning applications.
              </Typography>
              
              <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail-Oriented', 'Innovative'].map((trait) => (
                  <Chip 
                    key={trait} 
                    label={trait} 
                    color="primary" 
                    variant="outlined" 
                    sx={{ 
                      fontWeight: 500,
                      px: 1,
                    }} 
                  />
                ))}
              </Box>
            </Box>
          </Grid>
          
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