
// Import React to provide access to the React namespace for types like ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  themeColor: string; // Dynamic color for glow effects (e.g., 'blue', 'purple', 'emerald')
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}
