import React, { useEffect, useState } from "react";
import axios from "../api/axios";

export const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState([]);
  const [editFormData, setEditFormData] = useState({
    username: "",
    email: "",
    address: "",
    phonenumber: "",
  });
  useEffect(() => {
    axios
      .get("/api/auth/all") // adjust endpoint if needed
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.patch(`/api/auth/${editingUser}`, editFormData);
      alert("User updated successfully");
      setEditingUser(null); // close edit mode
      // refresh users list
      const res = await axios.get("/api/auth/all");
      setUsers(res.data);
    } catch (error) {
      alert("Failed to update user");
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user._id); // store user id
    setEditFormData({ ...user }); // pre-fill form with current values
  };
  const handleEditChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("/api/auth/all")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Failed to fetch users:", err));
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`/api/auth/delete/${id}`);
        alert("User deleted successfully");
        fetchUsers(); // Refresh list
      } catch (err) {
        console.error("Delete failed:", err);
        alert("Failed to delete user");
      }
    }
  };

  return (
    <div className="max-w-m mx-auto mt-16 p-3 bg-white rounded-xl shadow-md">
      <div className=" mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {users.map((user) => (
            <div
              key={user._id}
              className="max-w-sm mx-auto p-3 bg-white rounded-xl shadow-md"
            >
              {editingUser === user._id ? (
                <div className="space-y-2">
                  <input
                    name="username"
                    value={editFormData.username}
                    onChange={handleEditChange}
                    className="border p-1 w-full"
                  />
                  <input
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditChange}
                    className="border p-1 w-full"
                  />
                  <input
                    name="address"
                    value={editFormData.address}
                    onChange={handleEditChange}
                    className="border p-1 w-full"
                  />
                  <input
                    name="phonenumber"
                    value={editFormData.phonenumber}
                    onChange={handleEditChange}
                    className="border p-1 w-full"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={handleUpdate}
                      className="bg-green-200 rounded px-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingUser(null)}
                      className="bg-gray-200 rounded px-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <h2 className="text-lg font-bold bg-green-100">
                    {user.username}
                  </h2>
                  <p>{user.address}</p>
                  <p>{user.email}</p>
                  <p>{user.phonenumber}</p>
                  <button
                    onClick={() => handleEditClick(user)}
                    className="w-20 text-black bg-blue-100 rounded-xl hover:bg-blue-500 text-sm py-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="w-20 text-black bg-red-100 rounded-xl hover:bg-red-500 text-sm py-1"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
