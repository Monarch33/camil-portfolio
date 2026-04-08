export const heroContent = {
  name: 'Camil Teraoui',
  status: 'Student in L1 at IAE',
  headline: 'AI Engineer and student focused on machine learning, robotics, and high-impact product systems.',
  description:
    'I build AI systems, study business and economics, and explore ambitious research directions at the intersection of intelligence and real-world decision making.',
  portraitPlaceholder: 'Portrait Placeholder (replace with your own headshot).',
};

export const tldr = {
  current: [
    'Studying [Program Placeholder].',
    'AI Engineer at [Company Placeholder].',
    'Building [Product Placeholder].',
    'Researching robotics at UIUC.',
    'Playing competitive chess.',
    'Reading papers and books weekly.',
  ],
  previous: [
    'Researching [Research Placeholder].',
    'Playing hockey for UIUC D1.',
    'Building [Startup Placeholder].',
    'Running the NYC Marathon (Nov 2025).',
  ],
};


export const currentFocus = [
  {
    title: 'Academic + Technical Track',
    description: 'Deepening AI/ML foundations while strengthening business and economics context for product decisions.',
  },
  {
    title: 'Research Execution',
    description: 'Advancing robotics and control-related experiments with reproducible workflows and clear documentation.',
  },
  {
    title: 'Product Building',
    description: 'Shipping focused projects and improving quality through iterative design, testing, and deployment.',
  },
];

export const importantDocuments = [
  { title: 'Official Transcript', href: '#' },
  { title: 'Unofficial Transcript', href: '#' },
  { title: 'Resume', href: '#' },
];

export const recentActivity = {
  title: 'Transformers for Control Research',
  subtitle: 'UC Berkeley BAIR · AI Research · Control Theory',
  description:
    'Research exploring AI for robotics through in-context learning of stabilizing controllers for unstable dynamical systems. This work demonstrates how transformers can learn control strategies without retraining, enabling generalization at inference time.',
  tags: ['Transformers', 'Robotics', 'Control Systems', 'Research'],
  imagePlaceholder: 'Recent Activity Visual Placeholder',
  links: [
    { label: 'View Slides', href: '#' },
    { label: 'View Poster', href: '#' },
  ],
};

export const researchIntro =
  'My research focuses on applying machine learning and AI to solve real-world problems. I am particularly interested in vision-language models, transformers, and building intelligent systems that enhance human capabilities.';

export const researchProjects = [
  {
    title: 'VLAs for Humanoid Manipulation',
    description:
      'Deployed NVIDIA GR00T N1.5 on the Unitree G1 humanoid for language-conditioned manipulation in Isaac Sim. Key finding: LoRA fine-tuning on just 14 VR-teleoperated trajectories achieves generalization, while full fine-tuning catastrophically overfits.',
    tags: ['Unitree G1', 'GR00T N1.5', 'LoRA', 'VR Teleoperation', 'Isaac Sim'],
    imagePlaceholder: 'Humanoid Manipulation Visual Placeholder',
    links: [{ label: 'Paper', href: '#' }],
  },
  {
    title: 'SO-101 VLA Diagnostic Platform',
    description:
      'Validated GR00T N1.5 on the SO-ARM101 robotic arm to isolate whether performance issues originated from the model or data quality. Includes custom ROS2 bridges and servo configuration fixes for Feetech STS3215 motors.',
    tags: ['SO-101', 'GR00T N1.5', 'ROS2', 'LeRobot', 'Hardware Debugging'],
    imagePlaceholder: 'SO-101 Diagnostic Visual Placeholder',
    links: [{ label: 'Case Study', href: '#' }],
  },
  {
    title: 'Transformers for Control',
    description:
      'Can transformer models, using only in-context learning, reliably perform low-level closed-loop control and stabilization of unstable nonlinear dynamical systems such as cartpole and acrobot?',
    tags: ['Transformers', 'Low Level Control', 'Robotics'],
    imagePlaceholder: 'Transformers Control Visual Placeholder',
    links: [{ label: 'Website', href: '#' }],
  },
];

export const projectsIntro =
  'Building meaningful projects is how I translate ideas into reality. These featured projects represent my current focus on creating practical tools that help people learn, work, and research more effectively.';

export const projects = [
  {
    title: 'Voxed: Your Second Brain',
    description: 'Knowledge and research assistant and agent.',
    stack: ['React', 'Machine Learning', 'AI', 'LLMs'],
    imagePlaceholder: 'Voxed Project Visual Placeholder',
    github: '#',
    demo: '#',
  },
  {
    title: 'IlliniPlan: AI Powered Class Planner',
    description:
      'Course mapping and graduation readiness planner with rule-enforcing scheduling, personalized recommendations, and conflict prevention.',
    stack: ['React', 'Machine Learning', 'Algorithms', 'Data Structures'],
    imagePlaceholder: 'IlliniPlan Project Visual Placeholder',
    github: '#',
    demo: '#',
  },
  {
    title: 'Manim Video Agent',
    description:
      'A multimodal video generator for educational content, leveraging AI to create animation workflows from a single prompt.',
    stack: ['AI', 'Machine Learning', 'LLMs'],
    imagePlaceholder: 'Manim Agent Visual Placeholder',
    github: '#',
    demo: '#',
  },
  {
    title: 'IlliniSpots',
    description:
      'Campus room availability discovery app with favorites and comments for the UIUC study-spot community.',
    stack: ['App Dev', 'Postgres', 'Firebase', 'Search'],
    imagePlaceholder: 'IlliniSpots Project Visual Placeholder',
    github: '#',
    demo: '#',
  },
];

export const aboutParagraphs = [
  'I am passionate about solving difficult, thought-provoking problems at the intersection of machine learning, computer vision, and applications to physics, bio, and everyday life.',
  'At my core, I believe in trying my absolute hardest in every facet of life. This philosophy extends to academics, entrepreneurship, athletics, and personal projects. My goal is to become the best version of myself so I can better serve those around me.',
];

export const drives = {
  what: {
    title: 'What Drives Me',
    quote:
      'I approach every challenge with dedication to positive impact, safety, and a deep respect for the nuance of research.',
    paragraphs: [
      'This mindset has guided me through developing apps that solve real-world issues, building ML systems that support large user bases, and launching mission-driven initiatives.',
      'I am constantly working toward long-term goals in education, research capability, and meaningful technology creation.',
    ],
    imagePlaceholder: 'What Drives Me Photo Placeholder',
  },
  who: {
    title: 'Who Drives Me',
    quote: 'Family is not an important thing. It is everything.',
    paragraphs: [
      'My family has always been my foundation. Their belief and support push me to become the best version of myself.',
      'Beyond that, I am driven by a simple mission: improve the lives of people around me through useful technology and rigorous work.',
    ],
    imagePlaceholder: 'Who Drives Me Photo Placeholder',
  },
};

export const workExperience = [
  {
    logoPlaceholder: 'AgAnswers Logo',
    period: 'May 2025 - Present',
    role: 'Founding Engineer',
    organization: 'AgAnswers.ai',
    description:
      'AgAnswers.ai is a startup that provides AI-powered solutions for the agriculture industry.',
    highlights: [],
    links: [{ label: 'View Site', href: '#' }],
  },
  {
    logoPlaceholder: 'NCSA Logo',
    period: 'Nov 2024 - Present',
    role: 'AI/ML Research Intern',
    organization: 'AIFARMS and NCSA',
    description:
      'Building agents for large-scale agriculture workflows and tooling for agent development platforms.',
    highlights: ['Building agents for agriculture workflows.', 'Building platform for agent building: uiuc.chat'],
    links: [
      { label: 'Prof. Vikram S. Adve', href: '#' },
      { label: 'View Code', href: '#' },
    ],
  },
  {
    logoPlaceholder: 'Berkeley Logo',
    period: 'Feb 2025 - Feb 2026',
    role: 'AI/ML Research Intern',
    organization: 'Berkeley AI Research',
    description:
      'Researching GPT-2-style causal transformers for learning control policies from full trajectory sequence modeling.',
    highlights: [
      'Lab: Ranade Research Lab (Prof. Gireeja Ranade).',
      'Sitting Lab: CITRIS and the Banatao Institute (Prof. Claire Tomlin).',
    ],
    links: [
      { label: 'Prof. Gireeja Ranade', href: '#' },
      { label: 'Prof. Claire Tomlin', href: '#' },
      { label: 'Reading List', href: '#learning' },
    ],
  },
  {
    logoPlaceholder: 'Brighttech Logo',
    period: 'May 2025 - Aug 2025',
    role: 'AI Engineer',
    organization: 'Brighttech AI',
    description:
      'Built enterprise-grade agentic AI systems for internal workflows across industry-leading organizations.',
    highlights: [
      'Research agent systems for pharma workflows.',
      'Customer acquisition agents for Fortune 500 contexts.',
      'Agent-powered sales platforms for outreach optimization.',
    ],
    links: [{ label: 'View Site', href: '#' }],
  },
  {
    logoPlaceholder: 'AAXIOM Logo',
    period: 'Nov 2024 - Aug 2025',
    role: 'Founder & Sole Developer',
    organization: 'AAXIOM',
    description:
      'Built a parent company umbrella across a clothing brand, web apps, and mobile app products.',
    highlights: [],
    links: [{ label: 'View Site', href: '#' }],
  },
  {
    logoPlaceholder: 'NDA Startup Logo',
    period: 'May 2024 - Aug 2024',
    role: 'Machine Learning Researcher/Engineer',
    organization: 'Startup (signed an NDA)',
    description:
      'Developed NLP systems focused on optimizing RAG and enhancing intent classification with hybrid embedding strategies.',
    highlights: [],
    links: [{ label: 'Research Paper', href: '#' }],
  },
];

export const education = [
  {
    logoPlaceholder: 'UIUC Logo',
    badge: '3.9 GPA',
    school: 'University of Illinois Urbana-Champaign',
    degree: 'B.S. in Physics, The Grainger College of Engineering',
    notes: [
      'Accelerated program: on track to graduate in 3 years instead of 4.',
      'Research focus on ML applications in physics and computational methods.',
    ],
  },
];

export const technicalExpertiseCards = [
  {
    title: 'Tech Expertise',
    description:
      'Full-stack development, machine learning algorithms, computer vision systems, and LLM applications for practical solutions.',
  },
  {
    title: 'Athletics',
    description:
      'Played D1 hockey for UIUC, tennis semi-competitively, and run occasionally.',
  },
  {
    title: 'In My Free Time',
    description:
      'Avid chess player aiming for titled level (most realistically, CM) and occasional hackathon winner.',
  },
];

export const skills = {
  'Machine Learning & AI': ['CNNs', 'Transformers', 'RAG', 'LLMs', 'Computer Vision', 'NLP', 'PyTorch', 'TensorFlow'],
  'Software Development': ['Python', 'JavaScript/TypeScript', 'React', 'Node.js', 'SQL', 'Git', 'Docker', 'System Design'],
  'Physics & Mathematics': [
    'Quantum Mechanics',
    'Statistical Mechanics',
    'Linear Algebra',
    'Calculus',
    'Differential Equations',
    'Data Analysis',
  ],
};

export const languages = [
  { name: 'Python', level: 95 },
  { name: 'C++', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Rust', level: 60 },
  { name: 'Java', level: 50 },
];

export const timeline = [
  { year: '2026', title: 'L1 at IAE', detail: 'Academic progression and specialization milestones.' },
  { year: '2025', title: 'AI Research Expansion', detail: 'Deepened applied research in transformers and control systems.' },
  { year: '2024', title: 'Builder Phase', detail: 'Shipped multi-product portfolio across AI and software projects.' },
];

export const learning = [
  {
    title: 'Reading Item Placeholder 01',
    note: 'Current deep-dive book or paper placeholder.',
    type: 'Book',
    coverPlaceholder: 'Book Cover Placeholder',
  },
  {
    title: 'Reading Item Placeholder 02',
    note: 'Current deep-dive book or paper placeholder.',
    type: 'Paper',
    coverPlaceholder: 'Paper Cover Placeholder',
  },
  {
    title: 'Reading Item Placeholder 03',
    note: 'Current deep-dive concept placeholder.',
    type: 'Concept',
    coverPlaceholder: 'Concept Visual Placeholder',
  },
  {
    title: 'Reading Item Placeholder 04',
    note: 'Current deep-dive course placeholder.',
    type: 'Course',
    coverPlaceholder: 'Course Visual Placeholder',
  },
];

export const recentBlogPost = {
  title: 'My thoughts on "vibe coding" as a 10x engineer and researcher',
  type: 'MD',
  date: 'March 20, 2025',
  summary: 'I do not usually comment on trendy phrases, but this one needed a post.',
  tag: 'Misc',
  link: '#',
};

export const recentPaper = {
  title: 'Humanoid Manipulation with Vision-Language-Action Models (ECE 398 Final Paper)',
  type: 'PDF',
  date: 'December 20, 2025',
  summary:
    'Built an end-to-end pipeline for deploying vision-language-action models on humanoid robots with practical hardware constraints.',
  tags: ['UIUC', 'ML', 'Robotics', 'Research'],
  link: '#',
};

export const socials = [
  {
    platform: 'Instagram',
    handle: '@aidanandrewss',
    followers: '2,000+',
    posts: '50+',
    description: 'Share day-to-day progress, build logs, and behind-the-scenes moments.',
    link: '#',
  },
  {
    platform: 'Twitter/X',
    handle: '@aidansandrews',
    followers: 'Placeholder',
    posts: 'Placeholder',
    description: 'Updates on projects, research notes, and short-form technical thoughts.',
    link: '#',
  },
];

export const githubActivity = {
  username: 'aidanandrews22',
  description: 'GitHub profile and contribution heatmap section placeholder.',
  imagePlaceholder: 'GitHub Contribution Chart Placeholder',
  profileLink: '#',
};

export const contact = {
  email: 'email.placeholder@example.com',
  linkedin: '#',
  github: '#',
};
