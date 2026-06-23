import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import StudentDashboard from "./StudentDashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setUser={setUser} />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user} role="admin">
              <AdminDashboard user={user} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student"
          element={
            <ProtectedRoute user={user} role="student">
              <StudentDashboard user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;