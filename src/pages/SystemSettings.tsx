import React, { useState, useEffect } from 'react';
import { getSystemSettings, updateSystemSettings } from '../services/settingsService';
import { SystemSettings as SystemSettingsType } from '../types';

const SystemSettings: React.FC = () => {
  const [settings, setSettings] = useState<SystemSettingsType>({
    maxQuestionsPerQuiz: 0,
    maxQuestionsPerSurvey: 0,
    defaultQuizTimeLimit: 0,
    allowGuestAccess: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const fetchedSettings = await getSystemSettings();
      setSettings(fetchedSettings);
    } catch (error) {
      console.error('Error fetching system settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : parseInt(value, 10) || 0
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateSystemSettings(settings);
      alert('Settings updated successfully');
    } catch (error) {
      console.error('Error updating system settings:', error);
      alert('Failed to update settings');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <div>Loading settings...</div>;

  return (
    <div className="system-settings">
      <h2>System Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="maxQuestionsPerQuiz">Max Questions Per Quiz</label>
          <input
            type="number"
            id="maxQuestionsPerQuiz"
            name="maxQuestionsPerQuiz"
            value={settings.maxQuestionsPerQuiz}
            onChange={handleInputChange}
            min="1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxQuestionsPerSurvey">Max Questions Per Survey</label>
          <input
            type="number"
            id="maxQuestionsPerSurvey"
            name="maxQuestionsPerSurvey"
            value={settings.maxQuestionsPerSurvey}
            onChange={handleInputChange}
            min="1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="defaultQuizTimeLimit">Default Quiz Time Limit (minutes)</label>
          <input
            type="number"
            id="defaultQuizTimeLimit"
            name="defaultQuizTimeLimit"
            value={settings.defaultQuizTimeLimit}
            onChange={handleInputChange}
            min="1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="allowGuestAccess">
            <input
              type="checkbox"
              id="allowGuestAccess"
              name="allowGuestAccess"
              checked={settings.allowGuestAccess}
              onChange={handleInputChange}
            />
            Allow Guest Access
          </label>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  );
};

export default SystemSettings;