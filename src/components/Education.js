import React from 'react';
import { Typography, Box } from '@mui/material';

function Education() {
  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Education</Typography>
      <Typography variant="h6">CEG, Anna University</Typography>
      <Typography>B.Tech, Information Technology, GPA: 8.34 (2021–2025)</Typography>

      <Typography variant="h6">Jaycee Higher Secondary School</Typography>
      <Typography>Higher Secondary, Percentage: 98.5% (2020–2021)</Typography>
    </Box>
  );
}

export default Education;
