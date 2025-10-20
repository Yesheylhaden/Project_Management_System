import React, { useEffect, useState } from 'react';
import './ManagerDashboard.css';

export default function ManagerDashboard() {
  const [projects, setProjects] = useState([]);
  const [assignedProjects, setAssignedProjects] = useState([]);

  useEffect(() => {
    // Sample data (replace with backend fetch later)
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
        pdf: null,
      },
    ]);

    setAssignedProjects([
      {
        id: 1,
        topic: 'Build Dashboard UI',
        developer: 'Tashi Dorji',
        startDate: '2025-10-10',
        endDate: '2025-10-25',
        file: null,
      },
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
      pdf: null,
    };
    setProjects([newProject, ...projects]);
  };

  // === Handle PDF Upload for Projects ===
  const handlePDFUpload = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setProjects(projects.map(p => (p.id === id ? { ...p, pdf: { name: file.name, url: fileURL } } : p)));
    }
  };

  // === Assign Project Functions ===
  const handleAddAssignedProject = () => {
    const newAssignment = {
      id: Date.now(),
      topic: '',
      developer: '',
      startDate: '',
      endDate: '',
      file: null,
    };
    setAssignedProjects([newAssignment, ...assignedProjects]);
  };

  const handleAssignedChange = (id, field, value) => {
    setAssignedProjects(assignedProjects.map(a => (a.id === id ? { ...a, [field]: value } : a)));
  };

  const handleFileUpload = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setAssignedProjects(
        assignedProjects.map(a =>
          a.id === id ? { ...a, file: { name: file.name, url: fileURL } } : a
        )
      );
    }
  };

  return (
    <div className="dashboard-container">
      {/* === Header === */}
      <header className="header">
        <img src="/logo.png" alt="Thimphu TechPark Logo" className="logo" />
        <div className="logo">
          <div className="tagline">
            <h4>Thimphu TechPark</h4>
            <h4>BHUTAN'S FIRST IT PARK</h4>
          </div>
        </div>
        <div className="profile">A</div>
      </header>

      {/* === Intro === */}
      <div className="intro-card">
        <h1>✨ Manager Dashboard</h1>
        <p>Track, manage, and assign projects efficiently</p>
      </div>

      {/* === Stats Row === */}
      <div className="stats-row">
        <div className="stat-box blue">
          <h3>TO DO LIST</h3>
          <h1>{projects.filter(p => p.status === 'To Do').length}</h1>
          <p>Projects waiting to start</p>
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

      {/* === Project Table === */}
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
              <th>Deadline</th>
              <th>Priority</th>
              <th>Upload File</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p => (
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
                <td>
                  <label className="upload-btn">
                    Upload
                    <input type="file" accept=".pdf,.doc,.docx,.zip" style={{ display: 'none' }} onChange={(e) => handlePDFUpload(e, p.id)} />
                  </label>
                  {p.pdf && <a href={p.pdf.url} target="_blank" rel="noreferrer" className="pdf-link">📄 {p.pdf.name}</a>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* === Assign Project Section === */}
      <div className="section">
        <div className="section-header">
          <h2>Assign Project to Developer</h2>
          <button onClick={handleAddAssignedProject}>+ Assign New Project</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Project Topic</th>
              <th>Developer Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Upload File</th>
            </tr>
          </thead>
          <tbody>
            {assignedProjects.map(a => (
              <tr key={a.id}>
                <td><input value={a.topic} onChange={(e) => handleAssignedChange(a.id, 'topic', e.target.value)} placeholder="Enter project topic" /></td>
                <td><input value={a.developer} onChange={(e) => handleAssignedChange(a.id, 'developer', e.target.value)} placeholder="Developer name" /></td>
                <td><input type="date" value={a.startDate} onChange={(e) => handleAssignedChange(a.id, 'startDate', e.target.value)} /></td>
                <td><input type="date" value={a.endDate} onChange={(e) => handleAssignedChange(a.id, 'endDate', e.target.value)} /></td>
                <td>
                  <label className="upload-btn">
                    Upload
                    <input type="file" accept=".pdf,.doc,.docx,.zip" style={{ display: 'none' }} onChange={(e) => handleFileUpload(e, a.id)} />
                  </label>
                  {a.file && <a href={a.file.url} target="_blank" rel="noreferrer" className="pdf-link">📄 {a.file.name}</a>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
