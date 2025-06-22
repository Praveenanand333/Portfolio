import {
  EmojiEvents as AwardIcon,
  MilitaryTech as BadgeIcon,
  Handshake as VolunteerIcon, 
} from '@mui/icons-material';

const getAchievementsData = (theme) => ([
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
]);

export default getAchievementsData;
