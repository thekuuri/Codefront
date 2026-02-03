
import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  ShieldCheck, 
  MessageSquare, 
  Settings, 
  PieChart,
  Users,
  Layers,
  Zap,
  Clock,
  Fingerprint
} from 'lucide-react';
import { Service, Product, ContactInfo } from './types';

export const COMPANY_NAME = "Codefront Consultancy LTD";
export const TAGLINE = "Software Masters by Codefront";

export const SERVICES: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    description: 'Streamline operations and boost efficiency with tailor-made enterprise applications built for your unique business needs.',
    icon: 'Code2'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Specializing in Android and iOS platforms, we build high-performance apps that engage users and optimize field activities.',
    icon: 'Smartphone'
  },
  {
    id: 'web-dev',
    title: 'Modern Web Development',
    description: 'Responsive, secure, and SEO-optimized websites designed to convert visitors into loyal customers.',
    icon: 'Globe'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Expert guidance on digital transformation, technology stack selection, and enterprise architecture.',
    icon: 'Settings'
  },
  {
    id: 'bulk-comms',
    title: 'Smart Communications',
    description: 'Bulk SMS campaigns and WhatsApp messaging solutions to reach thousands of customers where they are most active.',
    icon: 'MessageSquare'
  },
  {
    id: 'data-analytics',
    title: 'Business Analytics',
    description: 'Leveraging Power BI and cloud tech to turn your data into actionable insights for informed decision making.',
    icon: 'PieChart'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'landmasters',
    name: 'LandMasters ERP',
    platform: 'Web/Cloud',
    description: 'A revolutionary real-estate platform that unlocks the diaspora market. Sell faster and build trust with auto-generated certificates and payments.',
    features: ['Self-Purchase Anywhere', 'Instant Statements', 'Automated Completion Certificates', 'M-Pesa/Visa Integration'],
    image: 'https://picsum.photos/seed/land/800/600'
  },
  {
    id: 'biztrack',
    name: 'Field Force App (BizTrack)',
    platform: 'Android App',
    client: 'British American Tobacco (Kenya, Uganda, Somalia)',
    description: 'Optimizes bike and foot sales activities. Empowers teams with KYC collection, order taking, and real-time reporting.',
    features: ['Geo-tagging & Location Pinning', 'E-Signatures', 'Route Optimization', 'Offline Mode Support'],
    image: 'https://picsum.photos/seed/biztrack/800/600'
  },
  {
    id: 'canteen-management',
    name: 'Biometric Canteen System',
    platform: 'Hardware/Cloud Integrated',
    description: 'A secure, cashless solution for corporate dining. Eliminates manual record-keeping and leakage using advanced fingerprint or facial recognition.',
    features: ['Biometric Authentication', 'Cashless Meal Vouchers', 'Real-time Usage Reports', 'Payroll Deduction Sync', 'Inventory Control'],
    image: 'https://picsum.photos/seed/biometrics/800/600'
  },
  {
    id: 'lite-pos',
    name: 'Lite POS',
    platform: 'Android/Handheld',
    description: 'Smart, simple, and always on. A portable retail solution that works even during blackouts or no internet.',
    features: ['Offline Capability', 'Inventory Alerts', 'M-Pesa Integration', 'Hotel & Table Management'],
    image: 'https://picsum.photos/seed/pos/800/600'
  },
  {
    id: 'illicit-tracker',
    name: 'Illicit Tracker (Bounty Hunter)',
    platform: 'Android App',
    client: 'British American Tobacco Kenya',
    description: 'Combats counterfeits by rewarding teams for reporting fake products with GPS-captured evidence.',
    features: ['Counterfeit Reporting', 'GPS Mapping', 'Barcode Scanning', 'Team Rewards System'],
    image: 'https://picsum.photos/seed/tracker/800/600'
  },
  {
    id: 'leave-management',
    name: 'Leave Management System',
    platform: 'Cloud Platform',
    description: 'Paperless, transparent workflow for automating leave requests, approvals, and tracking balances.',
    features: ['Role-based access', 'Real-time status tracking', 'Automated Notifications', 'Policy Compliance'],
    image: 'https://picsum.photos/seed/leave/800/600'
  }
];

export const WHY_US = [
  { title: 'Dedicated Managers', description: 'Professional account managers for every client.', icon: Users },
  { title: 'Robust SLAs', description: 'Strong escalation processes and uptime guarantees.', icon: ShieldCheck },
  { title: 'Flexible Offerings', description: 'Highly customizable solutions built for growth.', icon: Layers },
  { title: 'Dynamic Support', description: 'Onsite, on-call, or remote support options.', icon: Zap },
  { title: 'Negotiable Terms', description: 'Flexible payment plans tailored to your budget.', icon: Clock },
  { title: 'Latest Tech', description: 'Built with the most advanced cloud & mobile tech.', icon: Code2 }
];

export const CONTACT_INFO: ContactInfo = {
  location: 'Muguku Building, 4th Floor',
  address: 'P.O.BOX 21865 - 00100 NBI - Kenya',
  phones: ['+254 710 842 937', '+254 118 716 760'],
  emails: ['info@codefront.co.ke', 'finance@codefront.co.ke', 'legal@codefront.co.ke']
};

export const TECH_STACK = [
  'Microsoft Azure', 'SharePoint Online', 'Microsoft PowerApps', 'AWS', 'Ubuntu', 'Red Hat Linux', 'Power BI', 'Google Maps APIs'
];

export const iconMap: { [key: string]: any } = {
  Code2, Smartphone, Globe, Settings, MessageSquare, PieChart, Fingerprint
};
