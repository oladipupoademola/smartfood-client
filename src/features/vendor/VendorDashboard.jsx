import React from "react";
import { useNavigate } from "react-router-dom";
import "./VendorDashboard.css";

const VendorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="vendor-dashboard">
      <h1 className="dashboard-title">Vendor Dashboard</h1>

      <div className="dashboard-grid">
        <div
          className="dashboard-card"
          onClick={() => navigate("/vendor/menu")}
        >
          <h2 className="card-title">Manage Menu</h2>
          <p className="card-text">Add, edit or remove food items.</p>
        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/vendor/orders")}
        >
          <h2 className="card-title">Orders</h2>
          <p className="card-text">View and manage orders from customers.</p>
        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/vendor/analytics")}
        >
          <h2 className="card-title">Analytics</h2>
          <p className="card-text">Track sales, revenue, and performance.</p>
        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/")}
        >
          <h2 className="card-title">Go to Homepage</h2>
          <p className="card-text">Back to SmartFood homepage.</p>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
