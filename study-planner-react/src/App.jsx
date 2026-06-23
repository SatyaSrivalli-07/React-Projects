import { useState } from "react";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import "./App.css";

function App() {
  const [page, setPage] =
    useState("login");

  return (
    <>
      {page === "login" && (
        <Login
          setPage={setPage}
        />
      )}

      {page ===
        "dashboard" && (
        <Dashboard
          setPage={setPage}
        />
      )}

      {page ===
        "profile" && (
        <Profile
          setPage={setPage}
        />
      )}
    </>
  );
}

export default App;