// src/components/Experience.js

import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
  Avatar,
  Divider,
} from '@mui/material';
import { BusinessCenter as WorkIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { experienceData } from '../Data/ExperienceData';

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            background:
              theme.palette.mode === 'dark'
                ? 'linear-gradient(90deg, #52a9ff 0%, #ff9e40 100%)'
                : 'linear-gradient(90deg, #3a86ff 0%, #fb5607 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Experience
        </Typography>

        {experienceData.map((experience, expIndex) => (
          <Box key={expIndex} sx={{ mb: 8 }}>
            {/* Company Overview */}
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  elevation={4}
                  sx={{
                    mb: 4,
                    background:
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(30,30,30,1) 0%, rgba(38,38,38,1) 100%)'
                        : 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(247,249,252,1) 100%)',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  {/* Decorative accent */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      transform: 'translateY(-50%)',
                      width: '6px',
                      height: '40%',
                      background:
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(180deg, #52a9ff 0%, #ff9e40 100%)'
                          : 'linear-gradient(180deg, #3a86ff 0%, #fb5607 100%)',
                      borderTopRightRadius: '3px',
                      borderBottomRightRadius: '3px',
                    }}
                  />

                  <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={3} alignItems="center">
                      <Grid item xs={12} sm={2} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                        <Avatar
                          src={experience.logoUrl}
                          alt={experience.company}
                          sx={{
                            width: { xs: 80, sm: 100 },
                            height: { xs: 80, sm: 100 },
                            mx: { xs: 'auto', sm: 0 },
                            boxShadow:
                              theme.palette.mode === 'dark'
                                ? '0 5px 15px rgba(0,0,0,0.4)'
                                : '0 5px 15px rgba(0,0,0,0.1)',
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={10}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                          <Typography variant="h4" fontWeight={600} gutterBottom>
                            {experience.company}
                          </Typography>

                          <Typography variant="h6" color="primary" fontWeight={500} gutterBottom>
                            {experience.role}
                          </Typography>

                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              flexWrap: 'wrap',
                              gap: 2,
                              mb: 2,
                              justifyContent: { xs: 'center', sm: 'flex-start' },
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <WorkIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
                              <Typography variant="body2" color="textSecondary">
                                {experience.period}
                              </Typography>
                            </Box>

                            <Divider orientation="vertical" flexItem sx={{ height: 16, my: 'auto' }} />

                            <Typography variant="body2" color="textSecondary">
                              {experience.location}
                            </Typography>
                          </Box>

                          <Typography variant="body1">{experience.description}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Achievements */}
              <Grid item xs={12}>
                <Typography variant="h5" fontWeight={600} gutterBottom sx={{ ml: { md: 2 } }}>
                  Key Achievements
                </Typography>
              </Grid>

              {experience.achievements.map((achievement, index) => (
                <Grid item xs={12} md={4} key={achievement.title}>
                  <Card
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    elevation={4}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: theme.palette.background.card,
                      position: 'relative',
                      overflow: 'visible',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow:
                          theme.palette.mode === 'dark'
                            ? '0 10px 30px rgba(0,0,0,0.5)'
                            : '0 10px 30px rgba(0,0,0,0.1)',
                      },
                      transition: 'transform 0.3s, box-shadow 0.3s',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background:
                          theme.palette.mode === 'dark'
                            ? 'linear-gradient(90deg, #52a9ff 0%, #ff9e40 100%)'
                            : 'linear-gradient(90deg, #3a86ff 0%, #fb5607 100%)',
                      }}
                    />

                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {achievement.title}
                      </Typography>

                      <Typography variant="body2" paragraph sx={{ flexGrow: 1 }}>
                        {achievement.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                        {achievement.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background:
                                theme.palette.mode === 'dark'
                                  ? 'rgba(82,169,255,0.1)'
                                  : 'rgba(58,134,255,0.1)',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Experience;
