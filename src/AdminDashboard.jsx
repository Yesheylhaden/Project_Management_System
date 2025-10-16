import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Sample data (replace with backend fetch)
    setProjects([
      {
        id: 1,
        name: 'Website Redesign',
        status: 'In Progress',
        progress: 45,
        invoice: 20,
        startDate: '2025-09-01',
        endDate: '2025-10-15',
        deadline: '2025-10-20',
        priority: 'High',
      },
    ]);

    setUsers([
      { id: 1, name: 'Sangay Choden', role: 'Admin', lastActive: '2025-10-13', status: 'Active' },
    ]);
  }, []);

  const handleProjectChange = (id, field, value) => {
    setProjects(projects.map(p => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      name: 'New Project',
      status: 'To Do',
      progress: 0,
      invoice: 0,
      startDate: '',
      endDate: '',
      deadline: '',
      priority: 'Medium',
    };
    setProjects([newProject, ...projects]);
  };

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: 'New User',
      role: 'Staff',
      lastActive: '',
      status: 'Inactive',
    };
    setUsers([newUser, ...users]);
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <img
            src="/logo.png"
            alt="Thimphu TechPark Logo"
            className="logo"
          />
        <div className="logo">
          <div className="tagline" >
            <h4>Thimphu TechPark</h4>
            <h4>BHUTAN'S FIRST IT PARK</h4>
          </div>
        </div>
        <div className="profile">A</div>
      </header>


      <div className="intro-card">
        <h1>✨ Admin Dashboard!</h1>
        <p>Track and manage all your company Projects</p>
      </div>

      <div className="stats-row">
        <div className="stat-box blue">
          <h3>TO DO LIST</h3>
          <h1>{projects.filter(p => p.status === 'To Do').length}</h1>
          <p>Project waiting to start</p>
        </div>
        <div className="stat-box orange">
          <h3>IN PROGRESS</h3>
          <h1>{projects.filter(p => p.status === 'In Progress').length}</h1>
          <p>Active Projects</p>
        </div>
        <div className="stat-box cyan">
          <h3>INVOICE</h3>
          <h1>{projects.filter(p => p.invoice < 100).length}</h1>
          <p>Pending Invoice</p>
        </div>
        <div className="stat-box green">
          <h3>DONE</h3>
          <h1>{projects.filter(p => p.status === 'Done').length}</h1>
          <p>Completed Projects</p>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2>All Projects</h2>
          <button onClick={handleAddProject}>+ Add Project</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Invoice</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Dead Line</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id}>
                <td><input value={p.name} onChange={(e) => handleProjectChange(p.id, 'name', e.target.value)} /></td>
                <td><input value={p.status} onChange={(e) => handleProjectChange(p.id, 'status', e.target.value)} /></td>
                <td><input type="number" value={p.progress} onChange={(e) => handleProjectChange(p.id, 'progress', e.target.value)} /></td>
                <td><input type="number" value={p.invoice} onChange={(e) => handleProjectChange(p.id, 'invoice', e.target.value)} /></td>
                <td><input type="date" value={p.startDate} onChange={(e) => handleProjectChange(p.id, 'startDate', e.target.value)} /></td>
                <td><input type="date" value={p.endDate} onChange={(e) => handleProjectChange(p.id, 'endDate', e.target.value)} /></td>
                <td><input type="date" value={p.deadline} onChange={(e) => handleProjectChange(p.id, 'deadline', e.target.value)} /></td>
                <td>
                  <select value={p.priority} onChange={(e) => handleProjectChange(p.id, 'priority', e.target.value)}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </td>
                <td><button>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <div className="section-header">
          <h2>User Management</h2>
          <button onClick={handleAddUser}>+ Add New User</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Role Assign</th>
              <th>Last Active</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td><input value={u.name} onChange={(e) => setUsers(users.map(x => x.id === u.id ? { ...x, name: e.target.value } : x))} /></td>
                <td><input value={u.role} onChange={(e) => setUsers(users.map(x => x.id === u.id ? { ...x, role: e.target.value } : x))} /></td>
                <td><input type="date" value={u.lastActive} onChange={(e) => setUsers(users.map(x => x.id === u.id ? { ...x, lastActive: e.target.value } : x))} /></td>
                <td><input value={u.status} onChange={(e) => setUsers(users.map(x => x.id === u.id ? { ...x, status: e.target.value } : x))} /></td>
                <td><button>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

