import React, { useState } from "react";

export default function AdminAllProjects() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Website Redesign", status: "In Progress", progress: 45, invoice: 20 }
  ]);
  const [editing, setEditing] = useState(null);

  const update = (id, field, value) => {
    setProjects(p => p.map(x => x.id === id ? { ...x, [field]: value } : x));
  };

  return (
    <div className="section">
      <h2>All Projects</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Status</th><th>Progress</th><th>Invoice</th><th>Action</th></tr>
        </thead>
        <tbody>
          {projects.map(p=>(
            <tr key={p.id}>
              {editing === p.id ? (
                <>
                  <td><input value={p.name} onChange={e=>update(p.id,"name",e.target.value)}/></td>
                  <td><input value={p.status} onChange={e=>update(p.id,"status",e.target.value)}/></td>
                  <td><input type="number" value={p.progress} onChange={e=>update(p.id,"progress",e.target.value)}/></td>
                  <td><input type="number" value={p.invoice} onChange={e=>update(p.id,"invoice",e.target.value)}/></td>
                  <td>
                    <button onClick={()=>setEditing(null)}>Save</button>
                    <button className="cancel" onClick={()=>setEditing(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{p.name}</td><td>{p.status}</td><td>{p.progress}%</td><td>{p.invoice}</td>
                  <td><button onClick={()=>setEditing(p.id)}>Edit</button></td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
