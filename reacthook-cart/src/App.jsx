import  { useState, useMemo, useCallback } from "react";
import "./App.css";

function App() {
  // Product Input States
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Products List
  const [products, setProducts] = useState([]);

  // Cart Items
  const [cart, setCart] = useState([]);

  // Add Product to Product List
  const addProduct = useCallback(() => {
    if (!name || !price) {
      alert("Please enter product name and price");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);

    setName("");
    setPrice("");
  }, [name, price]);

  // Add Product to Cart
  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  // Remove Product from Cart
  const removeFromCart = useCallback((id) => {
    setCart((prevCart) =>
      prevCart.filter((item, index) => index !== id)
    );
  }, []);

  // Calculate Total Price
  const totalPrice = useMemo(() => {
    console.log("Calculating Total...");
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  return (
    <div className="container">
      <h1>Shopping Cart Application</h1>

      {/* Product Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={addProduct}>
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div className="section">
        <h2>Product List</h2>

        {products.length === 0 ? (
          <p>No Products Available</p>
        ) : (
          products.map((product) => (
            <div className="card" key={product.id}>
              <span>
                {product.name} - ₹{product.price}
              </span>

              <button
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* Cart */}
      <div className="section">
        <h2>Cart Items</h2>

        {cart.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          cart.map((item, index) => (
            <div className="card" key={index}>
              <span>
                {item.name} - ₹{item.price}
              </span>

              <button
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Total */}
      <h2>Total Cart Value: ₹{totalPrice}</h2>
    </div>
  );
}

export default App;