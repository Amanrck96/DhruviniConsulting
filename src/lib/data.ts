import type { Service, Industry, Insight, Job } from './types';

export const services: Service[] = [
  {
    id: 'talent-acquisition',
    title: 'Talent Acquisition',
    description: 'Strategic sourcing and hiring to build high-performing teams.',
    longDescription: 'Our talent acquisition services are designed to help you find and attract the best candidates in the market. We go beyond simple recruitment, focusing on a strategic approach that aligns with your long-term business goals. From crafting compelling job descriptions to implementing effective sourcing strategies, we manage the entire lifecycle to ensure you build a team that drives innovation and growth.',
    href: '/services/talent-acquisition',
  },
  {
    id: 'executive-search',
    title: 'Executive Search',
    description: 'Discreet and targeted searches for visionary leadership.',
    longDescription: 'Finding the right leader is critical for success. Our executive search service is a confidential, research-based process to identify and attract top-tier executives. We leverage our extensive network and deep industry knowledge to find leaders with the vision, experience, and cultural fit to steer your organization towards its goals. We handle the process with the utmost discretion and professionalism.',
    href: '/services/executive-search',
  },
  {
    id: 'leadership-hiring',
    title: 'Leadership Hiring',
    description: 'Building strong leadership pipelines for sustained success.',
    longDescription: 'Strong leadership is the backbone of any successful organization. Our leadership hiring services focus on identifying and recruiting senior-level talent that can make an immediate impact. We assess candidates for both their proven track record and their potential to grow with your company, ensuring you have a robust leadership pipeline for future challenges and sustained success.',
    href: '/services/leadership-hiring',
  },
];

export const industries: Industry[] = [
  {
    name: 'Technology & SaaS',
    description: 'We specialize in recruiting for high-growth tech companies, from software engineers to C-level executives.',
  },
  {
    name: 'Manufacturing',
    description: 'Our expertise covers the entire manufacturing sector, including operations, supply chain, and engineering leadership.',
  },
  {
    name: 'Real Estate',
    description: 'We connect top talent with leading firms in commercial and residential real estate development, investment, and management.',
  },
  {
    name: 'Healthcare & Life Sciences',
    description: 'We understand the unique demands of the healthcare industry, from clinical research to hospital administration.',
  },
  {
    name: 'Financial Services',
    description: 'Our network includes top professionals in banking, investment management, and fintech.',
  },
  {
    name: 'Consumer & Retail',
    description: 'We help retail and consumer goods companies find leaders who can navigate the fast-changing market landscape.',
  },
];

export const insights: Insight[] = [
  {
    id: 'insight-1',
    slug: 'the-future-of-remote-work',
    title: 'The Future of Remote Work: A Hybrid Approach',
    date: '2024-05-15',
    author: 'Dr. Evelyn Reed',
    excerpt: 'As companies navigate the post-pandemic world, the debate between fully remote, hybrid, and in-office work continues. We explore the benefits of a structured hybrid model...',
    content: '<p>As companies navigate the post-pandemic world, the debate between fully remote, hybrid, and in-office work continues. We explore the benefits of a structured hybrid model and how it can boost productivity and employee satisfaction.</p><p>The key is flexibility, but with clear guidelines. Our research shows that a 3-2 model (3 days in-office, 2 days remote) offers a great balance. It fosters collaboration while providing the autonomy that modern workers crave. This approach requires a shift in management style, focusing on output rather than hours logged.</p>',
  },
  {
    id: 'insight-2',
    slug: 'ai-in-recruitment',
    title: 'Leveraging AI in Recruitment: Beyond the Hype',
    date: '2024-04-22',
    author: 'John Carter',
    excerpt: 'Artificial intelligence is transforming the recruitment landscape. From automated screening to predictive analytics, AI tools can significantly improve efficiency and quality of hire...',
    content: '<p>Artificial intelligence is transforming the recruitment landscape. From automated screening to predictive analytics, AI tools can significantly improve efficiency and quality of hire. However, it\'s crucial to implement these tools ethically and without losing the human touch. We discuss best practices for integrating AI into your recruitment workflow.</p><p>Successful implementation involves training your team, ensuring data privacy, and continuously monitoring for bias. AI should be a tool to augment human recruiters, not replace them. It can free up their time to focus on what matters most: building relationships with candidates.</p>',
  },
  {
    id: 'insight-3',
    slug: 'building-a-strong-company-culture',
    title: 'The Architect\'s Guide to Building a Strong Company Culture',
    date: '2024-03-10',
    author: 'Dr. Evelyn Reed',
    excerpt: 'Company culture is more than just perks and office parties. It\'s the underlying values and behaviors that shape the employee experience. A strong culture is a powerful competitive advantage...',
    content: '<p>Company culture is more than just perks and office parties. It\'s the underlying values and behaviors that shape the employee experience. A strong culture is a powerful competitive advantage that attracts and retains top talent. This article provides a blueprint for intentionally designing and nurturing a culture that aligns with your mission.</p><p>It starts with leadership defining and embodying the desired values. From there, it\'s about reinforcing those values through hiring practices, performance management, and daily interactions. A positive culture doesn\'t happen by accident; it\'s built with purpose.</p>',
  },
];

export const jobs: Job[] = [
    {
        id: 'job-1',
        title: 'Senior Talent Acquisition Partner',
        location: 'Remote, USA',
        department: 'Internal Recruitment',
        description: 'We are looking for an experienced Talent Acquisition Partner to join our internal team. You will be responsible for sourcing and recruiting top-tier talent for Dhruvini Consulting and our key clients. A deep understanding of the full recruitment lifecycle and a passion for building relationships is a must.'
    },
    {
        id: 'job-2',
        title: 'AI & Recruitment Research Analyst',
        location: 'New York, NY',
        department: 'Innovation',
        description: 'Join our innovation team to research and implement the next generation of recruitment technologies. You will work closely with our consultants and the GenAI team to analyze market trends, evaluate new tools, and contribute to our proprietary AI platform. A background in data science or HR tech is preferred.'
    },
];
