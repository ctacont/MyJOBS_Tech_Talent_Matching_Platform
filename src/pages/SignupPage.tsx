import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useStore';
import { Container, Button, Input, Card } from '../components/ui';
import { DEMO_CREDENTIALS } from '../config/demo';

/**
 * SignupPage - Registrierungs-Seite
 */
const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const signup = useAuthStore((state) => state.signup);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    setErrors({ name: '', email: '', password: '', confirmPassword: '' });
    
    // Validation
    let hasError = false;
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
      hasError = true;
    }
    
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
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwörter stimmen nicht überein';
      hasError = true;
    }
    
    if (hasError) {
      setErrors(newErrors);
      return;
    }
    
    // Attempt signup
    setIsLoading(true);
    const success = await signup({
      name: formData.name,
      email: formData.email,
      role: 'Developer'
    });
    setIsLoading(false);
    
    if (success) {
      navigate('/profile');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
                Jetzt starten
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Erstelle dein kostenloses Profil
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                label="Vollständiger Name"
                placeholder="Max Mustermann"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                autoComplete="name"
              />

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
                autoComplete="new-password"
              />

              <Input
                type="password"
                name="confirmPassword"
                label="Passwort bestätigen"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                autoComplete="new-password"
              />

              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? 'Wird erstellt...' : 'Account erstellen'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Bereits registriert?{' '}
                <Link
                  to="/login"
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Jetzt anmelden
                </Link>
              </p>
            </div>

            {/* Demo Info */}
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-2">
                💡 Demo-Hinweis
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-400 mb-2">
                Dies ist eine Demo-App mit localStorage-Speicherung. Deine Daten bleiben lokal auf deinem Gerät.
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                Bereits Demo-Account? Email: <strong>{DEMO_CREDENTIALS.email}</strong>
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default SignupPage;
