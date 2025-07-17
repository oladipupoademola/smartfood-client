// src/components/CartModal.jsx
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import axios from "axios";

const CartModal = () => {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = async () => {
    try {
      await axios.post("http://localhost:5000/api/user/orders", {
        items: cart,
        total,
      });
      alert("Order placed!");
      clearCart();
    } catch {
      alert("Failed to place order");
    }
  };

  return (
    <div className="cart-modal">
      <h3>Your Cart</h3>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item.name} - ₦{item.price}</li>
        ))}
      </ul>
      <p>Total: ₦{total}</p>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default CartModal;
