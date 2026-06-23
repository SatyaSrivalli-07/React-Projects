import { useState, useContext } from "react";
import { UserContext } from "./UserContext";



function Login({ setPage }) {
  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const { setUser } =
    useContext(UserContext);

  const handleLogin = () => {
    if (
      username === "admin" &&
      password === "1234"
    ) {
      setUser({
        username
      });

      setPage("dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={e =>
          setUsername(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e =>
          setPassword(e.target.value)
        }
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;