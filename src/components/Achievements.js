import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function Achievements() {
  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Achievements & Volunteering</Typography>
      <List>
        <ListItem><ListItemText primary="School first in 10th, 11th, and 12th Board Exams." /></ListItem>
        <ListItem><ListItemText primary="NCC A-Certificate holder." /></ListItem>
        <ListItem><ListItemText primary="NSS volunteer during college." /></ListItem>
      </List>
    </Box>
  );
}

export default Achievements;
