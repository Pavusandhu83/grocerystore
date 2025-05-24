
import React, { useState, useEffect } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const saveUsersToStorage = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleShowForm = (user = null) => {
    setCurrentUser(user);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setCurrentUser(null);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    saveUsersToStorage(updatedUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = {
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
    };

    if (currentUser) {
      const updatedUsers = users.map((u) => (u === currentUser ? newUser : u));
      saveUsersToStorage(updatedUsers);
    } else {
      saveUsersToStorage([...users, newUser]);
    }
    handleCloseForm();
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Manage Users</h2>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => handleShowForm()}>Add User</button>
      </div>
      
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleShowForm(user)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{currentUser ? "Edit User" : "Add User"}</h5>
                <button className="btn-close" onClick={handleCloseForm}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" defaultValue={currentUser?.name || ""} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" defaultValue={currentUser?.email || ""} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select name="role" className="form-control" defaultValue={currentUser?.role || "User"}>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseForm}>Cancel</button>
                  <button type="submit" className="btn btn-success">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
