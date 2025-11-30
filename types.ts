import React from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  launchDate: string;
  icon: React.ElementType;
  category: 'AI Infrastructure' | 'Media Tools' | 'Generative Design';
}

export interface NavItem {
  label: string;
  href: string;
}