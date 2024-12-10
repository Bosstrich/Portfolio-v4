import {edafos, mitev, amazon, lots, robot, health, jeepney, cps, catering} from '../assets/images/'


export const navLinks = [
  { href: "#resume", label: "Resume" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Projects" },
  { href: "#contact", label: "Contact" },
];



export const skills = {

    software: [
  
      {
        category: 'Web Development',
        skillSet: ['HTML', 'CSS', 'Javascript', 'SASS', 'React', 'Tailwind', 'Bootstrap', 'Node', 'Material UI']
      },
      {
        category: 'UI/UX',
        skillSet: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator']
      },
      {
        category: 'Mobile Development',
        skillSet: ['Android Studio', 'Java']
      },
      {
        category: 'Programming',
        skillSet: ['Java', 'Python', 'Javascript', 'C', 'C++']
      },
      {
        category: 'Others',
        skillSet: ['Git', 'Github', 'Jasmine', 'Jest', 'Firebase']
      },
    ],
  
    hardware: [
  
      {
        category: 'Embedded Systems',
        skillSet: ['Raspberry Pi', 'Arduino Uno', 'Micropython', 'C++', 'ESP32', 'C', 'Platform I/O']
      },
      {
        category: 'PCB Designing',
        skillSet: ['EAGLE']
      },
      {
        category: 'Digital Logic and Design',
        skillSet: ['MATLAB', 'Java']
      },
      {
        category: 'Computer Networks and Security',
        skillSet: ['CISCO']
      },
      
    ]
  
  
  
  }

  export const projects = {

    software: [{
        name: 'edafos',
        image: edafos,
        tags: ['Java', 'Mobile Application', 'Tensorflow'],
        description: 'A computer-vision mobile application that classifies whether the captured soil image is arable or non-arable',
        links: [
          'https://dribbble.com/shots/25298327--dafos-CV-Mobile-Application',
          'https://github.com/Bosstrich/efafos'
        ]
      },
      {
        name: 'Mitev',
        tags: ['HTML', 'Tailwind CSS', 'React JS', 'UI//UX',],
        image: mitev,
        description: 'E-Commerce Website that encompasses a list of stores found within a vicinity of a city',
        links: [
          'https://dribbble.com/shots/25307835-Mitev-CPS-Mobile-Application',
          'https://github.com/Bosstrich/mitev-placeholder'
        ]
      },
      {
        name: '5R Catering Services',
        tags: ['HTML', 'CSS', 'Material UI', 'React JS'],
        image: catering,
        description: "Shelved  project for a company '5R Catering Services'",
        links: [
          '',
          ''
        ]
      },
  
      {
        name: 'Lots',
        tags: ['Java', 'Mobile App.', 'Android Studio'],
        image: lots,
        description: 'My Personal mobile application that generates a random word of GOD',
        links: [
          '',
          'https://github.com/Bosstrich/Lots'
        ]
      },
      {
        name: 'Amazon Clone',
        tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
        image: amazon,
        description: 'Functional Amazon Clone Website made with vanilla Javascript',
        links: [
          '',
          'https://github.com/Bosstrich/Amazon-Clone'
        ]
      }
      
    
    ],
    hardware: [{
  
        name: 'Cyber-Physical System',
        tags: ['Embedded System', 'ESP32', 'C++'],
        image: cps,
        description: 'Water quality monitoring system that determines the quality of a water environment such as rivers, springs, groundwater, etc.',
        links: [
          'https://drive.google.com/drive/folders/1P_CaQ0XZAkncROj5-MEpFdUFDquPZpuo?usp=sharing',
          'https://github.com/Bosstrich/CPS'
        ]
      },
      {
        name: 'Obstacle Avoidance Robot Car',
        tags: ['Arduino', 'C++', 'Robotics'],
        image: robot,
        description: 'A robot that utilizes ultrasonic distace sensor in order to avoid obstacles along its path',
        links: [
          '',
          ''
        ]
      },
      {
        name: 'Remote Patient Monitoring System',
        tags: ['Embedded Systems', 'RasPi', 'Micropython'],
        image: health,
        description: "A project that monitors patient's heartbeat remotely, notifying the user if an anomaly happens",
        links: [
          '',
          ''
        ]
      },
      {
        name: 'Jeepney Stop System',
        tags: ['Embedded Systems', 'ESP32', 'C++'],
        image: jeepney,
        description: "Project that Notfiies users whenever a desired jeepney is nearby their current location",
        links: [
          'https://github.com/Bosstrich/JeepneyStop_System',
          'https://drive.google.com/drive/folders/16lgRqEoEajgpqMw9DG8LaZ1modcNNFNs?usp=sharing'
        ]
      }

    ]}
  
