import React from 'react';
import { Typography, Box, Chip } from '@mui/material';

const skills = [
  'C++', 'Python', 'Java', 'React', 'NodeJS', 'Express.js', 'MongoDB', 'SQL',
  'AWS', 'Machine Learning', 'Docker', 'Git', 'DSA', 'OS', 'DBMS'
];

function Skills() {
  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Skills</Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {skills.map(skill => <Chip label={skill} key={skill} color="primary" />)}
      </Box>
    </Box>
  );
}

export default Skills;
