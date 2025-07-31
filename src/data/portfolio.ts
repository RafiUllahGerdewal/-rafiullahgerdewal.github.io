import type { HeroData, Project, Skill, ContactData } from '../types'

export const heroData: HeroData = {
  name: 'RafiUllah Gerdewal',
  title: 'Software Developer with a Master\'s in Computer Science (MSc CS)',
  subtitle: 'Focused on React, Node.js, MongoDB, Firebase, OCR, and AI-enhanced tools.',
  description: 'I specialize in building modern, real-world applications using JavaScript, TypeScript, React.js, Node.js, Firebase services, MongoDB Atlas, OCR tools like Tesseract.js, and ChromaDB with RAG for AI-powered search and summarization.',
  initials: 'RG',
  location: 'Bangalore, India',
  // Uncomment and add your image URL to use a responsive image instead of initials
  // avatar: '/images/avatar.jpg'
}

export const projects: Project[] = [
  {
    id: 'afghandocs',
    title: 'AfghanDocs',
    description: 'A document OCR and review system with offline-first design, MongoDB backend, and AI summarization via ChromaDB.',
    technologies: ['JavaScript', 'TypeScript', 'Node.js', 'React.js', 'Firebase Auth', 'Firebase Storage', 'Firebase Functions', 'Firestore', 'Tesseract.js', 'MongoDB Atlas', 'ChromaDB'],
    githubUrl: 'https://github.com/rafiullahgerdewal/afghandocs',
    liveUrl: 'https://afghandocs.com',
    featured: true,
    status: 'ongoing'
  },
  {
    id: 'thamaq',
    title: 'Thamaq',
    description: 'A Firebase-hosted restaurant menu web app, built with HTML, CSS, JavaScript, and Firestore for real-time menu management.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase Hosting', 'Firestore', 'Firebase Storage', 'Firebase Auth'],
    githubUrl: 'https://github.com/RafiUllahGerdewal/thamaq-website',
    liveUrl: 'https://thamaq.com',
    status: 'completed'
  },
  {
    id: 'twopearls',
    title: 'TwoPearls',
    description: 'A personal Islamic application presenting carefully selected verses (Ayahs) from two Surahs of the Quran. Designed for spiritual reminders and daily reflection with a simple, mobile-friendly interface. The app is minimalist, offline-friendly, and focused on clarity in line with traditional Islamic values.',
    technologies: ['React.js', 'HTML', 'JavaScript', 'JSON', 'Capacitor', 'Firebase', 'LocalStorage'],
    githubUrl: 'https://github.com/RafiUllahGerdewal/twopearls-ui',
    liveUrl: 'https://twopearls.com',
    status: 'completed'
  },
  {
    id: 'pashto-summarizer',
    title: 'Pashto Text Summarizer',
    description: 'LLM-based text summarization system for the low-resource Pashto language using custom datasets.',
    technologies: ['Python', 'Hugging Face', 'Custom Dataset'],
    githubUrl: 'https://github.com/RafiUllahGerdewal/TextSummarizationUsing-SpaCyNltk',
    liveUrl: 'https://pashto-summarizer.com',
    status: 'completed'
  }
]

export const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React.js', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', category: 'backend' },
  
  // Database
  { name: 'MongoDB Atlas', category: 'database' },
  { name: 'Firebase', category: 'database' },
  { name: 'Firestore', category: 'database' },
  { name: 'Firebase Storage', category: 'database' },
  { name: 'Firebase Auth', category: 'database' },
  { name: 'Firebase Functions', category: 'database' },
  
  // AI & Tools
  { name: 'Tesseract.js', category: 'other' },
  { name: 'ChromaDB', category: 'other' },
  { name: 'RAG', category: 'other' },
  { name: 'OCR', category: 'other' },
  { name: 'AI Summarization', category: 'other' },
  
  // Development Tools
  { name: 'Git', category: 'devops' },
  { name: 'Cursor IDE', category: 'devops' },
  { name: 'Firebase Emulator', category: 'devops' },
  { name: 'MongoDB Compass', category: 'devops' },
  { name: 'GitHub Copilot', category: 'devops' }
]

export const contactData: ContactData = {
  email: 'ra52voice@gmail.com',
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rafiullahgerdewal/',
      icon: 'linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rafiullahgerdewal',
      icon: 'github'
    },
    {
      name: 'Medium',
      url: 'https://rafiullahgerdewal.medium.com',
      icon: 'medium'
    }
  ]
} 