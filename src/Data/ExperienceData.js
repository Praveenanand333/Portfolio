// src/data/experienceData.js

export const experienceData = [
  {
    company: 'Amazon',
    role: 'Software Developer Engineer Intern',
    period: 'January 2025 - June 2025',
    location: 'Chennai',
    description:
      'Working as an SDE Intern focusing on developing tools for Kindle devices and AWS-based solutions.',
    logoUrl: '/Portfolio/images/amazon-logo.png',
    achievements: [
      {
        title: 'Power Profiler Tool',
        description:
          'Developed a PoC for a Power Profiler Tool using IPC commands to toggle component states, enabling precise power analysis on Kindle devices.',
        technologies: ['Unix', 'IPC', 'Hardware Integration'],
      },
      {
        title: 'AWS Integration',
        description:
          'Automated power profiling by integrating AWS S3 for data storage and SageMaker for model execution, enhancing system efficiency. Used API Gateway, AWS Lambda, and secure Midway authentication for scalable, secure access.',
        technologies: ['AWS S3', 'AWS Lambda', 'SageMaker', 'API Gateway'],
      },
      {
        title: 'Internal Chatbot',
        description:
          'Created an internal chatbot using Amazon Bedrock Knowledge Base for intuitive access to wikis and technical documentation.',
        technologies: ['Amazon Bedrock', 'Knowledge Base', 'LLM Integration'],
      },
    ],
  },


];
