export interface NavItem {
  name: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  href: string;
}

export interface Industry {
  name: string;
  description: string;
}

export interface Insight {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  description: string;
}
