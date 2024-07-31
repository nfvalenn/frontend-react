import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LandingPage = () => <h1>Landing Page</h1>;
const LoginPage = () => <h1>Login Page</h1>;
const RegisterPage = () => <h1>Register Page</h1>;
const UserPage = () => <h1>User Page</h1>;
const DashboardPage = () => <h1>Dashboard Page</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
