/**
 * Demo-Konfiguration für MyJOBS_
 * Diese Datei enthält Demo-Credentials und Konfigurationen
 */

// Demo-Login-Credentials
export const DEMO_CREDENTIALS = {
  email: 'demo@demo.de',
  password: 'password123',
  name: 'Demo User'
};

// Alternative Demo-Accounts
export const DEMO_ACCOUNTS = [
  {
    email: 'sarah.schmidt@example.com',
    password: 'demo123',
    name: 'Sarah Schmidt',
    role: 'Full-Stack Developer',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    experience: '5 Jahre',
    location: 'Berlin, Deutschland',
  },
  {
    email: 'michael.weber@example.com',
    password: 'demo123',
    name: 'Michael Weber',
    role: 'DevOps Engineer',
    skills: ['Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Python'],
    experience: '7 Jahre',
    location: 'München, Deutschland',
  },
  {
    email: 'demo@demo.de',
    password: 'password123',
    name: 'Demo User',
    role: 'Software Developer',
    skills: ['React', 'TypeScript', 'Node.js'],
    experience: '3 Jahre',
    location: 'Berlin, Deutschland',
  }
];

// App-Konfiguration
export const APP_CONFIG = {
  minPasswordLength: 6,
  appName: 'MyJOBS_',
  appTagline: 'Find Your Next Tech Role',
  supportEmail: 'support@juucy.io',
};

// Validierungs-Regeln
export const VALIDATION_RULES = {
  email: /\S+@\S+\.\S+/,
  minPasswordLength: 6,
  maxNameLength: 100,
};
