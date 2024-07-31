import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './layouts/ProtectedLayout';

import DebugLayout from './layouts/DebugLayout';
import HomeLayout from './layouts/HomeLayout';
import SignupLayout from './layouts/SignupLayout';
import ForgottenPassword from './layouts/ForgottenPassword';


import DashboardLayout from './layouts/DashboardLayout';
import LoginContainer from './components/container/LoginContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout/>} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/signup" element={<SignupLayout/>} />
        <Route path="/resetpassword" element={<ForgottenPassword/>} />
        <Route path="/dashboard" element={<ProtectedRoute element={<DashboardLayout/>} />} />
        <Route path="/debug" element={<ProtectedRoute element={<DebugLayout />} />} />
      </Routes>
    </Router>
  )
}

export default App
