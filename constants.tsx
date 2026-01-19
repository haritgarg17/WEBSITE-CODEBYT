
import React from 'react';
import { 
  Code, 
  Smartphone, 
  Search, 
  Share2, 
  Target, 
  Palette, 
  Settings,
  Layout,
  Rocket,
  Zap
} from 'lucide-react';
import { Service, Project, Testimonial, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    description: 'High-performance business websites and landing pages optimized for conversions and user experience.',
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    features: ['E-commerce Solutions', 'Landing Pages', 'Business Sites', 'Portfolios'],
    themeColor: 'blue'
  },
  {
    id: 'app-dev',
    title: 'Web App Development',
    description: 'Scalable and robust custom web applications built with modern frameworks like React and Node.js.',
    icon: <Code className="w-8 h-8 text-purple-400" />,
    features: ['SaaS Platforms', 'Admin Panels', 'Internal Tools', 'API Integration'],
    themeColor: 'purple'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies to boost your organic visibility and drive high-quality traffic.',
    icon: <Search className="w-8 h-8 text-emerald-400" />,
    features: ['Keyword Research', 'On-page SEO', 'Backlink Strategy', 'Technical SEO'],
    themeColor: 'emerald'
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    description: 'Results-oriented Google and Meta ads campaigns focused on ROAS and lead generation.',
    icon: <Target className="w-8 h-8 text-pink-400" />,
    features: ['PPC Management', 'Retargeting', 'A/B Testing', 'Conversion Tracking'],
    themeColor: 'pink'
  },
  {
    id: 'branding',
    title: 'Branding & Graphic Design',
    description: 'Compelling brand identities that resonate with your target audience and stand out in the market.',
    icon: <Palette className="w-8 h-8 text-orange-400" />,
    features: ['Logo Design', 'Brand Guidelines', 'Social Media Assets', 'UI/UX Design'],
    themeColor: 'orange'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Optimization',
    description: 'Continuous monitoring and performance tuning to keep your digital assets running at peak efficiency.',
    icon: <Settings className="w-8 h-8 text-indigo-400" />,
    features: ['Security Updates', 'Speed Optimization', 'Bug Fixes', 'Cloud Hosting'],
    themeColor: 'indigo'
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: 1,
    title: 'EcoStore E-commerce',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/codebyt1/800/600',
    link: '#'
  },
  {
    id: 2,
    title: 'SaaS Analytics Dashboard',
    category: 'Web App',
    image: 'https://picsum.photos/seed/codebyt2/800/600',
    link: '#'
  },
  {
    id: 3,
    title: 'Luxury Hotel Branding',
    category: 'Branding',
    image: 'https://picsum.photos/seed/codebyt3/800/600',
    link: '#'
  },
  {
    id: 4,
    title: 'Fintech Mobile App',
    category: 'Web App',
    image: 'https://picsum.photos/seed/codebyt4/800/600',
    link: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'TechFlow Solutions',
    content: 'Codebyt transformed our online presence. Our conversion rate increased by 45% within the first three months of launching the new site.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'GreenRoute',
    content: 'Their team is incredibly responsive and technical. They don\'t just build what you ask; they build what you actually need for growth.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'How to Scale Your Startup with Data-Driven Marketing',
    excerpt: 'Discover the key metrics that actually matter for early-stage growth.',
    date: 'Oct 12, 2023',
    category: 'Marketing',
    image: 'https://picsum.photos/seed/blog1/600/400'
  },
  {
    id: 2,
    title: 'Top 5 UI Trends to Watch in 2024',
    excerpt: 'From bento grids to spatial design, here is what is shaping the future of web.',
    date: 'Oct 05, 2023',
    category: 'Design',
    image: 'https://picsum.photos/seed/blog2/600/400'
  }
];
