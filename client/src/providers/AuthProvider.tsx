import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';

interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken_] = useState<string | null>(() => localStorage.getItem('token'));

    const setToken = (newToken: string | null) => {
        setToken_(newToken);
    };

    const logout = () => {
        setToken_(null);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('token');
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
            logout,
            isAuthenticated: !!token,
        }),
        [token]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider;