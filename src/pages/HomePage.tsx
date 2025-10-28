import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useStore';
import { Container, Button, Card, Badge } from '../components/ui';
import { mockJobs, mockCompanies } from '../data/mockData';

/**
 * HomePage - Landingpage mit Hero-Section und Feature-Übersicht
 */
const HomePage: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 text-white py-20 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Next Tech Role
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Matching Tech-Talente mit innovativen Unternehmen – 
              schnell, intelligent und persönlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {isAuthenticated ? (
                <>
                  <Link to="/matching">
                    <Button size="lg" variant="secondary">
                      🎯 Start Matching
                    </Button>
                  </Link>
                  <Link to="/ai-recommendations">
                    <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                      🤖 AI-Empfehlungen
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signup">
                    <Button size="lg" variant="secondary">
                      Jetzt starten
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Warum MyJOBS_?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Schnelles Matching
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Swipe durch Top-Unternehmen und finde in Minuten deinen Perfect Match.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                KI-Powered
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intelligente Job-Empfehlungen basierend auf deinen Skills und Präferenzen.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Top Companies
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Zugang zu den besten Tech-Unternehmen und innovativen Startups.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Aktuelle Top-Jobs
            </h2>
            <Link
              to={isAuthenticated ? "/matching" : "/login"}
              className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              Alle ansehen →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockJobs.slice(0, 3).map((job) => (
              <Card key={job.id} hover className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {job.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{job.location}</Badge>
                  <Badge variant="primary">{job.workMode}</Badge>
                  <Badge variant="success">{job.level}</Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {job.description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="font-bold text-primary-600 dark:text-primary-400">
                    {job.salary}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {job.posted}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Companies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Top-Arbeitgeber
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {mockCompanies.slice(0, 5).map((company) => (
              <div
                key={company.id}
                className="flex flex-col items-center justify-center p-4 hover:scale-110 transition-transform"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-20 h-20 rounded-lg mb-2"
                />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bereit für deinen nächsten Karriereschritt?
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                Erstelle jetzt dein Profil und lass dich von Top-Unternehmen finden.
              </p>
              <Link to="/signup">
                <Button size="lg" variant="secondary">
                  Kostenlos registrieren
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 bg-gray-900 dark:bg-gray-950 text-gray-400 text-center">
        <Container>
          <p className="text-sm">
            © 2025 MyJOBS_ - Alle Bilder von{' '}
            <a 
              href="https://www.pexels.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 underline"
            >
              Pexels
            </a>
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
