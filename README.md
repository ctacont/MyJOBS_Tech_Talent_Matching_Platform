# 🚀 MyJOBS_ - Tech Talent Matching Platform

> © 2025 by Hasan Yüksel. All rights reserved.

![MyJOBS_ Banner](https://via.placeholder.com/1200x400/0ea5e9/ffffff?text=MyJOBS_+-+Find+Your+Next+Tech+Role)

## 🌐 Live Demo

**[🚀 Live Demo auf GitHub Pages](https://ctacont.github.io/MyJOBS_Tech_Talent_Matching_Platform/)**

## 📖 Über das Projekt

**MyJOBS_** ist eine moderne Demo-Anwendung für Recruiting und Matching von Tech-Talenten mit innovativen Unternehmen. Diese Showcase-App demonstriert moderne Web-Development-Praktiken und bietet eine intuitive, Tinder-ähnliche Matching-Experience für die Job-Suche.

Entwickelt als Showcase-Projekt für **MyJOBS_**, um Expertise in modernen Frontend-Technologien zu demonstrieren.

## ✨ Features

### 🎯 Core Features
- **Swipe-basiertes Matching**: Intuitive Unternehmens-Suche mit Like/Dislike-Mechanik
- **KI-gestützte Empfehlungen**: Intelligente Job-Vorschläge basierend auf Skills und Profil
- **Talent-Profile**: Umfassende Profilverwaltung mit Skills, Gehaltswunsch, Standort, etc.
- **Authentication**: localStorage-basierte Dummy-Auth für Demo-Zwecke
- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile

### 🎨 Design & UX
- **Dark/Light Mode**: Vollständig implementierter Theme-Switcher
- **Moderne Animationen**: Smooth Transitions und Swipe-Animationen
- **TailwindCSS**: Utility-First CSS für schnelle Entwicklung
- **Gradient Design**: Auffällige Farbverläufe und moderne UI-Patterns

### 📊 Zusätzliche Features
- **Profil-Statistiken**: Tracking von Views, Matches und Bewerbungen
- **Company Showcase**: Übersicht über Top-Arbeitgeber
- **Job-Listings**: Aktuelle Tech-Jobs mit detaillierten Informationen
- **localStorage Persistierung**: Alle Daten bleiben lokal gespeichert

## 🛠️ Tech-Stack

### Frontend
- **React 18** - Moderne UI-Library
- **TypeScript** - Type-Safety und bessere Developer Experience
- **Vite** - Schneller Build-Tool und Dev-Server
- **React Router v6** - Client-side Routing
- **Zustand** - Leichtgewichtiges State Management mit Middleware
- **TailwindCSS** - Utility-First CSS Framework

### Tools & Libraries
- **ESLint** - Code Quality und Consistency
- **PostCSS & Autoprefixer** - CSS Processing
- **localStorage API** - Client-side Data Persistence

## 📁 Projektstruktur

```
myjobs_match/
├── public/                 # Static Assets
├── src/
│   ├── components/         # React Components
│   │   ├── layout/        # Layout-Komponenten (Navbar, etc.)
│   │   └── ui/            # Wiederverwendbare UI-Komponenten
│   ├── data/              # Mock-Daten
│   │   └── mockData.ts    # Jobs, Companies, Talents
│   ├── pages/             # Seiten-Komponenten
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── MatchingPage.tsx
│   │   └── AIRecommendationsPage.tsx
│   ├── store/             # Zustand State Management
│   │   └── useStore.ts    # Auth, Theme, Matching Stores
│   ├── App.tsx            # Main App Component mit Routing
│   ├── main.tsx           # Entry Point
│   └── index.css          # Global Styles & Tailwind
├── tailwind.config.js     # Tailwind Konfiguration
├── tsconfig.json          # TypeScript Config
├── vite.config.ts         # Vite Config
└── package.json           # Dependencies
```

## 🚀 Installation & Setup

### Voraussetzungen
- Node.js (v16 oder höher)
- npm oder yarn

### Installation

1. **Repository klonen**
```bash
git clone https://github.com/ctacont/MyJOBS_Tech_Talent_Matching_Platform.git
cd MyJOBS_Tech_Talent_Matching_Platform
```

2. **Dependencies installieren**
```bash
npm install
```

3. **Development Server starten**
```bash
npm run dev
```

Die App läuft nun auf `http://localhost:5173`

### Build für Produktion

```bash
npm run build
```

Die Build-Dateien befinden sich im `dist/` Ordner.

### Preview Production Build

```bash
npm run preview
```

## 🎮 Verwendung

### Demo-Login
Die App verwendet eine Dummy-Authentication. Verwende die vorkonfigurierten Demo-Credentials:

### Demo-Credentials (automatisch ausfüllbar)

```
Email: demo@demo.de
Password: password123
```

**Alternative Demo-Accounts:**
```
Email: sarah.schmidt@example.com
Passwort: demo123

Email: michael.weber@example.com
Passwort: demo123
```

Oder verwende eine beliebige Email und ein Passwort mit mindestens 6 Zeichen.

**Tipp:** Auf der Login-Seite gibt es einen "Demo-Credentials verwenden" Button, der die Felder automatisch ausfüllt!

### Hauptfunktionen testen

1. **Startseite**: Überblick über Features und aktuelle Jobs
2. **Signup/Login**: Erstelle ein Demo-Profil
3. **Profil**: Bearbeite Skills, Gehaltswunsch und Präferenzen
4. **Matching**: Swipe durch Unternehmen (← für Pass, → für Like)
5. **AI-Empfehlungen**: Siehe personalisierte Job-Vorschläge
6. **Dark Mode**: Toggle über das Icon in der Navbar

## 🎨 Design-Philosophie

### Farbschema
- **Primary**: Blau-Töne (#0ea5e9) - Trust, Professionalität
- **Accent**: Lila-Töne (#d946ef) - Innovation, Kreativität
- **Success**: Grün - Positive Actions
- **Dark Mode**: Elegante dunkle Grautöne für Augenschonung

### UX-Prinzipien
- **Mobile First**: Responsive Design von Grund auf
- **Progressive Disclosure**: Informationen schrittweise zeigen
- **Feedback**: Klare visuelle Rückmeldungen bei Aktionen
- **Accessibility**: Semantisches HTML und ARIA-Labels

## 📱 Geplante Features (Flutter Mobile App)

Die nächste Phase umfasst eine Flutter-Mobile-App mit:
- Gleicher Designphilosophie
- Native Mobile-Experience
- Optimierte Swipe-Gesten
- Push-Benachrichtigungen für Matches
- Shared API-Integration

## 🔧 Konfiguration

### TailwindCSS Customization
Siehe `tailwind.config.js` für:
- Custom Colors
- Animation Keyframes
- Dark Mode Configuration
- Extended Theme

### State Management
Zustand Stores in `src/store/useStore.ts`:
- **AuthStore**: User Authentication & Profile
- **ThemeStore**: Dark/Light Mode
- **MatchingStore**: Likes, Dislikes, Matches

## 📊 Performance

- **Vite HMR**: Instant Hot Module Replacement
- **Code Splitting**: Automatisch durch React Router
- **Optimized Bundle**: Tree-shaking und Minification
- **localStorage**: Keine Backend-Requests nötig

## 🤝 Beitragen

Dies ist ein Showcase-Projekt. Feedback und Verbesserungsvorschläge sind willkommen!

## 📄 Lizenz

Dieses Projekt ist für Demonstrationszwecke erstellt.

## 👨‍💻 Autor

**Hasan Yüksel**
- Showcase für MyJOBS_
- React & Flutter Expertise
- Modern Web Development

## 🙏 Danksagungen

- React Team für die großartige Library
- Tailwind Labs für TailwindCSS
- Zustand Team für einfaches State Management
- Vite Team für blitzschnelle Entwicklung

---

**Made with ❤️ for MyJOBS_**
