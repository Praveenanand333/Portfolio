import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box mt={4} mb={2} textAlign="center">
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Praveen V. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
