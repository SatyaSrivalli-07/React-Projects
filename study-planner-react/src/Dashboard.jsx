import {
  useReducer,
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback
} from "react";

import {
  subjectReducer
} from "./subjectReducer";

function Dashboard({ setPage }) {
  const [input, setInput] =
    useState("");

  const inputRef = useRef();

  const [subjects, dispatch] =
    useReducer(
      subjectReducer,
      []
    );

  useEffect(() => {
    const data =
      JSON.parse(
        localStorage.getItem(
          "subjects"
        )
      ) || [];

    dispatch({
      type: "LOAD",
      payload: data
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "subjects",
      JSON.stringify(subjects)
    );
  }, [subjects]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addSubject =
    useCallback(() => {
      if (!input.trim()) return;

      dispatch({
        type: "ADD",
        payload: input
      });

      setInput("");
      inputRef.current.focus();
    }, [input]);

  const deleteSubject =
    useCallback(id => {
      dispatch({
        type: "DELETE",
        payload: id
      });
    }, []);

  const completeSubject =
    useCallback(id => {
      dispatch({
        type: "COMPLETE",
        payload: id
      });
    }, []);

  const stats = useMemo(() => {
    const total =
      subjects.length;

    const completed =
      subjects.filter(
        s => s.completed
      ).length;

    const pending =
      total - completed;

    return {
      total,
      completed,
      pending
    };
  }, [subjects]);

  return (
    <div>
      <h2>
        Study Planner Dashboard
      </h2>

      <button
        onClick={() =>
          setPage("profile")
        }
      >
        Profile
      </button>

      <br />
      <br />

      <input
        ref={inputRef}
        value={input}
        placeholder="Enter Subject"
        onChange={e =>
          setInput(e.target.value)
        }
      />

      <button onClick={addSubject}>
        Add
      </button>

      <h3>Statistics</h3>

      <p>
        Total :
        {stats.total}
      </p>

      <p>
        Completed :
        {stats.completed}
      </p>

      <p>
        Pending :
        {stats.pending}
      </p>

      <ul>
        {subjects.map(subject => (
          <li
            key={subject.id}
          >
            <span
              style={{
                textDecoration:
                  subject.completed
                    ? "line-through"
                    : "none"
              }}
            >
              {subject.name}
            </span>

            <button
              onClick={() =>
                completeSubject(
                  subject.id
                )
              }
            >
              Complete
            </button>

            <button
              onClick={() =>
                deleteSubject(
                  subject.id
                )
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;