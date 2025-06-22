import React from 'react';
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
  Paper,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { School as SchoolIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { educationData } from '../Data/EducationData';
function Education() {
  const theme = useTheme();

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
          Education
        </Typography>

        {/* Background decoration */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          sx={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            width: { xs: 150, md: 300 },
            height: { xs: 150, md: 300 },
            borderRadius: '50%',
            background: theme.palette.primary.main,
            filter: 'blur(50px)',
            zIndex: -1,
            pointerEvents: 'none',
          }}
        />

        {/* Education Timeline */}
        <Timeline position="alternate">
          {educationData.map((edu, index) => (
            <TimelineItem key={edu.id}>
              <TimelineOppositeContent 
                sx={{ 
                  maxWidth: '40%',
                  display: { xs: 'none', md: 'block' } 
                }}
              >
                <Typography 
                  variant="h6" 
                  component={motion.div}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.2) }}
                  fontWeight={600}
                >
                  {edu.period}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (index * 0.2) }}
                >
                  {edu.location}
                </Typography>
              </TimelineOppositeContent>
              
              <TimelineSeparator>
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.2 + (index * 0.2),
                    type: 'spring',
                    stiffness: 150
                  }}
                >
                  <TimelineDot 
                    sx={{ 
                      bgcolor: theme.palette.primary.main,
                      boxShadow: `0 0 0 4px ${theme.palette.background.paper}, 0 0 0 8px ${theme.palette.primary.main}20`
                    }}
                  >
                    <SchoolIcon />
                  </TimelineDot>
                </motion.div>
                {index < educationData.length - 1 && (
                  <TimelineConnector 
                    component={motion.div}
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ 
                      delay: 0.5 + (index * 0.2),
                      duration: 0.5
                    }}
                    sx={{ 
                      bgcolor: theme.palette.mode === 'dark' 
                        ? 'rgba(82,169,255,0.3)' 
                        : 'rgba(58,134,255,0.3)',
                      width: 3,
                    }} 
                  />
                )}
              </TimelineSeparator>
              
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20, x: index % 2 === 0 ? 20 : -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  transition={{ 
                    delay: 0.4 + (index * 0.2),
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 10px 30px rgba(0,0,0,0.5)' 
                      : '0 10px 30px rgba(0,0,0,0.1)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card 
                    elevation={4}
                    sx={{
                      mb: 4,
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'visible',
                      background: theme.palette.background.paper,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                    }}
                  >
                    {/* Mobile-only time period */}
                    <Box 
                      sx={{ 
                        display: { xs: 'flex', md: 'none' }, 
                        p: 2,
                        pb: 0,
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight={600}>
                        {edu.period}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {edu.location}
                      </Typography>
                    </Box>
                    
                    <CardContent sx={{ p: 4 }}>
                      <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} sm={9}>
                          <Box sx={{ position: 'relative' }}>
                            <Typography 
                              variant="h5" 
                              fontWeight={600} 
                              gutterBottom
                              component={motion.h5}
                              whileHover={{ x: 5 }}
                              sx={{ color: theme.palette.primary.main }}
                            >
                              {edu.institution}
                            </Typography>
                            
                            <Box sx={{ 
                              display: 'inline-block',
                              position: 'relative',
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                width: '100%',
                                height: '4px',
                                bottom: -4,
                                left: 0,
                                background: `linear-gradient(to right, ${theme.palette.primary.main}50, transparent)`,
                                borderRadius: '4px',
                              }
                            }}>
                              <Typography 
                                variant="subtitle1" 
                                color="primary" 
                                fontWeight={500}
                                gutterBottom
                              >
                                {edu.degree}
                              </Typography>
                            </Box>
                            
                            <Typography 
                              variant="body1" 
                              sx={{ 
                                mb: 2,
                                fontStyle: 'italic',
                                color: theme.palette.text.secondary,
                              }}
                            >
                              {edu.details}
                            </Typography>
                            
                            <Typography 
                              variant="subtitle2" 
                              component={motion.div}
                              whileHover={{ scale: 1.05 }}
                              sx={{ 
                                display: 'inline-block',
                                px: 2,
                                py: 0.8,
                                borderRadius: '20px',
                                bgcolor: theme.palette.mode === 'dark' 
                                  ? 'rgba(82,169,255,0.1)' 
                                  : 'rgba(58,134,255,0.1)',
                                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(82,169,255,0.2)' : 'rgba(58,134,255,0.2)'}`,
                                color: theme.palette.mode === 'dark' ? '#52a9ff' : '#3a86ff',
                                fontWeight: 600,
                              }}
                            >
                              {edu.grade}
                            </Typography>
                          </Box>
                        </Grid>
                        
                        <Grid item xs={12} sm={3} sx={{ textAlign: 'center' }}>
                          <motion.div
                            whileHover={{ 
                              rotate: [0, -5, 5, -3, 0],
                              transition: { duration: 0.5 }
                            }}
                          >
                            <Box 
                              component="img"
                              src={edu.logo}
                              alt={edu.institution}
                              sx={{ 
                                width: 100,
                                height: 100,
                                objectFit: 'contain',
                                borderRadius: '50%',
                                border: `3px solid ${theme.palette.background.paper}`,
                                boxShadow: theme.palette.mode === 'dark' 
                                  ? '0 0 25px rgba(0,0,0,0.3)' 
                                  : '0 0 25px rgba(0,0,0,0.1)',
                              }}
                            />
                          </motion.div>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
}

export default Education;