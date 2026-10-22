// Résumé content. Source of truth for the home page experience section
// and the printable /resume page.

export const summary =
  'Software engineer with over 5 years of professional development experience, currently focused on building reliable, performant, and efficient applications in Go. Over 14 years of writing code, and always learning, whether that is professional work at Red Hat or personal work on Reizor Hosting.';

export type Role = {
  company: string;
  role: string;
  team?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  points: string[];
};

export const experience: Role[] = [
  {
    company: 'Red Hat',
    role: 'Senior Software Engineer',
    team: 'OpenShift Advanced Cluster Security',
    location: 'Tampa, FL',
    start: 'Jan 2025',
    end: 'Present',
    current: true,
    points: [
      'Developed new services in Go using gRPC and protocol buffers.',
      'Implemented a Custom Resource Definition and controller to reconcile Kubernetes objects with a Go gRPC API, keeping state consistent across platforms.',
      'Improved a Postgres-backed data model that uses protocol buffers to model the stored data.',
      'Created and supported GraphQL resolvers in the Go API to extend GraphQL support to new and modified storage models.',
      'Collaborated on new designs and iteratively improved design documents with other engineers.',
      'Worked with customers to resolve concerns and ship critical new features.',
      'Added metric tracking across the Go backend into Prometheus and Grafana.',
    ],
  },
  {
    company: 'Reizor Hosting LLC',
    role: 'Co-Owner',
    location: 'Tampa, FL',
    start: 'Jul 2024',
    end: 'Present',
    current: true,
    points: [
      'Built the marketing storefront from the ground up with Next.js.',
      'Extended an existing PHP billing system to automate repetitive processes.',
      'Developed distributed game-hosting panel software in Go: a daemon on each node and a panel on a control-plane node acting as a single point of entry for users.',
      'Grew a customer base of over 1,000 customers by consistently delivering new features and quality support.',
      'Automated tasks, infrastructure deployments, rollouts, and upgrades in JavaScript, Java with Spring Boot, and Go.',
      'Created a layered, automated backup system that ships to multiple object storage platforms for redundancy.',
    ],
  },
  {
    company: 'The Walt Disney Company',
    role: 'Software Engineer',
    team: 'Disney Central',
    location: 'Tampa, FL',
    start: 'Oct 2021',
    end: 'Jan 2025',
    points: [
      'Created a backend framework in Java with Spring Boot for current and future APIs.',
      'Created a React.js framework for frontend applications to be built on.',
      'Provisioned and deployed a full-scale Kubernetes cluster in the Disney Private Cloud.',
      'Deployed a fully customized GitLab Runner on the cluster for specialized pipelines.',
      'Mentored teammates on new technologies, debugging, and deepening existing skills.',
      'Developed and released 8+ full-scale applications.',
      'Worked with clients and stakeholders to gather requirements and iterate on feedback through every stage of the lifecycle.',
    ],
  },
  {
    company: 'Geek Sources, Inc',
    role: 'Software Engineering Intern',
    location: 'Tallahassee, FL',
    start: 'Apr 2021',
    end: 'Oct 2021',
    points: [
      'Built NLP pipelines in Python for analyzing résumés.',
      'Built full-stack applications from the ground up with Spring Boot and React.',
      'Assisted on cybersecurity work toward a CMMC certification.',
      'Completed the prerequisites for AWS Certified Solutions Architect, deploying to EC2, Lambda, Elastic Beanstalk, ECS, and S3.',
    ],
  },
];

export const skills = {
  Languages: ['Go', 'Java', 'Kotlin', 'Scala', 'TypeScript', 'JavaScript', 'PHP', 'C#', 'Bash', 'Python'],
  Technologies: [
    'Kubernetes',
    'gRPC',
    'Protocol Buffers',
    'GraphQL',
    'Postgres',
    'Spring Boot',
    'Docker',
    'Helm',
    'Kafka',
    'Redis',
    'Prometheus',
    'Grafana',
    'MS SQL',
    'GitHub Actions',
    'GitLab CI/CD',
    'Jenkins',
    'Azure',
  ],
};

export const education = {
  degree: 'Bachelor of Science, Computer Science',
  school: 'Florida State University',
  years: '2018 – 2021',
};
