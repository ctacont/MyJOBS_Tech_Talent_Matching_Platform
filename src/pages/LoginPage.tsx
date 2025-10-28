import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useStore';
import { Container, Button, Input, Card } from '../components/ui';
import { DEMO_CREDENTIALS } from '../config/demo';

/**
 * LoginPage - Login-Seite mit localStorage-basierter Dummy-Auth
 */
const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({ email: '', password: '' });
    
    // Simple validation
    let hasError = false;
    const newErrors = { email: '', password: '' };
    
    if (!formData.email) {
      newErrors.email = 'Email ist erforderlich';
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ungültige Email-Adresse';
      hasError = true;
    }
    
    if (!formData.password) {
      newErrors.password = 'Passwort ist erforderlich';
      hasError = true;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Passwort muss mindestens 6 Zeichen lang sein';
      hasError = true;
    }
    
    if (hasError) {
      setErrors(newErrors);
      return;
    }
    
    // Attempt login
    setIsLoading(true);
    const success = await login(formData.email, formData.password);
    setIsLoading(false);
    
    if (success) {
      navigate('/profile');
    } else {
      setErrors({ ...errors, password: 'Login fehlgeschlagen' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Demo-Credentials automatisch einfügen
  const fillDemoCredentials = () => {
    setFormData({
      email: DEMO_CREDENTIALS.email,
      password: DEMO_CREDENTIALS.password
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="max-w-md mx-auto">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">J</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Willkommen zurück
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Melde dich an, um fortzufahren
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="deine@email.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                autoComplete="email"
              />

              <Input
                type="password"
                name="password"
                label="Passwort"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                autoComplete="current-password"
              />

              {/* Demo-Credentials Button */}
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="w-full text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                🎯 Demo-Credentials verwenden ({DEMO_CREDENTIALS.email})
              </button>

              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? 'Wird angemeldet...' : 'Anmelden'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Noch kein Account?{' '}
                <Link
                  to="/signup"
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Jetzt registrieren
                </Link>
              </p>
            </div>

            {/* Demo Info */}
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-2">
                💡 Demo-Hinweis
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-400 mb-2">
                Dies ist eine Demo-App. Klicke auf "Demo-Credentials verwenden" oder nutze:
              </p>
              <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded font-mono text-xs">
                <div>Email: <strong>{DEMO_CREDENTIALS.email}</strong></div>
                <div>Passwort: <strong>{DEMO_CREDENTIALS.password}</strong></div>
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                Oder verwende eine beliebige Email mit mind. 6 Zeichen Passwort.
              </p>
            </div>

            {/* Image Credits */}
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-500 text-center">
              Alle Bilder von{' '}
              <a 
                href="https://www.pexels.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Pexels
              </a>
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
