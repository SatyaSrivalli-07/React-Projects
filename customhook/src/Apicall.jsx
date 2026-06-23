import { useState, useEffect } from "react";

function useItems(data, batchSize, pageName) {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addItems = () => {
    const nextItems = data.slice(
      currentIndex,
      currentIndex + batchSize
    );

    setItems((prev) => [...prev, ...nextItems]);

    setCurrentIndex(
      (prev) => prev + batchSize
    );
  };

  useEffect(() => {
    if (items.length > 0) {
      fetch(
        "https://jsonplaceholder.typicode.com/users"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(
            `${pageName} API Called`,
            data
          );
        })
        .catch((err) =>
          console.log(err)
        );
    }
  }, [items.length, pageName]);

  return { items, addItems };
}

export default useItems;