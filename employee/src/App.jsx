import EmployeeProvider from "./EmployeeProvider";
import EmployeeControls from "./EmployeeControls";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeStatus from "./EmployeeStatus";

function App() {
  return (
    <EmployeeProvider>
      <h1>Employee Dashboard</h1>

      <EmployeeControls />
      <EmployeeDetails />
      <EmployeeStatus />
    </EmployeeProvider>
  );
}

export default App;
//Wrap all components with Provider.