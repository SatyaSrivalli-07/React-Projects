import { useState } from "react";

function AddFood({ addFood }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!name || !price) return;

    addFood({
      id: Date.now(),
      name,
      price: Number(price)
    });

    setName("");
    setPrice("");
  };

  return (
    <>
      <h2>Add Food Item</h2>

      <input
        type="text"
        placeholder="Food Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add Food
      </button>

      <hr />
    </>
  );
}

export default AddFood;