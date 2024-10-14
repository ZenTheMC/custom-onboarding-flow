"use client";
import { useEffect, useState } from "react";

const DataTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Email</th>
            <th>About Me</th>
            <th>Address</th>
            <th>Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.aboutMe}</td>
              <td>
                {user.address
                  ? `${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zip}`
                  : ""}
              </td>
              <td>{user.birthdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
