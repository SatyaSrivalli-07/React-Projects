import { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";

function Header() {
  const { restaurantName, status } =
    useContext(RestaurantContext);

  return (
    <div className="header">
      <h1>{restaurantName}</h1>
      <p>{status}</p>
    </div>
  );
}

export default Header;