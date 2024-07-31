// src/providers/UserInfoProvider.tsx
import React, { createContext, useContext, useEffect } from 'react';
import getUserInfo from '../components/container/GetUserInfo';

export interface UserInfo {
  username?: string;
  email?: string;
}

interface UserInfoContextType {
  userInfo: UserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(undefined);

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (context === undefined) {
    throw new Error('useUserInfo must be used within a UserInfoProvider');
  }
  return context;
};

export const UserInfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserInfo(token)
        .then(data => {
          setUserInfo(data);
        })
        .catch(error => {
          console.error("Failed to fetch user info", error);
        });
    }
  }, []);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
