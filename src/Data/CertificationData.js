
import {
  WorkspacePremium as CertificateIcon,
  School as EducationIcon,
  Engineering as EngineeringIcon,
} from '@mui/icons-material';

export const certificationData = [
  {
    id: 1,
    title: 'MERN stack powered by Mongo DB',
    issuer: 'MongoDB',
    date: '2024',
    description:
      'Comprehensive certification covering MongoDB, Express.js, React, and Node.js stack development.',
    icon: <EngineeringIcon fontSize="large" />,
    color: '#3a86ff', // Light mode fallback
  },
  {
    id: 2,
    title: 'Journey to Cloud: Envisioning Your Solution',
    issuer: 'IBM skillsBuild',
    date: '2023',
    description:
      'Certification focused on cloud architecture, deployment strategies, and solution design.',
    icon: <EducationIcon fontSize="large" />,
    color: '#fb5607',
  },
  {
    id: 3,
    title: 'CyberSecurity Essentials',
    issuer: 'Cisco',
    date: '2023',
    description:
      'Certification covering cybersecurity fundamentals, best practices, and threat mitigation strategies.',
    icon: <CertificateIcon fontSize="large" />,
    color: '#38b000',
  },
];
