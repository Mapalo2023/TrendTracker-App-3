import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, User } from '../services/userService';
import { testApiConnection, updateApiKey } from '../services/openaiService';

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [apiKey, setApiKey] = useState('');
  const [apiStatus, setApiStatus] = useState<'connected' | 'disconnected' | 'testing'>('disconnected');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const handleUpdateApiKey = async () => {
    try {
      updateApiKey(apiKey);
      setApiStatus('testing');
      const isConnected = await testApiConnection();
      setApiStatus(isConnected ? 'connected' : 'disconnected');
    } catch (error) {
      console.error('Error updating API key:', error);
      setApiStatus('disconnected');
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      
      {/* ... rest of the component remains the same ... */}
    </div>
  );
};

export default AdminDashboard;