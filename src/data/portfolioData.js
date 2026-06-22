import {
  FaJava, FaPython, FaGitAlt, FaGithub, FaLinux, FaReact, FaNodeJs, FaDatabase,
  FaNetworkWired, FaBug, FaCode, FaBrain, FaTrophy, FaGraduationCap
} from 'react-icons/fa';
import {
  SiCplusplus, SiMysql, SiMongodb, SiExpress, SiOpencv, SiNumpy, SiPandas,
  SiScikitlearn, SiFastapi, SiJavascript, SiWireshark, SiKalilinux
} from 'react-icons/si';
import { TbBrandNpm, TbBrandVscode } from 'react-icons/tb';
import { HiOutlineTerminal } from 'react-icons/hi';
import { BiNetworkChart } from 'react-icons/bi';
import { MdSecurity, MdOutlineSchool } from 'react-icons/md';

export const personalInfo = {
  name: 'Amit Kumar',
  roles: [
    'Frontend Developer',
    'MERN Stack Developer',
    'B.Tech CSE Student',
    'Full Stack Developer',
  ],
  subtitle: 'Frontend Developer | MERN Stack Developer | B.Tech CSE Student',
  bio: `I am a passionate Full Stack Developer with experience in building web applications using the MERN stack. Currently pursuing B.Tech in Computer Science from NIT Uttarakhand. I enjoy solving real-world problems through code and have a keen interest in AI, Machine Learning, and Cybersecurity.`,
  email: 'bt22cse02@nituk.ac.in',
  github: 'https://github.com/amitkumarbharti-1234',
  linkedin: 'https://www.linkedin.com/in/amit-kumar-008626312',
  resumeLink: '/AmitResume.pdf',
  profileImage: '/profile.jpg',
};

export const stats = [
  { label: 'Problems Solved', value: '380+', icon: FaCode },
  { label: 'Projects', value: '5+', icon: FaBrain },
  { label: 'Tech Stack', value: 'MERN', icon: FaReact },
];

export const aboutCards = [
  { title: 'B.Tech CSE', detail: '2022 – 2026', icon: FaGraduationCap },
  { title: 'NIT Uttarakhand', detail: 'National Institute of Technology', icon: MdOutlineSchool },
  { title: 'CGPA', detail: '7.10', icon: FaTrophy },
];

export const interests = ['Web Development', 'Artificial Intelligence', 'Cybersecurity'];

export const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: FaPython },
      { name: 'C++', icon: SiCplusplus },
      { name: 'MySQL', icon: SiMysql },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'SVM', icon: FaBrain },
      { name: 'CNN', icon: BiNetworkChart },
    ],
  },
  {
    title: 'Dev Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Linux', icon: FaLinux },
      { name: 'VS Code', icon: TbBrandVscode },
      { name: 'FastAPI', icon: SiFastapi },
    ],
  },
  {
    title: 'Security',
    skills: [
      { name: 'Kali Linux', icon: SiKalilinux },
      { name: 'Wireshark', icon: SiWireshark },
      { name: 'Nmap', icon: FaNetworkWired },
      { name: 'Hydra', icon: FaBug },
    ],
  },
  {
    title: 'Core CS',
    skills: [
      { name: 'DSA', icon: FaCode },
      { name: 'OS', icon: HiOutlineTerminal },
      { name: 'CN', icon: FaNetworkWired },
      { name: 'DBMS', icon: FaDatabase },
      { name: 'OOP', icon: TbBrandNpm },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: 'Ethical Hacking Intern',
    company: 'C-DAC (Centre for Development of Advanced Computing)',
    period: '2024',
    description:
      'Gained hands-on experience in network security, vulnerability assessment, and penetration testing methodologies using industry-standard tools.',
    skills: ['Nmap', 'Wireshark', 'Reconnaissance', 'Security Testing'],
    icon: MdSecurity,
  },
  {
    id: 2,
    role: 'Web Development Trainee',
    company: 'Internshala',
    period: '2023',
    description:
      'Completed comprehensive web development training covering frontend and backend technologies. Built a full-stack PG Life project as the capstone.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'PG Life Project'],
    icon: FaCode,
  },
];

export const projects = [
  {
    id: 1,
    title: 'Resume Builder',
    description:
      'A dynamic resume builder application with live preview, PDF export, multiple template selection, and professional writing styles.',
    features: ['Live Preview', 'PDF Export', 'Template Selection', 'Writing Style'],
    tech: ['React', 'Tailwind CSS', 'jsPDF', 'JavaScript'],
    github: 'https://github.com/amitkumar/resume-builderhttps://github.com/amitkumarbharti-1234/premium-resume-builder',
    live: 'https://premium-resume-builder-two.vercel.app/',
    image: 'resume_builder',
  },
  {
    id: 2,
    title: 'Attendance Management System',
    description:
      'A MERN stack web application for managing attendance with role-based dashboards, OTP verification, and MongoDB storage.',
    features: ['Teacher Dashboard', 'Student Dashboard', 'OTP Verification', 'MongoDB'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'attendance_system',
  },
  {
    id: 3,
    title: 'Spam Detection SVM',
    description:
      'Machine learning model to classify emails as spam or not spam using SVM algorithm with TF-IDF vectorization.',
    features: ['SVM Classifier', 'TF-IDF', 'Text Preprocessing', 'High Accuracy'],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],

    image: 'spam_detection',
  },
  {
    id: 4,
    title: 'Spike AI Agent',
    description:
      'An intelligent AI agent designed to automate tasks and assist with decision making using advanced NLP techniques.',
    features: ['AI Automation', 'NLP', 'Task Management', 'Smart Responses'],
    tech: ['Python', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/amitkumar/spike-aihttps://github.com/amitkumarbharti-1234/spike-ai-backend',

    image: 'spike_ai',
  },
  {
    id: 5,
    title: 'Kasparoo AI Agent',
    description:
      'A conversational AI agent powered by large language models for intelligent interaction and automation workflows.',
    features: ['Conversational AI', 'LLM Integration', 'Workflow Automation', 'API'],
    tech: ['Python', 'React', 'FastAPI', 'LLM'],
    github: 'https://github.com/amitkumar/kasparoo-aihttps://github.com/amitkumarbharti-1234/kasparro-agentic-fb-analyst-amit-kumar',

    image: 'kasparoo_ai',
  },
];

export const achievements = [
  {
    title: '403 LeetCode Problems Solved',
    description:
      'Consistently solving algorithmic challenges on LeetCode, strengthening problem-solving skills in data structures and algorithms.',
    icon: FaCode,
    stat: '403',
  },
  {
    title: 'Tata Crucible Challenge',
    description:
      'Participated in the prestigious Tata Crucible Campus Quiz, one of India\'s largest business quizzes, demonstrating analytical thinking and business acumen.',
    icon: FaTrophy,
    stat: 'Finalist',
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'NIT Uttarakhand',
    period: '2022 – 2026',
    cgpa: '7.10',
    icon: FaGraduationCap,
  },
];

export const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Resume', to: 'resume' },
  { name: 'Contact', to: 'contact' },
];
