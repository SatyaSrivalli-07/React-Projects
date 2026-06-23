import { useState } from "react";
import TablePage from "./Table";
import CardsPage from "./Card";

function App() {
  const [page, setPage] =
    useState("table");

  return (
    <div style={{ padding: "20px" }}>
      <h1>
        Custom Hook + useState +
        useEffect Demo
      </h1>

      <button
        onClick={() => setPage("table")}
      >
        Table Page
      </button>

      <button
        onClick={() => setPage("cards")}
        style={{ marginLeft: "10px" }}
      >
        Cards Page
      </button>

      <hr />

      {page === "table" ? (
        <TablePage />
      ) : (
        <CardsPage />
      )}
    </div>
  );
}

export default App;