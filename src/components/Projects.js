import React, { useState } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
  Grid,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  IconButton,
  Tooltip,
} from '@mui/material';
import { 
  GitHub as GitHubIcon,
  Language as DemoIcon,
  Close as CloseIcon,
  Psychology as MLIcon,
  Web as WebIcon,
  Storage as DBIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

function Projects() {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'Autism Risk Prediction using Multi-modal Data',
      shortDescription: 'ML/DL pipeline for autism risk diagnosis using multiple data sources.',
      fullDescription: 'Developed a diagnostic ML/DL pipeline that fuses image, EEG, AQ survey, and eye-tracking inputs to identify autism risk. Applied modality-specific deep learning models and ensemble bagging for robust decision-making.',
      image: '/Portfolio/images/autism.jpg',
      /* CUSTOM-TODO: Add your project image to the /public/images folder and update this path to "/Portfolio/images/quickply.jpg" */
      techStack: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Transformers', 'Hyper Parameter Tuning', 'Optimizers'],
      category: 'ML/AI',
      icon: <MLIcon />,
      links: {
        github: 'https://github.com/Praveenanand333/FYP',
        demo: null,
      },
    },
    {
      id: 2,
      title: 'Academic Analyser – Full-Stack Performance Tracker',
      shortDescription: 'Role-based academic monitoring system with dynamic dashboards.',
      fullDescription: 'Built a role-based academic monitoring system featuring dynamic dashboards, authentication, and CRUD APIs for educators and students to track academic progress and analytics securely.',
      image: '/Portfolio/images/academic-analyser.jpg',
      /* CUSTOM-TODO: Add your project image to the /public/images folder and update this path to "/Portfolio/images/quickply.jpg" */
      techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MySQL', 'JWT', 'Bcrypt', 'ChartJS', 'REST APIs'],
      category: 'Web Development',
      icon: <WebIcon />,
      links: {
        github: 'https://github.com/Praveenanand333/SRP-Project',
        demo: null,
      },
    },
    {
      id: 3,
      title: 'QuickPly – Job Application Platform',
      shortDescription: 'Full-stack recruitment platform with job listings and resume handling.',
      fullDescription: 'Built a full-stack recruitment system using JSP, PostgreSQL, and JDBC, featuring user authentication, CRUD operations for profiles and job listings, and resume handling via dynamic JSP-driven interfaces.',
      image: '/Portfolio/images/quickply.jpg',
      /* CUSTOM-TODO: Add your project image to the /public/images folder and update this path to "/Portfolio/images/quickply.jpg" */
      techStack: ['JSP', 'PostgreSQL', 'JDBC', 'HTML/CSS'],
      category: 'Web Development',
      icon: <DBIcon />,
      links: {
        github: 'https://github.com/Praveenanand333/QUICKPLY',
        demo: null,
      },
    },
  ];

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  // Animation variants for staggered animations
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
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
          Projects
        </Typography>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={4}>
            {projectsData.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <motion.div variants={itemVariants}>
                  <Card 
                    elevation={4} 
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 15px 35px rgba(0,0,0,0.5)' 
                          : '0 15px 35px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box 
                      sx={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bgcolor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        p: 1,
                        px: 1.5,
                        borderBottomRightRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        zIndex: 2,
                      }}
                    >
                      {project.icon}
                      <Typography variant="caption" fontWeight={600}>
                        {project.category}
                      </Typography>
                    </Box>

                    <CardActionArea onClick={() => handleOpenProject(project)} sx={{ flexGrow: 1 }}>
                      <CardMedia
                        component="img"
                        height="180"
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent sx={{ flexGrow: 1, height: '100%' }}>
                        <Typography variant="h6" component="div" fontWeight={600} gutterBottom>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {project.shortDescription}
                        </Typography>
                        
                        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.techStack.slice(0, 3).map((tech) => (
                            <Chip 
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{ 
                                background: theme.palette.mode === 'dark' 
                                  ? 'rgba(82,169,255,0.1)' 
                                  : 'rgba(58,134,255,0.1)',
                                fontSize: '0.7rem',
                              }}
                            />
                          ))}
                          {project.techStack.length > 3 && (
                            <Chip 
                              label={`+${project.techStack.length - 3}`}
                              size="small"
                              sx={{ 
                                background: theme.palette.mode === 'dark' 
                                  ? 'rgba(255,158,64,0.1)' 
                                  : 'rgba(251,86,7,0.1)',
                                fontSize: '0.7rem',
                              }}
                            />
                          )}
                        </Box>
                      </CardContent>
                    </CardActionArea>

                    <Box 
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        p: 2,
                        pt: 0,
                      }}
                    >
                      <Button 
                        size="small" 
                        variant="outlined" 
                        onClick={() => handleOpenProject(project)}
                        sx={{ borderRadius: '20px', px: 2 }}
                      >
                        Details
                      </Button>
                      
                      <Box>
                        {project.links.github && (
                          <Tooltip title="GitHub Repository">
                            <IconButton 
                              href={project.links.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              color="primary"
                              size="small"
                              sx={{ ml: 1 }}
                            >
                              <GitHubIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        )}
                        
                        {project.links.demo && (
                          <Tooltip title="Live Demo">
                            <IconButton 
                              href={project.links.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              color="secondary"
                              size="small"
                              sx={{ ml: 1 }}
                            >
                              <DemoIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Project Details Dialog */}
        <Dialog 
          open={!!selectedProject} 
          onClose={handleCloseProject}
          maxWidth="md"
          scroll="paper"
          sx={{ 
            '& .MuiDialog-paper': { 
              borderRadius: 2,
              overflow: 'hidden',
            } 
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle 
                sx={{ 
                  px: 3,
                  py: 2,
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: theme.palette.mode === 'dark' 
                    ? 'linear-gradient(90deg, rgba(30,30,30,1) 0%, rgba(38,38,38,1) 100%)' 
                    : 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(247,249,252,1) 100%)',
                }}
              >
                <Typography variant="h6" component="div" fontWeight={600}>
                  {selectedProject.title}
                </Typography>
                <IconButton edge="end" color="inherit" onClick={handleCloseProject} aria-label="close">
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              
              <DialogContent dividers sx={{ p: 0 }}>
                <Box>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    style={{ 
                      width: '100%', 
                      maxHeight: '300px', 
                      objectFit: 'cover' 
                    }} 
                  />
                </Box>
                
                <Box sx={{ p: 3 }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Description
                  </Typography>
                  
                  <Typography variant="body1" paragraph>
                    {selectedProject.fullDescription}
                  </Typography>
                  
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Technologies Used
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {selectedProject.techStack.map((tech) => (
                      <Chip 
                        key={tech}
                        label={tech}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>
              </DialogContent>
              
              <DialogActions sx={{ p: 2, justifyContent: 'space-between' }}>
                <Box>
                  <Chip 
                    icon={selectedProject.icon} 
                    label={selectedProject.category} 
                    sx={{ mr: 1 }}
                  />
                </Box>
                
                <Box>
                  {selectedProject.links.github && (
                    <Button 
                      startIcon={<GitHubIcon />}
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mr: 1 }}
                    >
                      Repository
                    </Button>
                  )}
                  
                  {selectedProject.links.demo && (
                    <Button 
                      variant="contained"
                      startIcon={<DemoIcon />}
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                    >
                      Live Demo
                    </Button>
                  )}
                </Box>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </Container>
  );
}

export default Projects;