import React from 'react';
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
  Chip,
  Paper,
  Avatar,
} from '@mui/material';
import {
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Cloud as CloudIcon,
  Psychology as AIIcon,
  Terminal as TerminalIcon,
  Computer as CSIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

function Skills() {
  const theme = useTheme();
  
  // Skills categories with icon mapping
  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: <CodeIcon fontSize="large" />,
      skills: ['C++', 'Python', 'Java', 'C'],
    },
    {
      name: 'Full Stack Development',
      icon: <TerminalIcon fontSize="large" />,
      skills: ['React', 'NodeJS', 'Express.js', 'HTML/CSS'],
    },
    {
      name: 'Databases',
      icon: <DatabaseIcon fontSize="large" />,
      skills: ['SQL', 'MongoDB'],
    },
    {
      name: 'Cloud Platforms',
      icon: <CloudIcon fontSize="large" />,
      skills: ['AWS S3', 'AWS Lambda', 'SageMaker', 'API Gateway', 'AWS Bedrock'],
    },
    {
      name: 'Machine Learning',
      icon: <AIIcon fontSize="large" />,
      skills: ['Classical ML', 'Deep Learning', 'Neural Networks', 'Hyper Parameter Tuning'],
    },
    {
      name: 'CS Fundamentals',
      icon: <CSIcon fontSize="large" />,
      skills: ['Data Structures and Algorithms', 'OS', 'DBMS', 'Networks', 'Cloud Essentials', 'Cryptography'],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Get a color from the predefined palette for variety
  const getSkillColor = (index, category) => {
    const colors = [
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.mode === 'dark' ? '#60d394' : '#38b000',
      theme.palette.mode === 'dark' ? '#f8961e' : '#f3722c',
      theme.palette.mode === 'dark' ? '#577590' : '#277da1',
      theme.palette.mode === 'dark' ? '#9d4edd' : '#7209b7',
    ];
    
    // Get a color based on the category and index
    const categoryIndex = skillCategories.findIndex(cat => cat.name === category);
    const baseColor = colors[categoryIndex % colors.length];
    
    // Create slight variations
    return index % 2 === 0 ? baseColor : theme.palette.mode === 'dark' ? 
      `${baseColor}dd` : // slight transparency for dark mode
      `${baseColor}bb`;  // slight transparency for light mode
  };

  return (
    <Container>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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
          }}
        >
          Skills
        </Typography>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={4}>
            {skillCategories.map((category, catIndex) => (
              <Grid item xs={12} md={6} key={category.name}>
                <motion.div variants={itemVariants}>
                  <Card 
                    elevation={4} 
                    sx={{ 
                      height: '100%',
                      borderRadius: 2,
                      overflow: 'visible',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 10px 30px rgba(0,0,0,0.5)' 
                          : '0 10px 30px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box 
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderTopLeftRadius: theme.shape.borderRadius,
                        borderTopRightRadius: theme.shape.borderRadius,
                        height: 80,
                        bgcolor: theme.palette.background.section,
                        display: 'flex',
                        alignItems: 'center',
                        px: 3,
                      }}
                    >
                      {/* Decorative lines */}
                      <Box 
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: 0.05,
                          backgroundImage: `linear-gradient(0deg, ${theme.palette.divider} 1px, transparent 1px), 
                                           linear-gradient(90deg, ${theme.palette.divider} 1px, transparent 1px)`,
                          backgroundSize: '20px 20px',
                        }}
                      />
                      
                      {/* Icon */}
                      <Box 
                        sx={{ 
                          bgcolor: theme.palette.background.paper, 
                          borderRadius: '50%',
                          p: 1.5,
                          boxShadow: theme.palette.mode === 'dark' 
                            ? '0 0 15px rgba(0,0,0,0.3)' 
                            : '0 0 15px rgba(0,0,0,0.1)',
                          color: theme.palette.primary.main,
                          mr: 2,
                        }}
                      >
                        {category.icon}
                      </Box>
                      
                      <Typography variant="h6" fontWeight={600}>
                        {category.name}
                      </Typography>
                    </Box>
                    
                    <CardContent sx={{ p: 3 }}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          flexWrap: 'wrap', 
                          gap: 1.5,
                          justifyContent: 'flex-start',
                        }}
                      >
                        {category.skills.map((skill, index) => (
                          <Box 
                            component={motion.div}
                            key={skill}
                            whileHover={{ 
                              scale: 1.05, 
                              y: -4,
                              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: 0.3 + (index * 0.05), 
                              type: 'spring',
                              stiffness: 100,
                            }}
                            sx={{
                              bgcolor: getSkillColor(index, category.name),
                              color: '#fff',
                              px: 2,
                              py: 1,
                              borderRadius: 4,
                              fontWeight: 600,
                              fontSize: '0.9rem',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                              transition: 'all 0.3s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              minWidth: 'fit-content',
                              maxWidth: '100%',
                            }}
                          >
                            {skill}
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Dev Tools Section */}
        <Box sx={{ mt: 6 }}>
          <Typography 
            variant="h5" 
            align="center" 
            fontWeight={600} 
            gutterBottom
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Development Tools
          </Typography>
          
          <Paper 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            elevation={4}
            sx={{ 
              mt: 3,
              p: 3,
              bgcolor: theme.palette.background.paper,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative background */}
            <Box 
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.03,
                pointerEvents: 'none',
                backgroundImage: `radial-gradient(${theme.palette.primary.main} 2px, transparent 2px)`,
                backgroundSize: '30px 30px',
              }}
            />
            
            <Box 
              sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3,
                position: 'relative',
                zIndex: 1,
              }}
            >
              {['Git', 'Gerrit', 'Unity', 'Docker', 'VSCode', 'npm', 'Figma', 'Jest'].map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.5 + (index * 0.05),
                    type: 'spring',
                    stiffness: 200, 
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -5, 5, -3, 3, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <Avatar 
                    sx={{ 
                      width: 64, 
                      height: 64, 
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(82,169,255,0.1)' : 'rgba(58,134,255,0.1)',
                      boxShadow: theme.palette.mode === 'dark' ? '0 5px 15px rgba(0,0,0,0.3)' : '0 5px 15px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Typography 
                      variant="subtitle2" 
                      fontWeight={600}
                      sx={{ color: theme.palette.text.primary }}
                    >
                     
                      {tool}
                    </Typography>
                  </Avatar>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default Skills;