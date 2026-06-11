/* import Header from './component/header';
 import Section from './component/section';
// import Footer from './component/footer';
 function App(){
   return(
     <div>

       <Section/>

     </div>
   );
 }
 export default App;*/
 import  { useState } from "react";
 function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000"
      }}
    >
      <h1>Student Profile</h1>

      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Age:</label>
        <br />
        <input
          type="number"
          value={age}
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <br />

      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <hr />

      <h2>Profile Details</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Age:</strong> {age}
      </p>

      <p>
        <strong>Theme:</strong> {darkMode ? "Dark" : "Light"}
      </p>
    </div>
  );
}

export default App;

 

