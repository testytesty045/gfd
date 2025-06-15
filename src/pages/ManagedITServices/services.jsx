import React from 'react';

// This file contains the services data used throughout the application
export const servicesData = [
  {
    id: 'managed-it',
    title: 'Managed IT Services',
    path: '/managed-it-services',
    shortDescription: 'Comprehensive 24x7 Network Operations Center ensuring maximum network uptime.',
    description: 'We provide comprehensive Managed IT solutions so you can forget about IT headaches and focus on growing your business.',
    imageUrl: '/lovable-uploads/a6a6f808-91f5-4ee9-a7a0-8a6a9699b76c.png',
    headerText: '24x7 Network Operations Center for Monitoring & Support To Ensure Maximum Network Uptime',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M8 21h8"></path>
        <path d="M12 17v4"></path>
        <path d="M7 7h2"></path>
        <path d="M15 7h2"></path>
        <path d="M8 12h8"></path>
      </svg>
    ),
    benefits: [
      {
        title: 'Lower IT Costs',
        description: 'With today\'s global shortage of skilled IT workers, hiring and retaining in-house talent can be expensive. Switching to managed IT services is often easier and can dramatically reduce IT expenses.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        )
      },
      {
        title: 'Operational Efficiency',
        description: 'As your organization grows, in-house IT teams can quickly become overwhelmed. Outsourcing IT services ensures your business maximizes performance, efficiency, and reliability from your technology infrastructure.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        )
      },
      {
        title: 'Better Resource Allocation',
        description: 'A managed service provider gives you access to advanced IT expertise, allowing you to optimize your in-house resources and drive greater value across your organization.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        )
      },
      {
        title: 'Up-to-date Technology',
        description: 'System failures can cost small businesses anywhere from $82K to $256K per incident. A managed IT service provider helps keep your technology secure, reliable, and operating at peak efficiency.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
          </svg>
        )
      },
      {
        title: 'Growth Opportunities',
        description: 'Delegating complex technology decisions to a trusted IT services provider enables you to concentrate on core competencies and seize growth opportunities.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        )
      }
    ],
    features: [
      {
        title: 'Fully Managed IT',
        description: 'A bundled solution for a predictable, low fixed monthly cost',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        )
      },
      {
        title: 'A La Carte IT Services',
        description: 'Pick and choose the support you need, when you need it',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        )
      }
    ],
    useCases: [
      {
        problem: 'A growing law firm with 20 employees struggles with frequent IT downtime, slow computers, and lack of cybersecurity measures. They have no dedicated IT team, and handling technical issues disrupts productivity.',
        solution: [
          'Implemented 24/7 IT support to resolve technical issues quickly',
          'Deployed cybersecurity solutions to protect against data breaches',
          'Setup routine system maintenance to prevent slowdowns and crashes'
        ]
      },
      {
        problem: 'A business using outdated on-premise servers for inventory management, leading to slow data processing and frequent crashes during peak sales periods.',
        solution: [
          'Migrated the inventory system to a Azure cloud platform',
          'Implemented real-time data syncing for better stock management',
          'Set up automated backups to prevent data loss'
        ]
      }
    ]
  },
  {
    id: 'co-managed-it',
    title: 'Co-Managed IT Services',
    path: '/co-managed-it-services',
    shortDescription: 'Work together with your in-house IT team to enhance infrastructure performance.',
    description: 'We partner with your in-house IT team to enhance infrastructure performance and handle extra workload.',
    imageUrl: '/lovable-uploads/8c4305f6-3cf2-4197-8d93-99a3e1dcd6df.png',
    headerText: 'Co-Managed IT Services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        <path d="M9 11v5"></path>
        <path d="M6.5 13.5h5"></path>
      </svg>
    ),
    services: [
      {
        category: 'IT infrastructure services',
        items: [
          'IT infrastructure management: Monitoring, analyzing, and tuning IT infrastructure performance',
          'Deploying new infrastructure components',
          'Handling data backups and restore operations',
          'IT infrastructure enhancement: Planning, designing, and implementing IT infrastructure automation and orchestration tools',
          'Conducting cloud migration, optimizing cloud resources',
          'Improving ITSM processes'
        ]
      },
      {
        category: 'IT help desk',
        items: [
          'L1 user support: resolving basic issues, such as software setup and user administration',
          'L2 tech support: handling complex technical tasks, such as troubleshooting server and network problems or managing MFA',
          'L3 advanced tech support: handling complex infrastructure and application requests'
        ]
      }
    ],
    useCases: [
      {
        problem: 'Your internal team can no longer handle the growing IT infrastructure, but hiring and training more employees would take a while and incur high costs.',
        solution: 'We take over the infrastructure management of new components added and your team looks after the existing IT resources.'
      },
      {
        problem: 'Business is experiences a high workload round the clock and it is not possible to provide 24/7 support.',
        solution: 'DG FutureTech offers the support during the extended hours like weekends or national holidays to keep the support operations running smoothly.'
      },
      {
        problem: 'A business needs to install and configure firewall as a part of compliance procedure but they lack expertise.',
        solution: 'DG FutureTech can offer support for installation and configuration of the firewall, then give the proper training to inhouse IT team to handle the routine firewall tasks.'
      }
    ]
  },
  {
    id: 'server-admin',
    title: 'Server Administration',
    path: '/server-administration',
    shortDescription: 'Comprehensive server management to ensure your servers are always online and secure.',
    description: 'Our server management services ensure your servers are always online, secure, and up-to-date with 24/7 monitoring and expert support.',
    imageUrl: '/lovable-uploads/d2377ee1-5226-48c8-98da-02e961e32682.png',
    headerText: 'Comprehensive Server Management',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
        <path d="M12 6h4"></path>
        <path d="M12 18h4"></path>
      </svg>
    ),
    benefits: [
      {
        title: 'Proactive Troubleshooting',
        description: 'We identify and resolve server issues quickly, minimizing costly downtime. Our 24/7 monitoring ensures rapid response.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        )
      },
      {
        title: 'Seamless Maintenance',
        description: 'We handle all server updates and maintenance, ensuring optimal performance and security, so you don\'t have to.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="7"></circle>
            <polyline points="12 9 12 12 13.5 13.5"></polyline>
            <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
          </svg>
        )
      },
      {
        title: 'Efficient Software Installations',
        description: 'Our experts manage software installations, preventing errors and ensuring smooth operation of your systems.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="M12 16 v-6 m-4 3 h8"></path>
          </svg>
        )
      },
      {
        title: 'Performance Optimization',
        description: 'We optimize your server for peak efficiency, eliminating bottlenecks and improving overall performance of your infrastructure.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        )
      },
      {
        title: 'Zero-Downtime OS Updates',
        description: 'We deliver critical OS updates without disrupting your business operations, ensuring security and stability.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect x="3" y="6" width="18" height="16" rx="2"></rect>
            <path d="M3 10h18"></path>
            <path d="M10 14h4"></path>
            <path d="M12 14v4"></path>
          </svg>
        )
      }
    ]
  },
  {
    id: 'network-monitoring',
    title: 'Network Monitoring',
    path: '/network-monitoring',
    shortDescription: 'Proactive 24x7 monitoring to prevent disruptions before they impact your business.',
    description: 'Our 24x7 network monitoring services prevent disruptions before they happen, ensuring your business runs smoothly.',
    imageUrl: '/lovable-uploads/cf2bedad-49da-4c1e-a62c-1cd2465432c2.png',
    headerText: 'Prevent Disruptions Before They Happen',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
    features: [
      {
        title: 'Network Traffic Analysis',
        description: 'Gain actionable insights into your network traffic to optimize bandwidth and performance.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="M18.4 8.64L8.58 18.46"></path>
            <path d="M15.19 8.64h3.21v3.21"></path>
            <path d="M5.57 15.43l6.26-6.26"></path>
            <path d="M8.58 15.43h-3v-3"></path>
          </svg>
        )
      },
      {
        title: 'Network Security Monitoring',
        description: 'Protect your business with proactive threat detection and prevention.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        )
      },
      {
        title: 'Server Monitoring',
        description: 'Ensure continuous server uptime and efficiency for uninterrupted business operations.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        )
      },
      {
        title: 'Application Performance Monitoring',
        description: 'Identify and resolve application bottlenecks to maximize user experience.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        )
      },
      {
        title: 'Cloud Infrastructure Monitoring',
        description: 'Maintain optimal performance and prevent downtime in your cloud environment.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            <path d="M13 14l2 2 4-4"></path>
          </svg>
        )
      },
      {
        title: 'Network Device Monitoring',
        description: 'Track and manage all network devices for consistent and reliable operation.',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="2" y1="2" x2="4" y2="4"></line>
            <line x1="22" y1="2" x2="20" y2="4"></line>
            <line x1="2" y1="22" x2="4" y2="20"></line>
            <line x1="22" y1="22" x2="20" y2="20"></line>
          </svg>
        )
      }
    ],
    challenges: [
      'Monitoring network traffic origin, destination & bandwidth',
      'Lack of in-depth analysis across networks',
      'Quickly detecting intrusions & compromises',
      'Maintaining high levels of network availability'
    ],
    customSolutions: [
      'Comprehensive monitoring for IT networks of any size and complexity',
      'Cutting-edge tools to ensure maximum uptime and minimize downtime risks',
      'Proactive monitoring and real-time alert response',
      'Rapid identification of issues for efficient resolution',
      'Enhanced control over network infrastructure to maintain business continuity'
    ]
  },
  {
    id: 'vapt-assessment',
    title: 'VAPT Assessment',
    path: '/vapt-assessment',
    shortDescription: 'Identify vulnerabilities and strengthen your security posture with our assessment.',
    description: 'Our Vulnerability Assessment and Penetration Testing (VAPT) services identify and fix security weaknesses before they can be exploited.',
    imageUrl: '/lovable-uploads/7938d353-bf35-4185-a918-2c0c2512f5aa.png',
    headerText: 'Comprehensive Security Testing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    id: 'backup-recovery',
    title: 'Backup & Recovery',
    path: '/backup-recovery',
    shortDescription: 'Protect your critical data and ensure business continuity with robust backup solutions.',
    description: 'Our comprehensive backup and recovery solutions ensure your business can quickly resume operations after any data loss incident.',
    imageUrl: '/lovable-uploads/1a004227-0fb3-46e6-bb41-a754b2d11349.png',
    headerText: 'Data Protection Solutions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
        <path d="M8 12h8"></path>
      </svg>
    )
  },
  {
    id: 'app-development',
    title: 'Application Development',
    path: '/application-development',
    shortDescription: 'Custom software solutions designed to fit your unique business requirements.',
    description: 'We develop custom applications that streamline your operations and give you a competitive edge.',
    imageUrl: '/lovable-uploads/19cb1b48-e65e-4bf0-9bd3-19f347d7c228.png',
    headerText: 'Custom Software Solutions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6"></path>
        <path d="M8 6l-6 6 6 6"></path>
        <path d="M10 10l4 4"></path>
      </svg>
    )
  }
];

// Get service by ID utility function
export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id);
};
