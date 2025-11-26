import React, { useState, useEffect } from "react";

export default function ManagerProjectList() {
  const today = new Date().toISOString().split("T")[0];

  const [selectionProjects, setSelectionProjects] = useState([]);
  const [editing, setEditing] = useState({ type: "", id: null });
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [newProject, setNewProject] = useState({
    name: "New Project",
    status: "To Do",
    startDate: today,
    endDate: today,
    Developer: [""],
    budget: "",
    progress: 0,
    pdf: null,
  });

  useEffect(() => {
    setSelectionProjects([
      {
        id: 1,
        name: "ERP Implementation",
        status: "Pending",
        startDate: "2025-11-01",
        endDate: "2026-01-30",
        Developer: ["Tashi", "Karma"],
        budget: 50000,
        progress: 40,
        pdf: null,
      },
    ]);
  }, []);

  const handleCreateProject = () => {
    const created = { ...newProject, id: Date.now() };
    setSelectionProjects([created, ...selectionProjects]);
    setShowCreateModal(false);

    setNewProject({
      name: "New Project",
      status: "To Do",
      startDate: today,
      endDate: today,
      Developer: [""],
      budget: "",
      progress: 0,
      pdf: null,
    });
  };

  const handleSaveEdit = () => setEditing({ type: "", id: null });
  const handleCancelEdit = () => setEditing({ type: "", id: null });

  return (
    <div className="section page-container">
      <div className="section-header">
        <h2>Project List</h2>
        <button onClick={() => setShowCreateModal(true)}>+ Create Project</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Status</th>
            <th>Start</th>
            <th>End</th>
            <th>Developer(s)</th>
            <th>Budget</th>
            <th>Progress (%)</th>
            <th>PDF</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {selectionProjects.map((proj) => (
            <tr key={proj.id}>
              {editing.id === proj.id ? (
                <>
                  <td>
                    <input
                      value={proj.name}
                      onChange={(e) =>
                        setSelectionProjects(
                          selectionProjects.map((p) =>
                            p.id === proj.id ? { ...p, name: e.target.value } : p
                          )
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      value={proj.status}
                      onChange={(e) =>
                        setSelectionProjects(
                          selectionProjects.map((p) =>
                            p.id === proj.id ? { ...p, status: e.target.value } : p
                          )
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="date"
                      value={proj.startDate}
                      onChange={(e) =>
                        setSelectionProjects(
                          selectionProjects.map((p) =>
                            p.id === proj.id ? { ...p, startDate: e.target.value } : p
                          )
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="date"
                      value={proj.endDate}
                      onChange={(e) =>
                        setSelectionProjects(
                          selectionProjects.map((p) =>
                            p.id === proj.id ? { ...p, endDate: e.target.value } : p
                          )
                        )
                      }
                    />
                  </td>

                  <td>
                    {proj.Developer.map((dev, index) => (
                      <input
                        key={index}
                        value={dev}
                        onChange={(e) =>
                          setSelectionProjects(
                            selectionProjects.map((p) =>
                              p.id === proj.id
                                ? {
                                    ...p,
                                    Developer: p.Developer.map((d, i) =>
                                      i === index ? e.target.value : d
                                    ),
                                  }
                                : p
                            )
                          )
                        }
                      />
                    ))}
                  </td>

                  <td>
                    <input
                      type="number"
                      value={proj.budget}
                      onChange={(e) =>
                        setSelectionProjects(
                          selectionProjects.map((p) =>
                            p.id === proj.id ? { ...p, budget: e.target.value } : p
                          )
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={proj.progress}
                      onChange={(e) =>
                        setSelectionProjects(
                          selectionProjects.map((p) =>
                            p.id === proj.id ? { ...p, progress: e.target.value } : p
                          )
                        )
                      }
                    />
                  </td>

                  <td>{proj.pdf ? "Has File" : "No File"}</td>

                  <td>
                    <button onClick={handleSaveEdit}>Save</button>
                    <button className="cancel" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{proj.name}</td>
                  <td>{proj.status}</td>
                  <td>{proj.startDate}</td>
                  <td>{proj.endDate}</td>
                  <td>{proj.Developer.join(", ")}</td>
                  <td>Nu {proj.budget}</td>
                  <td>{proj.progress}%</td>
                  <td>{proj.pdf ? "View PDF" : "No File"}</td>
                  <td>
                    <button
                      onClick={() =>
                        setEditing({ type: "selection", id: proj.id })
                      }
                    >
                      Edit
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* CREATE NEW PROJECT MODAL */}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Create New Project</h3>

            <label>Name</label>
            <input
              value={newProject.name}
              onChange={(e) =>
                setNewProject({ ...newProject, name: e.target.value })
              }
            />

            <label>Status</label>
            <select
              value={newProject.status}
              onChange={(e) =>
                setNewProject({ ...newProject, status: e.target.value })
              }
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>

            <label>Start Date</label>
            <input
              type="date"
              value={newProject.startDate}
              onChange={(e) =>
                setNewProject({ ...newProject, startDate: e.target.value })
              }
            />

            <label>End Date</label>
            <input
              type="date"
              value={newProject.endDate}
              onChange={(e) =>
                setNewProject({ ...newProject, endDate: e.target.value })
              }
            />

            <label>Budget (Nu)</label>
            <input
              type="number"
              value={newProject.budget}
              onChange={(e) =>
                setNewProject({ ...newProject, budget: e.target.value })
              }
            />

            <label>Developers</label>
            {newProject.Developer.map((dev, index) => (
              <div key={index}>
                <input
                  value={dev}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      Developer: newProject.Developer.map((d, i) =>
                        i === index ? e.target.value : d
                      ),
                    })
                  }
                />
                {index > 0 && (
                  <button
                    onClick={() =>
                      setNewProject({
                        ...newProject,
                        Developer: newProject.Developer.filter(
                          (_, i) => i !== index
                        ),
                      })
                    }
                  >
                    −
                  </button>
                )}
              </div>
            ))}

            <button
              onClick={() =>
                setNewProject({
                  ...newProject,
                  Developer: [...newProject.Developer, ""],
                })
              }
            >
              + Add Developer
            </button>

            <label>Upload PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) =>
                setNewProject({ ...newProject, pdf: e.target.files[0] })
              }
            />

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
