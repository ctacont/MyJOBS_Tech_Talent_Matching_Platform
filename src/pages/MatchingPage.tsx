import React, { useState, useEffect } from 'react';
import { useMatchingStore } from '../store/useStore';
import { Container, Button, Card, Badge } from '../components/ui';
import { mockCompanies } from '../data/mockData';

/**
 * MatchingPage - Swipe-basierte Matching-Seite für Firmen
 */
const MatchingPage: React.FC = () => {
  const { likedCompanies, dislikedCompanies, likeCompany, dislikeCompany } = useMatchingStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [showMatchAnimation, setShowMatchAnimation] = useState(false);

  // Filtere bereits geswipte Firmen aus
  const availableCompanies = mockCompanies.filter(
    company => !likedCompanies.includes(company.id) && !dislikedCompanies.includes(company.id)
  );

  const currentCompany = availableCompanies[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (!currentCompany) return;

    setSwipeDirection(direction);

    setTimeout(() => {
      if (direction === 'right') {
        likeCompany(currentCompany.id);
        setShowMatchAnimation(true);
        setTimeout(() => setShowMatchAnimation(false), 2000);
      } else {
        dislikeCompany(currentCompany.id);
      }

      setSwipeDirection(null);
      setCurrentIndex(0); // Reset, da sich die availableCompanies Liste ändert
    }, 300);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handleSwipe('left');
    } else if (e.key === 'ArrowRight') {
      handleSwipe('right');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentCompany]);

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 bg-gray-50 dark:bg-gray-900">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Company Matching
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Swipe nach rechts bei Interesse, nach links zum Überspringen
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <Badge variant="success">{likedCompanies.length} Likes</Badge>
            <Badge variant="secondary">{dislikedCompanies.length} Passed</Badge>
            <Badge variant="primary">{availableCompanies.length} Verbleibend</Badge>
          </div>
        </div>

        {/* Matching Card */}
        <div className="max-w-2xl mx-auto">
          {currentCompany ? (
            <div className="relative">
              {/* Company Card */}
              <Card
                className={`p-8 transition-all duration-300 ${
                  swipeDirection === 'left'
                    ? 'animate-swipe-left'
                    : swipeDirection === 'right'
                    ? 'animate-swipe-right'
                    : ''
                }`}
              >
                {/* Company Logo & Header */}
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src={currentCompany.logo}
                    alt={currentCompany.name}
                    className="w-20 h-20 rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {currentCompany.name}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="primary">{currentCompany.industry}</Badge>
                      <Badge variant="secondary">{currentCompany.size}</Badge>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    📍 {currentCompany.location}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Über uns
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {currentCompany.description}
                  </p>
                </div>

                {/* Culture */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Unternehmenskultur
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentCompany.culture.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Benefits
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {currentCompany.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center text-gray-600 dark:text-gray-400 text-sm"
                      >
                        <span className="mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    variant="secondary"
                    fullWidth
                    size="lg"
                    onClick={() => handleSwipe('left')}
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="text-2xl">👎</span>
                    <span>Pass</span>
                  </Button>
                  <Button
                    variant="primary"
                    fullWidth
                    size="lg"
                    onClick={() => handleSwipe('right')}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700"
                  >
                    <span className="text-2xl">❤️</span>
                    <span>Like</span>
                  </Button>
                </div>

                {/* Keyboard Hint */}
                <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-4">
                  Tipp: Nutze ← und → auf der Tastatur
                </p>
              </Card>

              {/* Match Animation Overlay */}
              {showMatchAnimation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-fade-in">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center animate-slide-up">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      It's a Match!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Du hast {currentCompany.name} geliked!
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* No More Companies */
            <Card className="p-12 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Keine weiteren Firmen
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Du hast alle verfügbaren Firmen durchgesehen!
              </p>
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="font-bold text-primary-600 dark:text-primary-400">
                    {likedCompanies.length}
                  </span>{' '}
                  Firmen geliked
                </p>
                <Button
                  onClick={() => {
                    useMatchingStore.getState().resetMatching();
                    setCurrentIndex(0);
                  }}
                  variant="outline"
                >
                  Neu starten
                </Button>
              </div>
            </Card>
          )}
        </div>

        {/* Progress Indicator */}
        {availableCompanies.length > 0 && (
          <div className="max-w-2xl mx-auto mt-6">
            <div className="flex gap-1">
              {mockCompanies.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded ${
                    index < mockCompanies.length - availableCompanies.length
                      ? 'bg-primary-600'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default MatchingPage;
