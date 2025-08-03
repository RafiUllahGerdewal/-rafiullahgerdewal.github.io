export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  status?: 'completed' | 'ongoing' | 'planned'
  image?: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other'
  icon?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface HeroData {
  name: string
  title: string
  subtitle: string
  description: string
  avatar?: string
  initials: string
  location?: string
}

export interface ContactData {
  email: string
  socialLinks: SocialLink[]
} 