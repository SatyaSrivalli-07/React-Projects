import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      setUser({
        username: "admin",
        role: "admin",
      });

      navigate("/admin");
    } else if (
      username === "student" &&
      password === "student123"
    ) {
      setUser({
        username: "student",
        role: "student",
      });

      navigate("/student");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;