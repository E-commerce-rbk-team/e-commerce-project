import React from 'react';
import './dashBoard.css'
import { Link } from 'react-router-dom';


const AdminDashboard = () => {
  return (
    <>
      <header role="banner">
        <h1>OmniMarket Admin Panel</h1>
        <ul className="utilities">
          <li className="users"><a href="#">My Account</a></li>
          <li className="logout warn"><a href="">Log Out</a></li>
        </ul>
      </header>

      <nav role='navigation'>
        <ul className="main">
          <li className="dashboard"><a href="admin">Dashboard</a></li>
          <li className="users"><Link to="/clients">Clients</Link></li>
          <li className="comments"><Link to="/sellers">Sellers</Link></li>
          <li className="write"><Link to="/products">Products</Link></li>
          <li className="users"><Link to="/users">Manage Users</Link></li>
        </ul>
      </nav>

      <main role="main">
        <section className="panel important">
          <h2>Welcome To Admin DashBoard!</h2>
          <ul>
          </ul>
        </section>
      </main>
    </>
  );
};

export default AdminDashboard;
