import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile({ setPage }) {
  const { user } =
    useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>

      <h3>
        Username :
        {user?.username}
      </h3>

      <button
        onClick={() =>
          setPage("dashboard")
        }
      >
        Dashboard
      </button>
    </div>
  );
}

export default Profile;