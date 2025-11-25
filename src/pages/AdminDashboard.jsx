import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectionProjects, setSelectionProjects] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editing, setEditing] = useState({ type: '', id: null }); // track which record is being edited
  const [menuOpen, setMenuOpen] = useState(false);


  const [newProject, setNewProject] = useState({
    name: '',
    status: 'To Do',
    startDate: '',
    endDate: '',
    manager: '',
    budget: '',
    pdf: null,
  });

  useEffect(() => {
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

    setSelectionProjects([
      {
        id: 1,
        name: 'ERP Implementation',
        status: 'Pending',
        startDate: '2025-11-01',
        endDate: '2026-01-30',
        manager: 'Tashi',
        budget: 50000,
        pdf: null,
      },
    ]);
  }, []);

  const handleProjectChange = (id, field, value) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
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

  const handleCreateProject = () => {
    const created = { ...newProject, id: Date.now() };
    setSelectionProjects([created, ...selectionProjects]);
    setShowCreateModal(false);
    setNewProject({
      name: '',
      status: 'To Do',
      startDate: '',
      endDate: '',
      manager: '',
      budget: '',
      pdf: null,
    });
  };

  const handleSaveEdit = () => {
    setEditing({ type: '', id: null });
  };

  const handleCancelEdit = () => {
    setEditing({ type: '', id: null });
  };

  return (
    <div className="dashboard-container">
      
      
      
 <header className="header glass-header">

  <div className="logo-row">
    {/* Hamburger on left of logo */}
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      <div></div>
      <div></div>
      <div></div>
    </div>

    {/* Logo block stays same */}
    <div className="logo-block">
      <img src="/logo.png" alt="Thimphu TechPark Logo" className="logo-img" />
      <div className="logo-text">
        <h4>Thimphu TechPark</h4>
        <p>BHUTAN'S FIRST IT PARK</p>
      </div>
    </div>
  </div>

  <div className="header-right">
    <div className="notification">🔔</div>
    <div className="profile">A</div>
  </div>
</header>

{/* Dropdown */}
{menuOpen && (
  <div className="dropdown-menu">
    <p>Dashboard</p>
    <p>All Projects</p>
    <p>Manager Selection</p>
    <p>User Management</p>
  </div>
)}



      {/* Intro */}
      <div className="intro-card">
        <h1>✨ Admin Dashboard!</h1>
        <p>Track and manage all your company Projects</p>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-box blue">
          <h3>TO DO LIST</h3>
          <h1>{projects.filter((p) => p.status === 'To Do').length}</h1>
          <p>Project waiting to start</p>
        </div>
        <div className="stat-box orange">
          <h3>IN PROGRESS</h3>
          <h1>{projects.filter((p) => p.status === 'In Progress').length}</h1>
          <p>Active Projects</p>
        </div>
        <div className="stat-box cyan">
          <h3>INVOICE</h3>
          <h1>{projects.filter((p) => p.invoice < 100).length}</h1>
          <p>Pending Invoice</p>
        </div>
        <div className="stat-box green">
          <h3>DONE</h3>
          <h1>{projects.filter((p) => p.status === 'Done').length}</h1>
          <p>Completed Projects</p>
        </div>
      </div>

      {/* All Projects */}
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
                {editing.type === 'project' && editing.id === p.id ? (
                  <>
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
                    <td>
                      <button onClick={handleSaveEdit}>Save</button>
                      <button className="cancel" onClick={handleCancelEdit}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{p.name}</td>
                    <td>{p.status}</td>
                    <td>{p.progress}%</td>
                    <td>{p.invoice}</td>
                    <td>{p.startDate}</td>
                    <td>{p.endDate}</td>
                    <td>{p.deadline}</td>
                    <td>{p.priority}</td>
                    <td><button onClick={() => setEditing({ type: 'project', id: p.id })}>Edit</button></td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Project Selection */}
      <div className="section">
        <div className="section-header">
          <h2>Manager Selection</h2>
          <button onClick={() => setShowCreateModal(true)}>+ Create Project</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Manager</th>
              <th>Budget</th>
              <th>PDF File</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectionProjects.map((proj) => (
              <tr key={proj.id}>
                {editing.type === 'selection' && editing.id === proj.id ? (
                  <>
                    <td><input value={proj.name} onChange={(e) => setSelectionProjects(selectionProjects.map(p => p.id === proj.id ? { ...p, name: e.target.value } : p))} /></td>
                    <td><input value={proj.status} onChange={(e) => setSelectionProjects(selectionProjects.map(p => p.id === proj.id ? { ...p, status: e.target.value } : p))} /></td>
                    <td><input type="date" value={proj.startDate} onChange={(e) => setSelectionProjects(selectionProjects.map(p => p.id === proj.id ? { ...p, startDate: e.target.value } : p))} /></td>
                    <td><input type="date" value={proj.endDate} onChange={(e) => setSelectionProjects(selectionProjects.map(p => p.id === proj.id ? { ...p, endDate: e.target.value } : p))} /></td>
                    <td><input value={proj.manager} onChange={(e) => setSelectionProjects(selectionProjects.map(p => p.id === proj.id ? { ...p, manager: e.target.value } : p))} /></td>
                    <td><input type="number" value={proj.budget} onChange={(e) => setSelectionProjects(selectionProjects.map(p => p.id === proj.id ? { ...p, budget: e.target.value } : p))} /></td>
                    <td>
                      {proj.pdf ? (
                        <a href={URL.createObjectURL(proj.pdf)} target="_blank" rel="noopener noreferrer">View PDF</a>
                      ) : (
                        <span style={{ color: '#999' }}>No file uploaded</span>
                      )}
                    </td>
                    <td>
                      <button onClick={handleSaveEdit}>Save</button>
                      <button className="cancel" onClick={handleCancelEdit}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{proj.name}</td>
                    <td>{proj.status}</td>
                    <td>{proj.startDate}</td>
                    <td>{proj.endDate}</td>
                    <td>{proj.manager}</td>
                    <td>Nu{proj.budget}</td>
                    <td>
                      {proj.pdf ? (
                        <a href={URL.createObjectURL(proj.pdf)} target="_blank" rel="noopener noreferrer">View PDF</a>
                      ) : (
                        <span style={{ color: '#999' }}>No file uploaded</span>
                      )}
                    </td>
                    <td><button onClick={() => setEditing({ type: 'selection', id: proj.id })}>Edit</button></td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Management */}
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
                {editing.type === 'user' && editing.id === u.id ? (
                  <>
                    <td><input value={u.name} onChange={(e) => setUsers(users.map(x => x.id === u.id ? { ...x, name: e.target.value } : x))} /></td>
                    <td><input value={u.role} onChange={(e) => setUsers(users.map(x => x.id === u.id ? { ...x, role: e.target.value } : x))} /></td>
                    <td><input type="date" value={u.lastActive} onChange={(e) => setUsers(users.map(x => x.id === u.id ? { ...x, lastActive: e.target.value } : x))} /></td>
                    <td><input value={u.status} onChange={(e) => setUsers(users.map(x => x.id === u.id ? { ...x, status: e.target.value } : x))} /></td>
                    <td>
                      <button onClick={handleSaveEdit}>Save</button>
                      <button className="cancel" onClick={handleCancelEdit}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{u.name}</td>
                    <td>{u.role}</td>
                    <td>{u.lastActive}</td>
                    <td>{u.status}</td>
                    <td><button onClick={() => setEditing({ type: 'user', id: u.id })}>Edit</button></td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Create New Project</h3>

            <label>Project Name</label>
            <input
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            />

            <label>Status</label>
            <select
              value={newProject.status}
              onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>

            <label>Start Date</label>
            <input
              type="date"
              value={newProject.startDate}
              onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
            />

            <label>End Date</label>
            <input
              type="date"
              value={newProject.endDate}
              onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
            />

            <label>Manager</label>
            <input
              value={newProject.manager}
              onChange={(e) => setNewProject({ ...newProject, manager: e.target.value })}
            />

            <label>Budget</label>
            <input
              type="number"
              value={newProject.budget}
              onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })}
            />

            {/*  Upload PDF only here */}
            <label>Upload Project PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setNewProject({ ...newProject, pdf: e.target.files[0] })}
            />
            {newProject.pdf && <p className="file-name">📎 {newProject.pdf.name}</p>}

            <div className="modal-actions">
              <button onClick={handleCreateProject}>Save</button>
              <button className="cancel" onClick={() => setShowCreateModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}