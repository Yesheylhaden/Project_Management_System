import React, { useState, useEffect } from "react";

export default function ManagerAllProjects() {
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);   // only store ID for progress editing

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

  const handleProgressChange = (id, value) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, progress: value } : p
    ));
  };

  return (
    <div className="section page-container">
      <div className="section-header">
        <h2>All Projects</h2>
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
              <td>{p.name}</td>
              <td>{p.status}</td>

              {/* PROGRESS is the ONLY editable field */}
              <td>
                {editingId === p.id ? (
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={p.progress}
                    onChange={(e) => handleProgressChange(p.id, e.target.value)}
                  />
                ) : (
                  p.progress + "%"
                )}
              </td>

              <td>{p.invoice}</td>
              <td>{p.startDate}</td>
              <td>{p.endDate}</td>
              <td>{p.deadline}</td>
              <td>{p.priority}</td>

              <td>
                {editingId === p.id ? (
                  <button onClick={() => setEditingId(null)}>Done</button>
                ) : (
                  <button onClick={() => setEditingId(p.id)}>Edit Progress</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
