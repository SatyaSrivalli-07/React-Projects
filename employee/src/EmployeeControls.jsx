import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

function EmployeeControls() {
  const { employee, setEmployee } =
    useContext(EmployeeContext);

  const toggleStatus = () => {
    setEmployee({
      ...employee,
      status:
        employee.status === "Active"
          ? "Inactive"
          : "Active",
    });
  };

  return (
    <div>
      <h2>Employee Controls</h2>

      <input
        type="text"
        placeholder="Name"
        value={employee.name}
        onChange={(e) =>
          setEmployee({
            ...employee,
            name: e.target.value,
          })
        }
      />

      <br />

      <input
        type="text"
        placeholder="Department"
        value={employee.department}
        onChange={(e) =>
          setEmployee({
            ...employee,
            department: e.target.value,
          })
        }
      />

      <br />

      <button onClick={toggleStatus}>
        Change Status
      </button>
    </div>
  );
}

export default EmployeeControls;
//Enter Name
//Enter Department
//Change Status