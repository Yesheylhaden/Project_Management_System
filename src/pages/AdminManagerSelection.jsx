import React, { useState } from "react";

export default function AdminManagerSelection() {
  const [data, setData] = useState([{ id:1,name:"ERP Implementation",status:"Pending",manager:"Tashi"}]);
  const [editing, setEditing] = useState(null);
  const [modal, setModal] = useState(false);
  const [newProj, setNewProj] = useState({name:"",status:"To Do",manager:"",budget:""});

  const save =()=>{ setData([ {...newProj,id:Date.now()},...data ]); setModal(false); };

  return (
    <div className="section">
      <div className="section-header">
        <h2>Manager Selection</h2>
        <button onClick={()=>setModal(true)}>+ Create Project</button>
      </div>

      <table>
        <thead><tr><th>Name</th><th>Status</th><th>Manager</th><th>Budget</th><th>Action</th></tr></thead>
        <tbody>
          {data.map(p=>(
            <tr key={p.id}>
              {editing===p.id?(
                <>
                  <td><input value={p.name} onChange={e=>setData(d=>d.map(x=>x.id===p.id?{...x,name:e.target.value}:x))}/></td>
                  <td><input value={p.status} onChange={e=>setData(d=>d.map(x=>x.id===p.id?{...x,status:e.target.value}:x))}/></td>
                  <td><input value={p.manager} onChange={e=>setData(d=>d.map(x=>x.id===p.id?{...x,manager:e.target.value}:x))}/></td>
                  <td><input value={p.budget} onChange={e=>setData(d=>d.map(x=>x.id===p.id?{...x,budget:e.target.value}:x))}/></td>
                  <td><button onClick={()=>setEditing(null)}>Save</button></td>
                </>
              ):(
                <>
                  <td>{p.name}</td><td>{p.status}</td><td>{p.manager}</td><td>Nu {p.budget}</td>
                  <td><button onClick={()=>setEditing(p.id)}>Edit</button></td>
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
            <input placeholder="Project Name" onChange={e=>setNewProj({...newProj,name:e.target.value})}/>
            <input placeholder="Manager" onChange={e=>setNewProj({...newProj,manager:e.target.value})}/>
            <input placeholder="Budget" type="number" onChange={e=>setNewProj({...newProj,budget:e.target.value})}/>
            <div className="modal-actions">
              <button onClick={save}>Save</button>
              <button className="cancel" onClick={()=>setModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
