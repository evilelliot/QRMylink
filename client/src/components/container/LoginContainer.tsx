import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';
import axios from 'axios';
import LoginLayout from '../../layouts/LoginLayout';
import MainLayout from '../../layouts/MainLayout';

export default function LoginContainer() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setToken } = useAuth();

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post(
                'http://localhost:3000/api/auth/login',
                { username, password },
            );
            if (response.data.token) {
                setToken(response.data.token);
                navigate('/dashboard');
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error(err);
        }
    }

    return (
        <MainLayout>
            <LoginLayout
                username={username}
                password={password}
                error={error}
                onUsernameChange={handleUsernameChange}
                onPasswordChange={handlePasswordChange}
                onSubmit={handleSubmit}
            />
        </MainLayout>
    );
}