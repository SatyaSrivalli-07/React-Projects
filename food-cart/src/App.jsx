import { useState,useEffect,useCallback } from "react";
import { RestaurantContext } from "./RestaurantContext";
import Header from "./components/Header";
import Cart from "./components/Cart.jsx";
import "./App.css";

function App() {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  const restaurantName = "Foodie Express";
  const status = "Delivering in 30 mins";



useEffect(() => {
  const loadMenu = () => {
    return [
      { id: 1, name: "Pizza", price: 299 },
      { id: 2, name: "Burger", price: 149 },
      { id: 3, name: "Pasta", price: 199 },
    ];
  };

  const data = loadMenu();
  setMenu(data);
}, []);
 

  const addFood = useCallback(() => {
    if (!foodName || !price) return;

    const newFood = {
      id: Date.now(),
      name: foodName,
      price: Number(price)
    };

    setMenu((prev) => [...prev, newFood]);

    setFoodName("");
    setPrice("");
  }, [foodName, price]);

  const addToCart = useCallback((item) => {
    setCart((prev) => [...prev, item]);
  }, []);

  const removeFromCart = useCallback((index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <RestaurantContext.Provider
      value={{ restaurantName, status }}
    >
      <div className="container">
        <Header />

        <div className="form-section">
          <h2>Add Food Item</h2>

          <input
            type="text"
            placeholder="Food Name"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button onClick={addFood}>
            Add Food
          </button>
        </div>

        <div className="menu-section">
          <h2>Menu</h2>

          {menu.map((item) => (
            <div className="card" key={item.id}>
              <p>{item.name}</p>
              <p>₹{item.price}</p>

              <button
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>

        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
        />
      </div>
    </RestaurantContext.Provider>
  );
}

export default App;