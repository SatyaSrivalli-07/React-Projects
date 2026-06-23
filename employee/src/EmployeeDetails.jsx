import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

function EmployeeDetails() {
  const { employee } = useContext(EmployeeContext);

  return (
    <div>
      <h2>Employee Details</h2>

      <p>Name: {employee.name}</p>
      <p>Department: {employee.department}</p>
    </div>
  );
}

export default EmployeeDetails;
//Only display details.