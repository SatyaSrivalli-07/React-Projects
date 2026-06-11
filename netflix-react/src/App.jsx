/*import { useState } from "react";

function App() {
  const [plan, setPlan] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");

  const upgradePlan = () => {
    if (plan === "") {
      setPlan("Basic");
      setPrice("₹199/month");
      setStatus("Active")
    } else if (plan === "Basic") {
      setPlan("Standard");
      setPrice("₹499/month");
      setStatus("Active")
    } else if (plan === "Standard") {
      setPlan("Premium");
      setPrice("₹649/month");
      setStatus("Active")
    }else{
      alert("You already have the premium plan");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Netflix Subscription Dashboard</h1>

      <p>
        <strong>Plan:</strong> {plan}
      </p>

      <p>
        <strong>Price:</strong> {price}
      </p>

      <p>
        <strong>Status:</strong> {status}
      </p>

      <button onClick={upgradePlan}>
        Upgrade Plan
      </button>

      <br /><br />

      <button onClick={() => setStatus("Paused")}>
        Pause Subscription
      </button>

      <br /><br />

      <button onClick={() => setStatus("Active")}>
        Resume Subscription
      </button>

      <hr />

      {status === "Paused" ? (
        <p> Subscription Paused</p>
      ) : status === "Active" ? (
        <p>Enjoy your shows!</p>
      ):null}

      {plan === "Premium" &&(
        <p> Ultra HD Enabled</p>
      )}
    </div>
  );
}

export default App;*/


import { useState, useEffect } from "react";

function App() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    document.title = `Visits: ${visits}`;
  }, [visits]);

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh"
      }}
    >
      <h1>Profile Visit Counter</h1>

      <p>
        <strong>Profile Visits:</strong> {visits}
      </p>

      <button onClick={() => setVisits(visits + 1)}>
        Visit Profile
      </button>

      <hr />

      {visits >= 5 && (
        <h2>⭐ Popular Profile</h2>
      )}
    </div>
  );
}

export default App;