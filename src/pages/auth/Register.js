import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate(); // Updated hook
  const [formData, setFormData] = useState({
    username: '',
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

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert(response.data.message);
      navigate('/login'); // Updated navigation
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
            <h2 className="text-left mb-4">Buat Akun</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleRegister}>
              <div className="form-group mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Masukkan nama pengguna" 
                  required 
                  style={{ borderRadius: '10px' }} 
                />
              </div>
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
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
