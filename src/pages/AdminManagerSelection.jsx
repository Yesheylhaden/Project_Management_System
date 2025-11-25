import React, { useState } from "react";

export default function AdminManagerSelection() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "ERP Implementation",
      status: "Pending",
      managers: ["Tashi"],
      budget: 50000,
      progress: 0 // initial progress
    }
  ]);
  const [editing, setEditing] = useState(null);
  const [modal, setModal] = useState(false);
  const [newProj, setNewProj] = useState({
    name: "",
    status: "To Do",
    managers: [""],
    budget: "",
    progress: 0
  });

  const [projectCount, setProjectCount] = useState(1);

  const openModal = () => {
    setNewProj({
      name: `New Project ${projectCount}`,
      status: "To Do",
      managers: [""],
      budget: "",
      progress: 0
    });
    setModal(true);
  };

  const save = () => {
    setData([{ ...newProj, id: Date.now() }, ...data]);
    setProjectCount(prev => prev + 1);
    setModal(false);
  };

  const handleManagerChange = (index, value) => {
    const managersCopy = [...newProj.managers];
    managersCopy[index] = value;
    setNewProj({ ...newProj, managers: managersCopy });
  };

  const addManagerField = () => {
    setNewProj({ ...newProj, managers: [...newProj.managers, ""] });
  };

  return (
    <div className="section">
      <div className="section-header">
        <h2>Project List</h2>
        <button onClick={openModal}>+ Create Project</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Progress</th> {/* NEW COLUMN */}
            <th>Managers</th>
            <th>Budget</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(p => (
            <tr key={p.id}>
              {editing === p.id ? (
                <>
                  <td>
                    <input
                      value={p.name}
                      onChange={e =>
                        setData(d => d.map(x => (x.id === p.id ? { ...x, name: e.target.value } : x)))
                      }
                    />
                  </td>
                  <td>
                    <select
                      value={p.status}
                      onChange={e =>
                        setData(d => d.map(x => (x.id === p.id ? { ...x, status: e.target.value } : x)))
                      }
                    >
                      <option>To Do</option>
                      <option>In Progress</option>
                      <option>Done</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={p.progress}
                      onChange={e =>
                        setData(d =>
                          d.map(x => (x.id === p.id ? { ...x, progress: Number(e.target.value) } : x))
                        )
                      }
                      min={0}
                      max={100}
                    />%
                  </td>
                  <td>
                    {p.managers.map((m, i) => (
                      <input
                        key={i}
                        value={m}
                        onChange={e =>
                          setData(d =>
                            d.map(x =>
                              x.id === p.id
                                ? { ...x, managers: x.managers.map((val, idx) => (idx === i ? e.target.value : val)) }
                                : x
                            )
                          )
                        }
                        style={{ display: "block", marginBottom: "4px" }}
                      />
                    ))}
                  </td>
                  <td>
                    <input
                      type="number"
                      value={p.budget}
                      onChange={e => setData(d => d.map(x => (x.id === p.id ? { ...x, budget: e.target.value } : x)))}
                    />
                  </td>
                  <td>
                    <button onClick={() => setEditing(null)}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{p.name}</td>
                  <td>{p.status}</td>
                  <td>{p.progress}%</td> {/* Display as percentage */}
                  <td>{p.managers.join(", ")}</td>
                  <td>Nu {p.budget}</td>
                  <td>
                    <button onClick={() => setEditing(p.id)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {modal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Create New Project</h3>

            <label>Project Name</label>
            <input value={newProj.name} disabled />

            <label>Status</label>
            <select
              value={newProj.status}
              onChange={e => setNewProj({ ...newProj, status: e.target.value })}
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>

            

            <label>Project Lead</label>
            {newProj.managers.map((m, i) => (
              <input
                key={i}
                placeholder={``}
                value={m}
                onChange={e => handleManagerChange(i, e.target.value)}
                style={{ display: "block", marginBottom: "4px" }}
              />
            ))}
            
          

            <div className="modal-actions">
              <button onClick={save}>Save</button>
              <button className="cancel" onClick={() => setModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
