import {
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Cloud as CloudIcon,
  Psychology as AIIcon,
  Terminal as TerminalIcon,
  Computer as CSIcon,
} from '@mui/icons-material';

export const skillCategories = [
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