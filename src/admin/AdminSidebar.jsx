import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();                         // clears user from context
    localStorage.removeItem("token"); // clears JWT
    navigate("/login");               // redirect to login
  };

  return (
    <aside className="admin-sidebar">
      <h3>Admin Panel</h3>

      <nav>
        <NavLink to="/admin" end>
          Dashboard
        </NavLink>

        <NavLink to="/admin/categories">
          Categories
        </NavLink>

        <NavLink to="/admin/products">
          Products
        </NavLink>

        <NavLink to="/admin/orders">
          Orders
        </NavLink>

        <NavLink to="/admin/users">
          Users
        </NavLink>
      </nav>

      {/* LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        className="admin-btn delete"
        style={{ marginTop: "20px", width: "100%" }}
      >
        Logout
      </button>
    </aside>
  );
}

export default AdminSidebar;
