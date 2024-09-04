import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg text-light bg-dark mb-3 shadow">
    <Link to="/" className="navbar-brand">
      <h1>Contact List with React & Fetch</h1>
    </Link>
    <div className="ml-auto">
      <Link to="/new-contact">
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faPlus} className="me-2 shadow" />
          Add New Contact
        </button>
      </Link>
    </div>
  </nav>
);
