import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand nav-item mx-4" href="#">
          Brand
        </a>
        <ul className="navbar-nav me-auto">
          <li style={{ listStyle: "none" }} className="nav-item mx-4">
            <Link style={{ textDecoration: "none" }} className="nav-link">
              BOOKINGS
            </Link>
          </li>
          <li style={{ listStyle: "none" }} className="nav-item mx-4">
            <Link style={{ textDecoration: "none" }} className="nav-link">
              CALENDAR
            </Link>
          </li>
          <li style={{ listStyle: "none" }} className="nav-item mx-4">
            <Link style={{ textDecoration: "none" }} className="nav-link">
              SEATING
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
