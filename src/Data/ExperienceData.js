// src/data/experienceData.js

export const experienceData = [
  {
    company: 'Amazon',
    role: 'Software Developer Engineer-1',
    period: 'July 2025 - Present',
    location: 'Chennai',
    description:
      'Building scalable cloud-native applications and automated testing infrastructure for device teams.',
    logoUrl: '/Portfolio/images/amazon-logo.png',
    achievements: [
      {
        title: 'Device Emulator Infrastructure',
        description:
          'Built device emulator infrastructure with test orchestration framework and CI/CD pipelines for automated provisioning, parallel test execution, and multi-environment orchestration, reducing test time by 60-70% and feedback cycles from hours to minutes.',
        technologies: ['Python', 'CI/CD', 'Test Automation', 'Unix'],
      },
      {
        title: 'Serverless Testing System',
        description:
          'Architected a 4-layer serverless testing system (SNS/Lambda/DynamoDB) that auto-triggers functional test suites on device emulators for code reviews, delivering real-time test results within developer workflows.',
        technologies: ['AWS Lambda', 'AWS SNS', 'DynamoDB', 'Python'],
      },
      {
        title: 'Auto-scaling Infrastructure',
        description:
          'Developed auto-scaling infrastructure using Lambda orchestration, DynamoDB state management, and automated AMI pipelines, enabling on-demand EC2 provisioning with dynamic scaling capabilities.',
        technologies: ['AWS Lambda', 'DynamoDB', 'EC2', 'AMI', 'Python'],
      },
    ],
  },
  {
    company: 'Amazon',
    role: 'Software Developer Engineer Intern',
    period: 'January 2025 - June 2025',
    location: 'Chennai',
    description:
      'Worked as an SDE Intern focusing on developing tools for Kindle devices and AWS-based solutions.',
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
