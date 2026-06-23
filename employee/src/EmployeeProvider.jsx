import { useState, useEffect } from "react";
import { EmployeeContext } from "./EmployeeContext";


function EmployeeProvider({ children }) {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    status: "Active",
  });

  useEffect(() => {
    document.title = `Status: ${employee.status}`;
  }, [employee.status]);

  return (
    <EmployeeContext.Provider value={{ employee, setEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
//employee
//setEmployee
//and shares them with all components