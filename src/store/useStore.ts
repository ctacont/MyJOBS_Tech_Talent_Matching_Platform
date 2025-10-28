import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Typ-Definitionen für User
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  skills?: string[];
  experience?: string;
  location?: string;
  availability?: string;
  salaryExpectation?: string;
  preferredWorkMode?: string;
  bio?: string;
}

// Typ-Definitionen für Auth Store
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: Partial<User>) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
}

// Zustand Store für Authentication mit localStorage Persistierung
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      // Login-Funktion (Dummy - akzeptiert jede Email/Password Kombination)
      login: async (email: string, password: string) => {
        // Simuliere API-Call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dummy-Validierung
        if (email && password.length >= 6) {
          const dummyUser: User = {
            id: 1,
            name: email.split('@')[0],
            email: email,
            role: 'Full-Stack Developer',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
            skills: ['React', 'TypeScript', 'Node.js'],
            experience: '3 Jahre',
            location: 'Berlin, Deutschland',
            availability: 'Sofort verfügbar',
            salaryExpectation: '60.000 - 75.000 €',
            preferredWorkMode: 'Hybrid',
            bio: 'Leidenschaftlicher Developer auf der Suche nach neuen Herausforderungen.'
          };
          
          set({ user: dummyUser, isAuthenticated: true });
          return true;
        }
        
        return false;
      },

      // Signup-Funktion (Dummy)
      signup: async (userData: Partial<User>) => {
        // Simuliere API-Call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (userData.email && userData.name) {
          const newUser: User = {
            id: Date.now(),
            name: userData.name,
            email: userData.email,
            role: userData.role || 'Developer',
            avatar: `https://images.pexels.com/photos/${1000000 + Math.floor(Math.random() * 1000000)}/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`,
            skills: userData.skills || [],
            experience: userData.experience || '0 Jahre',
            location: userData.location || '',
            availability: userData.availability || 'Flexibel',
            salaryExpectation: userData.salaryExpectation || '',
            preferredWorkMode: userData.preferredWorkMode || 'Hybrid',
            bio: userData.bio || ''
          };
          
          set({ user: newUser, isAuthenticated: true });
          return true;
        }
        
        return false;
      },

      // Logout-Funktion
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      // Profil aktualisieren
      updateProfile: (userData: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ user: { ...currentUser, ...userData } });
        }
      }
    }),
    {
      name: 'myjobs_auth-storage', // localStorage key
    }
  )
);

// Theme Store für Dark/Light Mode
interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          
          // Aktualisiere HTML class für Tailwind Dark Mode
          if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          
          return { theme: newTheme };
        });
      },
      
      setTheme: (theme) => {
        set({ theme });
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }),
    {
      name: 'myjobs_theme-storage',
      onRehydrateStorage: () => (state) => {
        // Stelle sicher, dass Theme beim Laden angewendet wird
        if (state?.theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      }
    }
  )
);

// Matching Store für Like/Dislike Aktionen
interface MatchingState {
  likedCompanies: number[];
  dislikedCompanies: number[];
  matches: number[];
  likeCompany: (companyId: number) => void;
  dislikeCompany: (companyId: number) => void;
  resetMatching: () => void;
}

export const useMatchingStore = create<MatchingState>()(
  persist(
    (set) => ({
      likedCompanies: [],
      dislikedCompanies: [],
      matches: [],
      
      likeCompany: (companyId) => {
        set((state) => ({
          likedCompanies: [...state.likedCompanies, companyId],
          matches: [...state.matches, companyId] // In real app, würde das Backend entscheiden
        }));
      },
      
      dislikeCompany: (companyId) => {
        set((state) => ({
          dislikedCompanies: [...state.dislikedCompanies, companyId]
        }));
      },
      
      resetMatching: () => {
        set({ likedCompanies: [], dislikedCompanies: [], matches: [] });
      }
    }),
    {
      name: 'myjobs_matching-storage'
    }
  )
);
