import React, { useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Email, LinkedIn, GitHub, Code } from '@mui/icons-material';
import { motion } from 'framer-motion';
import socialUrl from '../Data/SocialUrl';

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    // For demo purposes, just show a success message
    setSnackbar({
      open: true,
      message: 'Message sent successfully! (Demo only)',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };
  
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  
  const socialLinks = [
    { icon: <Email />, url: socialUrl.email, label: 'Email' },
    { icon: <LinkedIn />, url: socialUrl.linkedin, label: 'LinkedIn' },
    { icon: <GitHub />, url: socialUrl.github, label: 'GitHub' },
    { icon: <Code />, url: socialUrl.leetcode, label: 'LeetCode' },
  ];

  return (
    <Box component={motion.div} 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography 
        variant="h3" 
        component={motion.h3}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        align="center"
        gutterBottom
        sx={{ 
          mb: 5, 
          fontWeight: 700,
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(90deg, #52a9ff 0%, #ff9e40 100%)' 
            : 'linear-gradient(90deg, #3a86ff 0%, #fb5607 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Get In Touch
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper 
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            elevation={4}
            sx={{ 
              p: 4, 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: theme.palette.background.card,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: theme.palette.mode === 'dark' 
                  ? 'linear-gradient(90deg, #52a9ff 0%, #ff9e40 100%)' 
                  : 'linear-gradient(90deg, #3a86ff 0%, #fb5607 100%)',
              },
            }}
          >
            <Typography variant="h5" gutterBottom>Let's Connect</Typography>
            <Typography paragraph>
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a question or just want to connect.
            </Typography>
            
            <Box mt={3} display="flex" justifyContent="space-around" flexWrap="wrap">
              {socialLinks.map((link, index) => (
                <Box 
                  key={index} 
                  component={motion.div}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{ m: 1, textAlign: 'center' }}
                >
                  <IconButton 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    size="large"
                    sx={{ 
                      bgcolor: theme.palette.background.default,
                      '&:hover': {
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                  <Typography variant="caption" display="block" mt={1}>
                    {link.label}
                  </Typography>
                </Box>
              ))}
            </Box>
            
            <Typography variant="body2" color="textSecondary" align="center" mt={4}>
              Location: Chennai, India
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper 
            component={motion.form}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            elevation={4}
            onSubmit={handleSubmit}
            sx={{ 
              p: 4,
              background: theme.palette.background.card,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: theme.palette.mode === 'dark' 
                  ? 'linear-gradient(90deg, #ff9e40 0%, #52a9ff 100%)' 
                  : 'linear-gradient(90deg, #fb5607 0%, #3a86ff 100%)',
              },
            }}
          >
            <Typography variant="h5" gutterBottom>Send a Message</Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              
              <Grid item xs={12} sx={{ textAlign: 'right' }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  size="large"
                  sx={{ 
                    mt: 2,
                    px: 4,
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(90deg, #52a9ff 30%, #ff9e40 90%)' 
                      : 'linear-gradient(90deg, #3a86ff 30%, #fb5607 90%)',
                  }}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;