import React, { createContext, useState, useContext } from 'react';
import { mockUsers } from '../data/users';
import defaultAvatar from '../assets/user.png';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    try {
      const storedUsers = localStorage.getItem('users');
      return storedUsers ? JSON.parse(storedUsers) : mockUsers;
    } catch (e) {
      console.error('Failed to load users from localStorage', e);
      return mockUsers;
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('currentUser');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      console.error('Failed to load currentUser from localStorage', e);
      return null;
    }
  });

  const login = (email, password) => {
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      try {
        localStorage.setItem('currentUser', JSON.stringify(user));
      } catch (e) {
        console.error('Failed to save currentUser to localStorage', e);
      }
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password.' };
  };

  const register = async (email, password, fullName) => {
    if (!email || !password || !fullName) {
      return { success: false, error: 'All fields are required.' };
    }

    const emailExists = users.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (emailExists) {
      return { success: false, error: 'Email is already registered.' };
    }

    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const newUser = {
      id: String(users.length + 1),
      firstName,
      lastName,
      email,
      password,
      avatar: defaultAvatar,
      role: 'student',
      membership: 'Free Member',
      bio: '',
      enrolledCourses: []
    };

    setUsers((prevUsers) => {
      const updated = [...prevUsers, newUser];
      try {
        localStorage.setItem('users', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save users to localStorage', e);
      }
      return updated;
    });
    setCurrentUser(newUser);
    try {
      localStorage.setItem('currentUser', JSON.stringify(newUser));
    } catch (e) {
      console.error('Failed to save currentUser to localStorage', e);
    }

    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('currentUser');
    } catch (e) {
      console.error('Failed to remove currentUser from localStorage', e);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register, users }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
