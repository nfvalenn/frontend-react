import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboardPage = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
          <div className="w-100" style={{ maxWidth: '600px', padding: '20px' }}>
            <h1 className="text-center mb-4">Selamat Datang di Dashboard Admin</h1>
            <p className="text-center">Ini adalah halaman utama untuk admin. Anda dapat menambahkan konten sesuai kebutuhan di sini.</p>
            <div className="text-center mt-4">
              <Link to="/manage-users" className="btn btn-primary" style={{ borderRadius: '10px' }}>
                Kelola Pengguna
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
