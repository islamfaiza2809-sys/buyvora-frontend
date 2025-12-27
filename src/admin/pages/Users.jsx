import { useEffect, useState } from "react";
import api from "../../api/api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/auth/users")
       .then(res => setUsers(res.data))
       .catch(err => console.error(err));
  }, []);

  return (
    <>
      <div className="admin-header">
        <h1>Users</h1>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
