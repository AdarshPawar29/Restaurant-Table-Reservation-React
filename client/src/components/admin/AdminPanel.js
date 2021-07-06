import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import SmallTable from "./tables/SmallTable";
const AdminPanel = () => {
  return (
    <div className="admin admin_bg_color">
      <Navbar />
      <div>
        <h2>ORDERS</h2>
      </div>
    </div>
  );
};

export default AdminPanel;
