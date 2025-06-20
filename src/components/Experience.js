import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function Experience() {
  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Experience</Typography>
      <Typography variant="h6">Amazon – SDE Intern (Jan 2025 - Jun 2025)</Typography>
      <List>
        <ListItem><ListItemText primary="Developed a Power Profiler Tool using IPC commands for Kindle power analysis." /></ListItem>
        <ListItem><ListItemText primary="Automated power profiling using AWS S3, Lambda, SageMaker, and API Gateway." /></ListItem>
        <ListItem><ListItemText primary="Built an internal chatbot with Amazon Bedrock for documentation access." /></ListItem>
      </List>
    </Box>
  );
}

export default Experience;
