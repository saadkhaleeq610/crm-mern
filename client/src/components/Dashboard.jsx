import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {currentUser.name}</p>
      <nav>
        <ul>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/leads">Leads</Link></li>
          <li><Link to="/opportunities">Opportunities</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;