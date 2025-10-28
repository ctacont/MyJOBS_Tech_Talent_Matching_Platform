import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../store/useStore';
import { Container, Button, Card, Badge, LoadingSpinner } from '../components/ui';
import { mockJobs, mockAIRecommendations } from '../data/mockData';

/**
 * AIRecommendationsPage - KI-gestützte Job-Empfehlungen
 */
const AIRecommendationsPage: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const [recommendations, setRecommendations] = useState<typeof mockAIRecommendations>([]);

  // Simuliere KI-Loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecommendations(mockAIRecommendations);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const getRecommendedJobs = () => {
    return recommendations.map(rec => {
      const job = mockJobs.find(j => j.id === rec.jobId);
      return { ...job, ...rec };
    });
  };

  const refreshRecommendations = () => {
    setIsLoading(true);
    setTimeout(() => {
      // In einer echten App würden wir hier neue Empfehlungen laden
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 bg-gray-50 dark:bg-gray-900">
      <Container>
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                🤖 AI Job-Empfehlungen
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Basierend auf deinen Skills: {user?.skills?.join(', ')}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={refreshRecommendations}
              disabled={isLoading}
            >
              🔄 Aktualisieren
            </Button>
          </div>

          {/* AI Info Banner */}
          <Card className="p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border-primary-200 dark:border-primary-800">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Wie funktioniert die KI-Empfehlung?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Unsere KI analysiert dein Profil, deine Skills und Präferenzen, 
                  um die perfekten Job-Matches für dich zu finden. Je vollständiger 
                  dein Profil, desto besser die Empfehlungen!
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 text-center">
              <LoadingSpinner size="lg" />
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                KI analysiert dein Profil und findet passende Jobs...
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                  Skills werden analysiert...
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-150"></div>
                  Unternehmens-Matches werden berechnet...
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-300"></div>
                  Empfehlungen werden generiert...
                </div>
              </div>
            </Card>
          </div>
        ) : (
          /* Recommendations List */
          <div className="max-w-4xl mx-auto space-y-6">
            {getRecommendedJobs().map((job, index) => (
              <Card
                key={job.id}
                className="p-6 hover:shadow-xl transition-all duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Match Score Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-16 h-16 rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {job.company}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{job.location}</Badge>
                        <Badge variant="primary">{job.workMode}</Badge>
                        <Badge variant="success">{job.level}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Match Score */}
                  <div className="text-center ml-4">
                    <div className="relative w-20 h-20">
                      <svg className="transform -rotate-90 w-20 h-20">
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 35}`}
                          strokeDashoffset={`${2 * Math.PI * 35 * (1 - (job.matchScore || 0) / 100)}`}
                          className="text-primary-600 dark:text-primary-400 transition-all duration-1000"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                          {job.matchScore}%
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Match</p>
                  </div>
                </div>

                {/* AI Reason */}
                <div className="mb-4 p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg border border-accent-200 dark:border-accent-800">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">🤖</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                        Warum dieser Job?
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {job.reason}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Highlights:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.highlights?.map((highlight) => (
                      <Badge key={highlight} variant="success">
                        ✓ {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {job.description}
                </p>

                {/* Requirements */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Requirements:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements?.map((req) => (
                      <Badge
                        key={req}
                        variant={user?.skills?.includes(req) ? 'primary' : 'secondary'}
                      >
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="font-bold text-primary-600 dark:text-primary-400 mb-1">
                      {job.salary}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {job.posted} • {job.applicants} Bewerber
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                    <Button size="sm">
                      Bewerben
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

            {/* No Recommendations */}
            {recommendations.length === 0 && !isLoading && (
              <Card className="p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Keine Empfehlungen gefunden
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Vervollständige dein Profil, um bessere Job-Matches zu erhalten.
                </p>
                <Button onClick={() => window.location.href = '/profile'}>
                  Profil bearbeiten
                </Button>
              </Card>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AIRecommendationsPage;
