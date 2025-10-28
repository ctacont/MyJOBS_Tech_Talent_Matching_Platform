// Mock-Daten für Talente (Bewerber)
export const mockTalents = [
  {
    id: 1,
    name: "Sarah Schmidt",
    email: "sarah.schmidt@example.com",
    role: "Full-Stack Developer",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
    experience: "5 Jahre",
    location: "Berlin, Deutschland",
    availability: "Sofort verfügbar",
    salaryExpectation: "75.000 - 85.000 €",
    preferredWorkMode: "Hybrid",
    bio: "Leidenschaftliche Full-Stack Entwicklerin mit Fokus auf moderne Web-Technologien und Cloud-Native Lösungen."
  },
  {
    id: 2,
    name: "Michael Weber",
    email: "michael.weber@example.com",
    role: "DevOps Engineer",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    skills: ["Kubernetes", "AWS", "Terraform", "CI/CD", "Python"],
    experience: "7 Jahre",
    location: "München, Deutschland",
    availability: "In 2 Monaten",
    salaryExpectation: "85.000 - 95.000 €",
    preferredWorkMode: "Remote",
    bio: "DevOps-Experte mit starker Automatisierungs- und Infrastructure-as-Code Expertise."
  }
];

// Mock-Daten für Firmen/Arbeitgeber
export const mockCompanies = [
  {
    id: 1,
    name: "ByteFlow Technologies",
    logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    industry: "FinTech",
    location: "Berlin, Deutschland",
    size: "50-200 Mitarbeiter",
    description: "Innovative FinTech-Lösung für digitale Zahlungen und Banking",
    website: "https://byteflow-tech.example.com",
    culture: ["Agile", "Startup-Mentalität", "Flache Hierarchien"],
    benefits: ["Flexible Arbeitszeiten", "Remote möglich", "Weiterbildungsbudget", "Teamevents"]
  },
  {
    id: 2,
    name: "DataPulse Analytics",
    logo: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    industry: "Data Analytics",
    location: "München, Deutschland",
    size: "200-500 Mitarbeiter",
    description: "Leading Data Analytics Platform für Enterprise-Kunden",
    website: "https://datapulse.example.com",
    culture: ["Innovation", "Work-Life-Balance", "Diversität"],
    benefits: ["30 Tage Urlaub", "Homeoffice", "Gesundheitsprogramme", "Aktienoptionen"]
  },
  {
    id: 3,
    name: "SkyNet Solutions",
    logo: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    industry: "Cloud Services",
    location: "Hamburg, Deutschland",
    size: "100-200 Mitarbeiter",
    description: "Cloud-native Softwarelösungen und Consulting",
    website: "https://skynet-solutions.example.com",
    culture: ["Eigenverantwortung", "Continuous Learning", "Open Communication"],
    benefits: ["Flexible Arbeitsmodelle", "Konferenzbudget", "Sabbatical-Option", "Modern Office"]
  },
  {
    id: 4,
    name: "NeuralMind AI",
    logo: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    industry: "Artificial Intelligence",
    location: "Frankfurt, Deutschland",
    size: "20-50 Mitarbeiter",
    description: "KI-getriebene Lösungen für Industrie 4.0",
    website: "https://neuralmind.example.com",
    culture: ["Research-driven", "Cutting-edge Tech", "Collaboration"],
    benefits: ["Forschungsbudget", "Konferenzteilnahmen", "Publikationsunterstützung", "Equity"]
  },
  {
    id: 5,
    name: "EcoVerse Digital",
    logo: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    industry: "Sustainability Tech",
    location: "Köln, Deutschland",
    size: "30-100 Mitarbeiter",
    description: "Nachhaltige Software-Lösungen für eine grünere Zukunft",
    website: "https://ecoverse.example.com",
    culture: ["Purpose-driven", "Sustainability", "Impact"],
    benefits: ["Klimaneutrales Arbeiten", "Sinnstiftende Projekte", "Bike-Leasing", "Green Benefits"]
  }
];

// Mock-Daten für Job-Angebote
export const mockJobs = [
  {
    id: 1,
    companyId: 1,
    title: "Senior React Developer",
    company: "ByteFlow Technologies",
    logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    location: "Berlin, Deutschland",
    workMode: "Hybrid",
    salary: "70.000 - 90.000 €",
    type: "Vollzeit",
    level: "Senior",
    description: "Wir suchen einen erfahrenen React Developer für unser Core-Team.",
    requirements: ["React", "TypeScript", "REST APIs", "Git"],
    niceToHave: ["GraphQL", "Next.js", "AWS"],
    posted: "vor 2 Tagen",
    applicants: 12
  },
  {
    id: 2,
    companyId: 2,
    title: "Data Engineer",
    company: "DataPulse Analytics",
    logo: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    location: "München, Deutschland",
    workMode: "Remote",
    salary: "75.000 - 95.000 €",
    type: "Vollzeit",
    level: "Mid-Senior",
    description: "Gestalte die Zukunft von Big Data Analytics mit uns.",
    requirements: ["Python", "SQL", "Apache Spark", "ETL"],
    niceToHave: ["Airflow", "Kafka", "Databricks"],
    posted: "vor 1 Woche",
    applicants: 25
  },
  {
    id: 3,
    companyId: 3,
    title: "DevOps Engineer",
    company: "SkyNet Solutions",
    logo: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    location: "Hamburg, Deutschland",
    workMode: "Hybrid",
    salary: "80.000 - 100.000 €",
    type: "Vollzeit",
    level: "Senior",
    description: "Baue und betreibe moderne Cloud-Infrastrukturen.",
    requirements: ["Kubernetes", "AWS/Azure", "Terraform", "CI/CD"],
    niceToHave: ["Helm", "ArgoCD", "Prometheus"],
    posted: "vor 3 Tagen",
    applicants: 18
  },
  {
    id: 4,
    companyId: 4,
    title: "Machine Learning Engineer",
    company: "NeuralMind AI",
    logo: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    location: "Frankfurt, Deutschland",
    workMode: "Hybrid",
    salary: "85.000 - 110.000 €",
    type: "Vollzeit",
    level: "Senior",
    description: "Entwickle KI-Modelle für industrielle Anwendungen.",
    requirements: ["Python", "TensorFlow/PyTorch", "MLOps", "Statistics"],
    niceToHave: ["Computer Vision", "NLP", "Edge AI"],
    posted: "vor 5 Tagen",
    applicants: 8
  },
  {
    id: 5,
    companyId: 5,
    title: "Full-Stack Developer (Green Tech)",
    company: "EcoVerse Digital",
    logo: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    location: "Köln, Deutschland",
    workMode: "Remote",
    salary: "65.000 - 80.000 €",
    type: "Vollzeit",
    level: "Mid-Level",
    description: "Entwickle nachhaltige Software-Lösungen mit Impact.",
    requirements: ["JavaScript", "React", "Node.js", "MongoDB"],
    niceToHave: ["TypeScript", "Docker", "Green Software Principles"],
    posted: "vor 1 Tag",
    applicants: 15
  }
];

// Mock-Daten für AI-Recommendations
export const mockAIRecommendations = [
  {
    jobId: 1,
    matchScore: 95,
    reason: "Perfekte Übereinstimmung mit deinen React & TypeScript Skills",
    highlights: ["React Expertise", "TypeScript", "Standort Berlin"]
  },
  {
    jobId: 3,
    matchScore: 88,
    reason: "Deine Cloud-Erfahrung passt hervorragend",
    highlights: ["DevOps Background", "Kubernetes", "Hybrid-Modell"]
  },
  {
    jobId: 5,
    matchScore: 82,
    reason: "Starker Fit mit deinem Full-Stack Profil",
    highlights: ["Full-Stack Skills", "Remote möglich", "Moderner Stack"]
  }
];

// Nutzer-Statistiken für Dashboard
export const mockUserStats = {
  profileViews: 127,
  matches: 8,
  applications: 3,
  savedJobs: 12,
  weeklyActivity: [
    { day: "Mo", views: 15 },
    { day: "Di", views: 22 },
    { day: "Mi", views: 18 },
    { day: "Do", views: 25 },
    { day: "Fr", views: 20 },
    { day: "Sa", views: 12 },
    { day: "So", views: 15 }
  ]
};
