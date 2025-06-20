import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function Certifications() {
  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Certifications</Typography>
      <List>
        <ListItem><ListItemText primary="MERN Stack by MongoDB" /></ListItem>
        <ListItem><ListItemText primary="Journey to Cloud by IBM skillsBuild" /></ListItem>
        <ListItem><ListItemText primary="CyberSecurity Essentials by Cisco" /></ListItem>
      </List>
    </Box>
  );
}

export default Certifications;
