import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

function EmployeeStatus() {
  const { employee } = useContext(EmployeeContext);

  return (
    <div>
      <h2>Employee Status</h2>

      <p>Status: {employee.status}</p>
    </div>
  );
}

export default EmployeeStatus;
//Only display status.