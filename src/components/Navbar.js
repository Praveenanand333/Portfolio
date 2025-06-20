import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Praveen V</Typography>
        <Link href="mailto:praveenanand333@gmail.com" color="inherit" sx={{ mx: 1 }}>Email</Link>
        <Link href="https://linkedin.com/in/praveenveerachamy/" color="inherit" sx={{ mx: 1 }}>LinkedIn</Link>
        <Link href="https://github.com/praveenanand333" color="inherit" sx={{ mx: 1 }}>GitHub</Link>
        <Link href="https://leetcode.com/u/praveenanand333/" color="inherit" sx={{ mx: 1 }}>LeetCode</Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
