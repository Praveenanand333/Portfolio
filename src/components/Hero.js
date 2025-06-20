import React from 'react';
import {
  Typography,
  Box,
  Avatar,
  Button,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Email as EmailIcon,
  GetApp as DownloadIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Container>
      <Grid 
        container 
        spacing={4} 
        alignItems="center" 
        justifyContent="center" 
        direction={isMobile ? 'column-reverse' : 'row'}
        sx={{ minHeight: '100vh' }}
      >
        {/* Content */}
        <Grid item xs={12} md={7}>
          <Box
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            sx={{ textAlign: isMobile ? 'center' : 'left' }}
          >
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h6" 
                color="primary" 
                fontWeight={500}
                sx={{ mb: 1 }}
              >
                Hello, I'm
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography 
                variant="h1" 
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '3rem', sm: '4rem', md: '4.5rem' },
                  background: theme.palette.mode === 'dark' 
                    ? 'linear-gradient(90deg, #52a9ff 0%, #ff9e40 100%)' 
                    : 'linear-gradient(90deg, #3a86ff 0%, #fb5607 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Praveen V
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography 
                variant="h4" 
                color="textSecondary" 
                sx={{ mb: 3, fontWeight: 500 }}
              >
                Software Developer Engineer
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography 
                variant="body1" 
                color="textSecondary" 
                sx={{ mb: 4, maxWidth: '600px', mx: isMobile ? 'auto' : 0 }}
              >
                I specialize in full-stack development, cloud-native applications, and machine learning. 
                Currently an SDE Intern at Amazon with a passion for building scalable, production-grade tools.
              </Typography>
            </motion.div>

            <Box 
              component={motion.div}
              variants={itemVariants}
              sx={{ 
                display: 'flex', 
                gap: 2, 
                flexWrap: 'wrap',
                mb: 4,
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
            >
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                startIcon={<EmailIcon />}
                href="mailto:praveenanand333@gmail.com"
                component={motion.a}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  background: theme.palette.mode === 'dark' 
                    ? 'linear-gradient(90deg, #52a9ff 30%, #ff9e40 90%)' 
                    : 'linear-gradient(90deg, #3a86ff 30%, #fb5607 90%)',
                }}
              >
                Contact Me
              </Button>

              <Button 
                variant="outlined" 
                color="primary"
                size="large"
                startIcon={<DownloadIcon />}
                component={motion.a}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={process.env.PUBLIC_URL + "/RESUME.pdf"}
                download
                /* Make sure your resume.pdf file is in the /public folder of your project */
              >
                Resume
              </Button>
            </Box>

            <Box 
              component={motion.div}
              variants={itemVariants}
              sx={{ 
                display: 'flex', 
                gap: 2,
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
            >
              <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  href="https://www.linkedin.com/in/praveenveerachamy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedInIcon />}
                  sx={{ fontWeight: 500 }}
                >
                  LinkedIn
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  href="https://github.com/Praveenanand333"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                  sx={{ fontWeight: 500 }}
                >
                  GitHub
                </Button>
              </motion.div>
            </Box>
          </Box>
        </Grid>

        {/* Profile Image */}
        <Grid item xs={12} md={5} sx={{ textAlign: 'center', pb: { xs: 4, md: 0 } }}>
          <Box 
            component={motion.div}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2 
            }}
            sx={{
              position: 'relative',
              width: { xs: '260px', sm: '300px' },
              height: { xs: '260px', sm: '300px' },
              mx: 'auto',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: theme.palette.mode === 'dark' 
                  ? 'linear-gradient(135deg, rgba(82,169,255,0.2) 0%, rgba(255,158,64,0.2) 100%)' 
                  : 'linear-gradient(135deg, rgba(58,134,255,0.2) 0%, rgba(251,86,7,0.2) 100%)',
                transform: 'scale(1.2)',
                zIndex: -1,
              },
            }}
          >
            <Avatar 
              src="/Portfolio/images/dp.jpg" 
              /* CUSTOM-DONE: Add your profile picture to the /public/images folder and update this path to "/Portfolio/images/your-profile-pic.jpg" */
              alt="Praveen V"
              sx={{
                width: '100%',
                height: '100%',
                border: `5px solid ${theme.palette.background.paper}`,
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 10px 30px rgba(0,0,0,0.5)' 
                  : '0 10px 30px rgba(0,0,0,0.15)',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;