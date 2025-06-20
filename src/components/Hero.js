import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';

function Hero() {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" mt={4}>
      <Avatar src="https://via.placeholder.com/150" sx={{ width: 150, height: 150, mb: 2 }} />
      <Typography variant="h4">Praveen V</Typography>
      <Typography variant="h6" color="textSecondary">Aspiring Software Engineer | Full Stack | Cloud | ML</Typography>
    </Box>
  );
}

export default Hero;
