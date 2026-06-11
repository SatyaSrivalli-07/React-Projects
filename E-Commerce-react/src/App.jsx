import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from JSON
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  // Add Product
  const addToCart = (id) => {
    const product = products.find((item) => item.id === id);

    if (product) {
      setCart([...cart, product]);
    }
  };

  // Remove Product
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

    setCart(updatedCart);
  };

  // Array Destructuring
  const [featuredItem, ...otherItems] = cart;

  // Total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>E-Commerce Products</h1>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              width="150"
            />

            <h2>{product.name}</h2>

            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product.id)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <h2>Cart Items</h2>

      {featuredItem && (
        <>
          <h3>Featured Product</h3>

          <div className="featured-card">
            <img
              src={featuredItem.image}
              alt={featuredItem.name}
              width="150"
            />

            <h2>{featuredItem.name}</h2>

            <p>₹{featuredItem.price}</p>

            <button onClick={() => removeFromCart(0)}>
              Remove
            </button>
          </div>
        </>
      )}

      <div className="products">
        {otherItems.map((item, index) => (
          <div className="card" key={index}>
            <img
              src={item.image}
              alt={item.name}
              width="150"
            />

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button onClick={() => removeFromCart(index + 1)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default App;