import React, { useState } from 'react';
import { useAuthStore } from '../store/useStore';
import { Container, Button, Input, Card, Badge } from '../components/ui';

/**
 * ProfilePage - Talent-Profilseite mit bearbeitbaren Feldern
 */
const ProfilePage: React.FC = () => {
  const { user, updateProfile } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState('');

  const [formData, setFormData] = useState({
    name: user?.name || '',
    role: user?.role || '',
    location: user?.location || '',
    experience: user?.experience || '',
    availability: user?.availability || '',
    salaryExpectation: user?.salaryExpectation || '',
    preferredWorkMode: user?.preferredWorkMode || '',
    bio: user?.bio || '',
    skills: user?.skills || []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      role: user?.role || '',
      location: user?.location || '',
      experience: user?.experience || '',
      availability: user?.availability || '',
      salaryExpectation: user?.salaryExpectation || '',
      preferredWorkMode: user?.preferredWorkMode || '',
      bio: user?.bio || '',
      skills: user?.skills || []
    });
    setIsEditing(false);
  };

  if (!user) return null;

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Mein Profil
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Verwalte deine Profilinformationen und Präferenzen
            </p>
          </div>

          {/* Profile Card */}
          <Card className="p-8 mb-6">
            {/* Avatar & Basic Info */}
            <div className="flex items-start gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <img
                src={user.avatar || 'https://i.pravatar.cc/150?img=1'}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-primary-500"
              />
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <Input
                      name="name"
                      label="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <Input
                      name="role"
                      label="Rolle/Position"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="z.B. Full-Stack Developer"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {user.name}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                      {user.role}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {user.email}
                    </p>
                  </>
                )}
              </div>
              {!isEditing && (
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(true)}
                >
                  Profil bearbeiten
                </Button>
              )}
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Über mich
                </label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={3}
                    className="input-field"
                    placeholder="Erzähle kurz über dich..."
                  />
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">
                    {user.bio || 'Keine Beschreibung vorhanden'}
                  </p>
                )}
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Skills
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.skills.map((skill) => (
                    <Badge key={skill} variant="primary" className="flex items-center gap-2">
                      {skill}
                      {isEditing && (
                        <button
                          onClick={() => handleRemoveSkill(skill)}
                          className="ml-1 hover:text-red-500"
                        >
                          ×
                        </button>
                      )}
                    </Badge>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex gap-2">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Neuen Skill hinzufügen"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddSkill();
                        }
                      }}
                    />
                    <Button type="button" onClick={handleAddSkill} variant="secondary">
                      Hinzufügen
                    </Button>
                  </div>
                )}
              </div>

              {/* Grid Layout für weitere Infos */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Standort
                  </label>
                  {isEditing ? (
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="z.B. Berlin, Deutschland"
                    />
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      📍 {user.location || 'Nicht angegeben'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Erfahrung
                  </label>
                  {isEditing ? (
                    <Input
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="z.B. 5 Jahre"
                    />
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      💼 {user.experience || 'Nicht angegeben'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Verfügbarkeit
                  </label>
                  {isEditing ? (
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="Sofort verfügbar">Sofort verfügbar</option>
                      <option value="In 1 Monat">In 1 Monat</option>
                      <option value="In 2 Monaten">In 2 Monaten</option>
                      <option value="In 3+ Monaten">In 3+ Monaten</option>
                      <option value="Flexibel">Flexibel</option>
                    </select>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      🕒 {user.availability || 'Nicht angegeben'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Arbeitsmodell
                  </label>
                  {isEditing ? (
                    <select
                      name="preferredWorkMode"
                      value={formData.preferredWorkMode}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="On-Site">On-Site</option>
                      <option value="Flexibel">Flexibel</option>
                    </select>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      🏢 {user.preferredWorkMode || 'Nicht angegeben'}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Gehaltswunsch
                  </label>
                  {isEditing ? (
                    <Input
                      name="salaryExpectation"
                      value={formData.salaryExpectation}
                      onChange={handleChange}
                      placeholder="z.B. 60.000 - 75.000 €"
                    />
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      💰 {user.salaryExpectation || 'Nicht angegeben'}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons (when editing) */}
            {isEditing && (
              <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Button onClick={handleSave} fullWidth>
                  Änderungen speichern
                </Button>
                <Button onClick={handleCancel} variant="secondary" fullWidth>
                  Abbrechen
                </Button>
              </div>
            )}
          </Card>

          {/* Stats Card */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Profil-Statistiken
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">127</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Profilaufrufe</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent-600 dark:text-accent-400">8</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Matches</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">3</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Bewerbungen</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">12</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gespeichert</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
