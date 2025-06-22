import React from "react";
import {
  Typography,
  Box,
  Grid,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

function AboutData() {
    return (
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
    )
}

export default AboutData;