import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/useStore';

// Layout Components
import Navbar from './components/layout/Navbar';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import MatchingPage from './pages/MatchingPage';
import AIRecommendationsPage from './pages/AIRecommendationsPage';

/**
 * ProtectedRoute - Schützt Routen vor unauthentifizierten Zugriffen
 */
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

/**
 * App - Hauptkomponente mit Routing
 */
function App() {
  return (
    <Router basename="/MyJOBS_Tech_Talent_Matching_Platform">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        
        <Routes>
          {/* Öffentliche Routen */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Geschützte Routen */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/matching"
            element={
              <ProtectedRoute>
                <MatchingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ai-recommendations"
            element={
              <ProtectedRoute>
                <AIRecommendationsPage />
              </ProtectedRoute>
            }
          />
          
          {/* 404 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
