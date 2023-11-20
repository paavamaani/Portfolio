import StackOverflow from '../assets/images/stackoverflow.gif';
import Airline from '../assets/images/airline.gif';
import Robot from '../assets/images/robot.gif';

export const ProjectsData = [
  {
    title: 'Stack Overflow Clone',
    description: [
      'Designed an interactive chat system like Stack Overflow, initiated modules like posts and bookmarks.',
      'Deployed a 3-tier application with message queues as middleware & scaled to handle a load of 10K questions.',
    ],
    technologies: ['React.js', 'Node.js', 'Redux', 'MongoDB', 'MySQL', 'AWS'],
    url: 'https://github.com/paavamaani/StackOverflow-Clone',
    image: StackOverflow,
  },
  {
    title: 'Airline Traffic Control',
    description: [
      'Developed a full-stack air traffic control prototype that automated terminal and gate assignment, provided dashboards for viewing arrivals and departures, allowed scheduling updates, and facilitated gate maintenance.',
      'Implemented fault tolerance for EC2 instances during database server partitioning and ensured effective load balancing using AWS ELB.',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Redux',
      'Passport.js',
      'MongoDB',
      'MySQL',
      'AWS',
    ],
    url: 'https://github.com/paavamaani/Airline-Traffic-Control',
    image: Airline,
  },
  {
    title: 'Security Robot',
    description: [
      'Created an AWS Robomaker application using Docker and hosted it on AWS Elastic Container Registry (ECR).',
      'Utilized AWS infrastructure and configured load balancers to handle high throughput.',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Redux',
      'MongoDB',
      'Docker',
      'AWS Robomaker',
      'AWS',
    ],
    url: 'https://github.com/paavamaani/Security-Robot',
    image: Robot,
  },
];
