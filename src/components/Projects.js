import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function Projects() {
  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Projects</Typography>
      <Typography variant="h6">Autism Risk Prediction using Multi-modal Data</Typography>
      <Typography gutterBottom>ML/DL pipeline using images, EEG, surveys, and eye-tracking for autism diagnosis.</Typography>

      <Typography variant="h6">Academic Analyser</Typography>
      <Typography gutterBottom>Full-stack dashboard with authentication and analytics for academic tracking.</Typography>

      <Typography variant="h6">QuickPly</Typography>
      <Typography gutterBottom>JSP-based recruitment platform with job listing and resume handling.</Typography>
    </Box>
  );
}

export default Projects;
