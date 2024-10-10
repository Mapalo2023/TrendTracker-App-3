import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser, User } from '../services/userService';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'user' as const });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const fetchedUsers = await getUsers();
    setUsers(fetchedUsers);
  };

  const handleCreateUser = async () => {
    const createdUser = await createUser(newUser);
    if (createdUser) {
      setUsers([...users, createdUser]);
      setNewUser({ name: '', email: '', role: 'user' });
    }
  };

  const handleUpdateUser = async (id: string, updatedUser: Partial<User>) => {
    const updated = await updateUser(id, updatedUser);
    if (updated) {
      setUsers(users.map(user => user.id === id ? { ...user, ...updatedUser } : user));
    }
  };

  const handleDeleteUser = async (id: string) => {
    const deleted = await deleteUser(id);
    if (deleted) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      
      <div className="create-user-form">
        <h3>Create New User</h3>
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          placeholder="Email"
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value as 'user' | 'admin' })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleCreateUser} className="btn btn-primary">Create User</button>
      </div>

      <div className="user-list">
        <h3>User List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleUpdateUser(user.id, { role: user.role === 'user' ? 'admin' : 'user' })} className="btn btn-secondary">
                    Toggle Role
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;