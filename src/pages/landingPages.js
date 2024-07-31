import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-white">
      <div className="text-center">
        <img 
          src='/kartun.jpg' 
          alt='logo' 
          className='mb-5' 
          style={{ width: '350px', height: '350px' }} 
        />
        <p className='mb-2'>Sistem Pakar Pola Makan Diabetes Melitus Tipe 2</p>
        <p className='mb-4'>Konsultasikan Pola Makanmu Kepada Ahlinya</p>
        <div className="d-flex justify-content-center">
          <button 
            onClick={navigateToLogin} 
            className="btn btn-primary" 
            style={{ backgroundColor: '#7887BE', borderColor: '#7887BE', marginRight: '10px' }}
          >
            Login
          </button>
          <button 
            onClick={navigateToRegister} 
            className="btn btn-primary" 
            style={{ backgroundColor: '#7887BE', borderColor: '#7887BE' }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
