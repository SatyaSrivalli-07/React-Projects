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

 //using react hook
 /*import  { useState } from "react";
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

export default App;*/

/*Component Hierarchy
App
↓
Navbar
↓
Profile
↓
UserInfo
Suppose only UserInfo needs the user name "John".

App.jsx
import Navbar from "./Navbar";

function App() {
 const user = "John";

 return (
   <div>
     <Navbar user={user} />
   </div>
 );
}

export default App;

Navbar.jsx
import Profile from "./Profile";

function Navbar({ user }) {
 return (
   <div>
     <Profile user={user} />
   </div>
 );
}

export default Navbar;

Profile.jsx
import UserInfo from "./UserInfo";

function Profile({ user }) {
 return (
   <div>
     <UserInfo user={user} />
   </div>
 );
}

export default Profile;

UserInfo.jsx
function UserInfo({ user }) {
 return (
   <h1>Welcome {user}</h1>
 );
}

export default UserInfo;

Flow of Props
App
 ↓ user="John"
Navbar
 ↓ user="John"
Profile
 ↓ user="John"
UserInfo
Output:
Welcome John



useContext

Three Steps
Step 1: Create Context
import { createContext } from "react";

const UserContext = createContext();
Create a shared box.

Step 2: Provide Data
<UserContext.Provider value="John">
 <Navbar />
</UserContext.Provider>
Put "John" inside the box.

Step 3: Consume Data
Inside any child:
const user = useContext(UserContext);
/*Read data from the box.



Complete Example
App.jsx*/
/*import React, { createContext } from "react";
import Profile from "./Profile";

export const UserContext = createContext();

function App() {
 return (
   <UserContext.Provider value="John">
     <Profile />
   </UserContext.Provider>
 );
}

export default App;

//Profile.jsx
import UserInfo from "./UserInfo";

function Profile() {
 return <UserInfo />;
}

export default Profile;

UserInfo.jsx
import React, { useContext } from "react";
import { UserContext } from "./App";

function UserInfo() {
 const user = useContext(UserContext);

 return <h1>Welcome {user}</h1>;
}

export default UserInfo;*/
//Output:
//Welcome John

 

