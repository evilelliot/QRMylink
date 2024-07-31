// src/components/ProtectedRoute.tsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...rest }) => {
    const { token } = useAuth(); 

    return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
