import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, user, role }) {
  if (!user) {
    return <Navigate to="/" />;
  }

  if (user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;