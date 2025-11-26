import React, { useState, useEffect } from "react";


export default function ManagerAllProjects() {
  const [projects, setProjects] = useState([]);
  const [editing, setEditing] = useState({ type: "", id: null });

  useEffect(() => {
    setProjects([
      {
        id: 1,
        name: "Website Redesign",
        status: "In Progress",
        progress: 45,
        invoice: 20,
        startDate: "2025-09-01",
        endDate: "2025-10-15",
        deadline: "2025-10-20",
        priority: "High",
      },
    ]);
  }, []);

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      name: "New Project",
      status: "To Do",
      progress: 0,
      invoice: 0,
      startDate: "",
      endDate: "",
      deadline: "",
      priority: "Medium",
    };
    setProjects([newProject, ...projects]);
  };

  const handleProjectChange = (id, field, value) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const handleSaveEdit = () => setEditing({ type: "", id: null });
  const handleCancelEdit = () => setEditing({ type: "", id: null });

  return (
    <div className="section page-container">
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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p) => (
            <tr key={p.id}>
              {editing.id === p.id ? (
                <>
                  <td><input value={p.name} onChange={(e) => handleProjectChange(p.id, "name", e.target.value)} /></td>
                  <td><input value={p.status} onChange={(e) => handleProjectChange(p.id, "status", e.target.value)} /></td>
                  <td><input type="number" value={p.progress} onChange={(e) => handleProjectChange(p.id, "progress", e.target.value)} /></td>
                  <td><input type="number" value={p.invoice} onChange={(e) => handleProjectChange(p.id, "invoice", e.target.value)} /></td>
                  <td><input type="date" value={p.startDate} onChange={(e) => handleProjectChange(p.id, "startDate", e.target.value)} /></td>
                  <td><input type="date" value={p.endDate} onChange={(e) => handleProjectChange(p.id, "endDate", e.target.value)} /></td>
                  <td><input type="date" value={p.deadline} onChange={(e) => handleProjectChange(p.id, "deadline", e.target.value)} /></td>
                  <td>
                    <select value={p.priority} onChange={(e) => handleProjectChange(p.id, "priority", e.target.value)}>
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
                  <td><button onClick={() => setEditing({ type: "project", id: p.id })}>Edit</button></td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
