// src/data/projectsData.js

import {
  GitHub as GitHubIcon,
  Language as DemoIcon,
  Psychology as MLIcon,
  Web as WebIcon,
  Storage as DBIcon,
} from '@mui/icons-material';

const projectsData = [
  {
    id: 1,
    title: 'Autism Risk Prediction using Multi-modal Data',
    shortDescription: 'ML/DL pipeline for autism risk diagnosis using multiple data sources.',
    fullDescription: 'Developed a diagnostic ML/DL pipeline that fuses image, EEG, AQ survey, and eye-tracking inputs to identify autism risk. Applied modality-specific deep learning models and ensemble bagging for robust decision-making.',
    image: '/Portfolio/images/autism.jpg',
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
    techStack: ['JSP', 'PostgreSQL', 'JDBC', 'HTML/CSS'],
    category: 'Web Development',
    icon: <DBIcon />,
    links: {
      github: 'https://github.com/Praveenanand333/QUICKPLY',
      demo: null,
    },
  },
];

export default projectsData;
