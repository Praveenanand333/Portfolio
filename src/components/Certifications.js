import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Container,
  useTheme,
} from '@mui/material';
import {
  WorkspacePremium as CertificateIcon,
  School as EducationIcon,
  Engineering as EngineeringIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

function Certifications() {
  const theme = useTheme();

  // Certificate data
  const certifications = [
    {
      id: 1,
      title: 'MERN stack powered by Mongo DB',
      issuer: 'MongoDB',
      date: '2024',
      description: 'Comprehensive certification covering MongoDB, Express.js, React, and Node.js stack development.',
      icon: <EngineeringIcon fontSize="large" />,
      color: theme.palette.mode === 'dark' ? '#52a9ff' : '#3a86ff',
    },
    {
      id: 2,
      title: 'Journey to Cloud: Envisioning Your Solution',
      issuer: 'IBM skillsBuild',
      date: '2023',
      description: 'Certification focused on cloud architecture, deployment strategies, and solution design.',
      icon: <EducationIcon fontSize="large" />,
      color: theme.palette.mode === 'dark' ? '#ff9e40' : '#fb5607',
    },
    {
      id: 3,
      title: 'CyberSecurity Essentials',
      issuer: 'Cisco',
      date: '2023',
      description: 'Certification covering cybersecurity fundamentals, best practices, and threat mitigation strategies.',
      icon: <CertificateIcon fontSize="large" />,
      color: theme.palette.mode === 'dark' ? '#60d394' : '#38b000',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Container>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{ position: 'relative' }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          component={motion.h3}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          align="center"
          sx={{ 
            mb: 5, 
            fontWeight: 700,
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(90deg, #52a9ff 0%, #ff9e40 100%)' 
              : 'linear-gradient(90deg, #3a86ff 0%, #fb5607 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
          }}
        >
          Certifications
        </Typography>

        {/* Decorative elements */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          sx={{
            position: 'absolute',
            top: '10%',
            left: '-5%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: theme.palette.mode === 'dark' ? '#52a9ff' : '#3a86ff',
            filter: 'blur(60px)',
            zIndex: -1,
          }}
        />

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
            {certifications.map((cert, index) => {
              // Generate random rotation for the cards
              const randomRotation = index % 2 === 0 ? -1 : 1;
              
              return (
                <Grid item xs={12} md={4} key={cert.id}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      rotateZ: randomRotation * 0.5,
                      y: -10,
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                  >
                    <Card 
                      elevation={4}
                      sx={{
                        height: '100%',
                        borderRadius: 3,
                        overflow: 'visible',
                        position: 'relative',
                        background: theme.palette.background.paper,
                      }}
                    >
                      {/* Certificate ribbon */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -10,
                          right: -10,
                          width: 90,
                          height: 90,
                          overflow: 'hidden',
                          zIndex: 2,
                        }}
                      >
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + (index * 0.1) }}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            transform: 'rotate(45deg) translate(20px, -15px)',
                            bgcolor: cert.color,
                            width: 120,
                            textAlign: 'center',
                            py: 0.5,
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '0.7rem',
                            boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
                            letterSpacing: 0.5,
                          }}
                        >
                          {cert.date}
                        </Box>
                      </Box>

                      <CardContent sx={{ pt: 5, px: 3 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: 2,
                          }}
                        >
                          <Avatar
                            component={motion.div}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              delay: 0.3 + (index * 0.1), 
                              type: "spring", 
                              stiffness: 200 
                            }}
                            sx={{
                              width: 80,
                              height: 80,
                              bgcolor: `${cert.color}15`,
                              color: cert.color,
                              mb: 2,
                              boxShadow: `0 4px 15px ${cert.color}30`,
                            }}
                          >
                        
                            {cert.icon}
                          </Avatar>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (index * 0.1) }}
                          >
                            <Typography 
                              variant="h6" 
                              align="center" 
                              fontWeight={600} 
                              gutterBottom
                              sx={{ color: theme.palette.text.primary }}
                            >
                              {cert.title}
                            </Typography>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 + (index * 0.1) }}
                          >
                            <Typography 
                              variant="subtitle2" 
                              color="primary" 
                              align="center"
                              sx={{ 
                                mb: 2,
                                fontWeight: 500,
                                display: 'inline-block',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 1,
                                bgcolor: `${cert.color}15`,
                              }}
                            >
                              {cert.issuer}
                            </Typography>
                          </motion.div>
                        </Box>

                        <Box
                          sx={{
                            position: 'relative',
                            mt: 2,
                            pt: 2,
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '30%',
                              height: '2px',
                              background: `${cert.color}50`,
                            },
                          }}
                        >
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            align="center"
                            component={motion.p}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 + (index * 0.1) }}
                          >
                            {cert.description}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
}

export default Certifications;