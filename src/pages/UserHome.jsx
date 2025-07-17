// src/pages/UserHome.jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import VendorMenuCard from "../components/VendorMenuCard";
import CartModal from "../components/CartModal";
import CartContext from "../context/CartContext";
import "./UserHome.css";

const UserHome = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart } = useContext(CartContext);

  const fetchVendors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/vendors");
      setVendors(res.data);
    } catch (err) {
      console.error("Failed to fetch vendors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <div className="user-home">
      <h1 className="user-home-title">Browse Meals on SmartFood</h1>

      {loading ? (
        <p>Loading menus...</p>
      ) : (
        <div className="vendor-list">
          {vendors.map((vendor) => (
            <VendorMenuCard key={vendor._id} vendor={vendor} />
          ))}
        </div>
      )}

      {cart.length > 0 && <CartModal />}
    </div>
  );
};

export default UserHome;
