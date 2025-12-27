function Dashboard() {
  return (
    <>
      <div className="admin-header">
        <h1>Dashboard</h1>
        <div className="admin-user">Admin</div>
      </div>

      <div className="admin-cards">
        <div className="admin-card">
          <h4>Total Products</h4>
          <p>120</p>
        </div>

        <div className="admin-card">
          <h4>Total Orders</h4>
          <p>45</p>
        </div>

        <div className="admin-card">
          <h4>Total Users</h4>
          <p>32</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
