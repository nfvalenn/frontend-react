import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDashboardPage = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
          <div className="w-100" style={{ maxWidth: '600px', padding: '20px' }}>
            <h1 className="text-center mb-4">Selamat Datang di Halaman Utama Pengguna</h1>
            <p className="text-center">Ini adalah halaman utama untuk pengguna. Anda dapat menambahkan konten sesuai kebutuhan di sini.</p>
            <div className="text-center mt-4">
              <Link to="/profile" className="btn btn-primary" style={{ borderRadius: '10px' }}>
                Lihat Profil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
