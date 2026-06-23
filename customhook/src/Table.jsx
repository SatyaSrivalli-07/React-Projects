import rowsData from "./rows.json";
import useItems from "./Apicall";

function TablePage() {
  const { items: rows, addItems } =
    useItems(rowsData, 10, "Table");

  return (
    <div>
      <h2>Table Page</h2>

      <button onClick={addItems}>
        Add 10 Rows
      </button>

      <table
        border="1"
        cellPadding="10"
        style={{
          marginTop: "20px",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;