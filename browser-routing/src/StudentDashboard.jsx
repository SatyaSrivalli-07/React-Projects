function StudentDashboard({ user }) {
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        Welcome, {user.username}
      </div>

      <h1>Student Dashboard</h1>
    </div>
  );
}

export default StudentDashboard;