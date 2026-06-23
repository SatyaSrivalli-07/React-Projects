import { useMemo, useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";

function Cart({ cart, removeFromCart }) {
  const { restaurantName } =
    useContext(RestaurantContext);

  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }, [cart]);

  return (
    <div className="cart-section">
      <h2>{restaurantName} Cart</h2>

      {cart.map((item, index) => (
        <div className="card" key={index}>
          <p>{item.name}</p>
          <p>₹{item.price}</p>

          <button
            onClick={() => removeFromCart(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total Amount: ₹{total}</h3>
    </div>
  );
}

export default Cart;