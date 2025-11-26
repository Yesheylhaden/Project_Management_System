import React, { useState } from "react";

export default function AdminProjectList() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "ERP Implementation",
      status: "Pending",
      managers: ["Tashi"],
      budget: 50000,
      startDate: "2025-01-01",
      endDate: "2025-03-01",
      progress: 0,
      pdf: null,
    },
  ]);

  const [editing, setEditing] = useState(null);
  const [modal, setModal] = useState(false);

  const [newProj, setNewProj] = useState({
    name: "",
    status: "To Do",
    managers: [""],
    budget: "",
    startDate: "",
    endDate: "",
    progress: 0,
    pdf: null,
  });

  const openModal = () => {
    setNewProj({
      name: "",
      status: "To Do",
      managers: [""],
      budget: "",
      startDate: "",
      endDate: "",
      progress: 0,
      pdf: null,
    });
    setModal(true);
  };

  const save = () => {
    const normalized = {
      ...newProj,
      id: Date.now(),
      budget: newProj.budget === "" ? "" : Number(newProj.budget),
      progress: Number(newProj.progress || 0),
    };
    setData((d) => [{ ...normalized }, ...d]);
    setModal(false);

    // reset
    setNewProj({
      name: "",
      status: "To Do",
      managers: [""],
      budget: "",
      startDate: "",
      endDate: "",
      progress: 0,
      pdf: null,
    });
  };

  const handleManagerChange = (index, value) => {
    const copy = [...newProj.managers];
    copy[index] = value;
    setNewProj({ ...newProj, managers: copy });
  };

  const addManagerField = () => {
    setNewProj({ ...newProj, managers: [...newProj.managers, ""] });
  };

  const removeManagerField = (index) => {
    setNewProj({
      ...newProj,
      managers: newProj.managers.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="section">
      <div className="section-header">
        <h2>Project List</h2>
        <button onClick={openModal}>+ Create Project</button>
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Managers</th>
            <th>Budget</th>
            <th>Start</th>
            <th>End</th>
            <th>PDF</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((p) => (
            <tr key={p.id}>
              {editing === p.id ? (
                <>
                  {/* NAME */}
                  <td>
                    <input
                      value={p.name}
                      onChange={(e) =>
                        setData((d) =>
                          d.map((x) =>
                            x.id === p.id ? { ...x, name: e.target.value } : x
                          )
                        )
                      }
                    />
                  </td>

                  {/* STATUS */}
                  <td>
                    <select
                      value={p.status}
                      onChange={(e) =>
                        setData((d) =>
                          d.map((x) =>
                            x.id === p.id ? { ...x, status: e.target.value } : x
                          )
                        )
                      }
                    >
                      <option>To Do</option>
                      <option>In Progress</option>
                      <option>Done</option>
                    </select>
                  </td>

                  {/* PROGRESS */}
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={p.progress}
                      onChange={(e) =>
                        setData((d) =>
                          d.map((x) =>
                            x.id === p.id
                              ? { ...x, progress: Number(e.target.value) }
                              : x
                          )
                        )
                      }
                    />
                    %
                  </td>

                  {/* MANAGERS */}
                  <td>
                    {p.managers.map((m, i) => (
                      <input
                        key={i}
                        value={m}
                        onChange={(e) =>
                          setData((d) =>
                            d.map((x) =>
                              x.id === p.id
                                ? {
                                    ...x,
                                    managers: x.managers.map((val, idx) =>
                                      idx === i ? e.target.value : val
                                    ),
                                  }
                                : x
                            )
                          )
                        }
                        style={{ display: "block", marginBottom: 4 }}
                      />
                    ))}
                  </td>

                  {/* BUDGET */}
                  <td>
                    <input
                      type="number"
                      value={p.budget}
                      onChange={(e) =>
                        setData((d) =>
                          d.map((x) =>
                            x.id === p.id
                              ? { ...x, budget: Number(e.target.value) }
                              : x
                          )
                        )
                      }
                    />
                  </td>

                  {/* START DATE */}
                  <td>
                    <input
                      type="date"
                      value={p.startDate}
                      onChange={(e) =>
                        setData((d) =>
                          d.map((x) =>
                            x.id === p.id ? { ...x, startDate: e.target.value } : x
                          )
                        )
                      }
                    />
                  </td>

                  {/* END DATE */}
                  <td>
                    <input
                      type="date"
                      value={p.endDate}
                      onChange={(e) =>
                        setData((d) =>
                          d.map((x) =>
                            x.id === p.id ? { ...x, endDate: e.target.value } : x
                          )
                        )
                      }
                    />
                  </td>

                  {/* PDF filename (editable not supported here) */}
                  <td>{p.pdf ? p.pdf.name : "No File"}</td>

                  <td>
                    <button onClick={() => setEditing(null)}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{p.name}</td>
                  <td>{p.status}</td>
                  <td>{p.progress}%</td>
                  <td>{(p.managers || []).join(", ")}</td>
                  <td>{p.budget === "" ? "-" : `Nu ${p.budget}`}</td>
                  <td>{p.startDate}</td>
                  <td>{p.endDate}</td>
                  <td>{p.pdf ? p.pdf.name : "No File"}</td>
                  <td>
                    <button onClick={() => setEditing(p.id)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* ------------------- MODAL ------------------- */}
      {modal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Create New Project</h3>

            {/* Project Name */}
            <label>Project Name</label>
            <input
              placeholder="Enter project name"
              value={newProj.name}
              onChange={(e) => setNewProj({ ...newProj, name: e.target.value })}
            />

            {/* Status */}
            <label>Status</label>
            <select
              value={newProj.status}
              onChange={(e) => setNewProj({ ...newProj, status: e.target.value })}
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>

            {/* Budget */}
            <label>Budget (Nu)</label>
            <input
              type="number"
              placeholder="Enter budget"
              value={newProj.budget}
              onChange={(e) => setNewProj({ ...newProj, budget: e.target.value })}
            />

            {/* Start Date */}
            <label>Start Date</label>
            <input
              type="date"
              value={newProj.startDate}
              onChange={(e) => setNewProj({ ...newProj, startDate: e.target.value })}
            />

            {/* End Date */}
            <label>End Date</label>
            <input
              type="date"
              value={newProj.endDate}
              onChange={(e) => setNewProj({ ...newProj, endDate: e.target.value })}
            />

            {/* Project Lead(s) */}
            <label>Project Lead(s)</label>
            {newProj.managers.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                <input
                  placeholder="Manager name"
                  value={m}
                  onChange={(e) => handleManagerChange(i, e.target.value)}
                />
                {newProj.managers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeManagerField(i)}
                    aria-label="Remove manager"
                  >
                    −
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addManagerField}>
              + Add Manager
            </button>

            {/* PDF Upload */}
            <label style={{ marginTop: 8 }}>Upload PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setNewProj({ ...newProj, pdf: e.target.files[0] })}
            />

            {newProj.pdf && (
              <p style={{ fontSize: 12, marginTop: 6 }}>Selected: {newProj.pdf.name}</p>
            )}

            <div className="modal-actions" style={{ marginTop: 12 }}>
              <button onClick={save}>Save</button>
              <button className="cancel" onClick={() => setModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
