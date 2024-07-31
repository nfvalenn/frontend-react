import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      alert(response.data.message);

      // Ambil role dari respons
      const { role } = response.data;

      // Arahkan berdasarkan role
      if (role === 'admin') {
        navigate('/dashboard'); // Arahkan ke dashboard untuk admin
      } else {
        navigate('/user'); // Arahkan ke halaman user untuk user biasa
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Terjadi kesalahan');
    }
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img 
            src='registerlogin.png' 
            alt='logo' 
            className='img-fluid' 
            style={{ maxWidth: '100%' }} 
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="w-100" style={{ maxWidth: '400px', padding: '20px' }}>
            <h2 className="text-left mb-4">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email" 
                  required 
                  style={{ borderRadius: '10px' }} 
                />
              </div>
              <div className="form-group mb-4">
                <input 
                  type="password" 
                  className="form-control" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Masukkan password" 
                  required 
                  style={{ borderRadius: '10px' }} 
                />
              </div>
              <button 
                type="submit" 
                className="btn w-100 text-white" 
                style={{ backgroundColor: '#7887BE', borderColor: '#7887BE', borderRadius: '10px' }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
