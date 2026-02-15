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
                Software Engineer
              </Typography>
              
              <Typography paragraph sx={{ mb: 3 }}>
                I'm a software engineer with proven expertise in building scalable cloud-native applications
                and automated testing infrastructure. Currently working as a Software Developer Engineer at Amazon,
                I architect serverless systems, CI/CD pipelines, and AI/ML solutions using AWS, React, and Python.
              </Typography>
              
              <Typography paragraph sx={{ mb: 3 }}>
                With a strong foundation in full-stack development, infrastructure automation, and computer science
                fundamentals, I've demonstrated impact in production environments by reducing test execution time by
                60-70% and accelerating feedback cycles from hours to minutes.
              </Typography>
              
              <Typography paragraph>
                My technical expertise spans cloud platforms, serverless architecture, automated testing, and AI/ML,
                with particular strength in AWS services, Python, and building production-grade solutions that solve
                real-world problems at scale.
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