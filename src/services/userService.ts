import axios from 'axios';

// In a real application, this would interact with your backend API
const API_URL = 'https://api.example.com';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

// Mock data to simulate API response
const mockUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'user' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'admin' },
];

export const getUsers = async (): Promise<User[]> => {
  try {
    // Simulating API call with mock data
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockUsers;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User | null> => {
  try {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const newUser: User = { ...user, id: Date.now().toString() };
    mockUsers.push(newUser);
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
};

export const updateUser = async (id: string, user: Partial<User>): Promise<User | null> => {
  try {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = mockUsers.findIndex(u => u.id === id);
    if (index !== -1) {
      mockUsers[index] = { ...mockUsers[index], ...user };
      return mockUsers[index];
    }
    return null;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
};

export const deleteUser = async (id: string): Promise<boolean> => {
  try {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = mockUsers.findIndex(u => u.id === id);
    if (index !== -1) {
      mockUsers.splice(index, 1);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
};