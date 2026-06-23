function AdminDashboard({ user }) {
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        Welcome, {user.username}
      </div>

      <h1>Admin Dashboard</h1>
    </div>
  );
}

export default AdminDashboard;