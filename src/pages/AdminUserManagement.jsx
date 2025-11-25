import React, { useState } from "react";

export default function AdminUserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "Sangay", role: "Admin", status: "Active" }
  ]);
  const [edit, setEdit] = useState(null);

  const roles = ["Admin", "Manager", "Finance", "Developer"];
  const statuses = ["Active", "Inactive"];

  return (
    <div className="section">
      <div className="section-header">
        <h2>User Management</h2>
        <button
          onClick={() =>
            setUsers([
              ...users,
              { id: Date.now(), name: "New User", role: "Staff", status: "Inactive" }
            ])
          }
        >
          + Add User
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              {edit === u.id ? (
                <>
                  <td>
                    <input
                      value={u.name}
                      onChange={e =>
                        setUsers(x => x.map(a => (a.id === u.id ? { ...a, name: e.target.value } : a)))
                      }
                    />
                  </td>

                  <td>
                    <select
                      value={u.role}
                      onChange={e =>
                        setUsers(x => x.map(a => (a.id === u.id ? { ...a, role: e.target.value } : a)))
                      }
                    >
                      {roles.map((role, idx) => (
                        <option key={idx} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td>
                    <select
                      value={u.status}
                      onChange={e =>
                        setUsers(x => x.map(a => (a.id === u.id ? { ...a, status: e.target.value } : a)))
                      }
                    >
                      {statuses.map((status, idx) => (
                        <option key={idx} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td>
                    <button onClick={() => setEdit(null)}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{u.name}</td>
                  <td>{u.role}</td>
                  <td>{u.status}</td>
                  <td>
                    <button onClick={() => setEdit(u.id)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
