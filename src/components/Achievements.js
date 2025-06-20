import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Paper,
  Container,
  Card,
  CardContent,
  useTheme,
  Divider,
} from '@mui/material';
import {
  EmojiEvents as AwardIcon,
  MilitaryTech as BadgeIcon,
  Handshake as VolunteerIcon, // Changed from Volunteer to Handshake
} from '@mui/icons-material';
import { motion } from 'framer-motion';

function Achievements() {
  const theme = useTheme();

  // Achievement data
  const achievements = [
    {
      title: 'School First',
      description: 'School first in 10th, 11th, and 12th Board Examinations.',
      icon: <AwardIcon fontSize="large" />,
      color: theme.palette.mode === 'dark' ? '#52a9ff' : '#3a86ff',
    },
    {
      title: 'NCC A-Certificate',
      description: 'NCC A-Certificate holder.',
      icon: <BadgeIcon fontSize="large" />,
      color: theme.palette.mode === 'dark' ? '#ff9e40' : '#fb5607',
    },
    {
      title: 'NSS Volunteer',
      description: 'NSS volunteer in college.',
      icon: <VolunteerIcon fontSize="large" />,
      color: theme.palette.mode === 'dark' ? '#60d394' : '#38b000',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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
          Achievements & Volunteering
        </Typography>

        {/* Background decoration */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.07, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '100%',
            backgroundImage: `radial-gradient(${theme.palette.primary.main} 2px, transparent 2px)`,
            backgroundSize: '30px 30px',
            zIndex: -1,
            pointerEvents: 'none',
            opacity: 0.05,
          }}
        />

        <Box 
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{ 
            position: 'relative',
            zIndex: 1,
            mt: 4,
          }}
        >
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {achievements.map((achievement, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03, 
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'visible',
                      background: theme.palette.background.paper,
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 10px 30px rgba(0,0,0,0.3)' 
                        : '0 10px 30px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                    }}
                  >
                    {/* Top decoration */}
                    <Box 
                      component={motion.div}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '5px',
                        background: achievement.color,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                        transformOrigin: 'left',
                      }}
                    />
                    
                    <CardContent sx={{ p: 0 }}>
                      {/* Icon holder */}
                      <Box
                        sx={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          mt: -3,
                        }}
                      >
                        <motion.div
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 0.4 + (index * 0.1),
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                        >
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: theme.palette.background.paper,
                              color: achievement.color,
                              boxShadow: theme.palette.mode === 'dark' 
                                ? '0 5px 15px rgba(0,0,0,0.3)' 
                                : '0 5px 15px rgba(0,0,0,0.1)',
                              border: `3px solid ${achievement.color}`,
                            }}
                          >
                            {achievement.icon}
                          </Box>
                        </motion.div>
                      </Box>

                      {/* Content */}
                      <Box sx={{ p: 3, pt: 4, pb: 4, textAlign: 'center' }}>
                        <Typography 
                          variant="h6" 
                          fontWeight={600} 
                          gutterBottom
                          component={motion.h6}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + (index * 0.1) }}
                          sx={{ 
                            color: achievement.color,
                            textTransform: 'uppercase', 
                            letterSpacing: 0.5,
                            fontSize: '1.1rem',
                          }}
                        >
                          {achievement.title}
                        </Typography>

                        <Divider 
                          component={motion.div}
                          initial={{ width: 0 }}
                          animate={{ width: '30%' }}
                          transition={{ delay: 0.6 + (index * 0.1) }}
                          sx={{ 
                            mx: 'auto', 
                            my: 2, 
                            borderColor: `${achievement.color}50`,
                            width: '30%',
                          }} 
                        />

                        <Typography 
                          variant="body1"
                          component={motion.p}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + (index * 0.1) }}
                          sx={{ 
                            color: theme.palette.text.secondary,
                            fontWeight: 400,
                            fontStyle: 'italic',
                          }}
                        >
                          {achievement.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Achievements;