import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => (
  <nav className="d-flex justify-content-evenly navbar navbar-expand-lg text-light bg-dark mb-3">
    <Link to="/" className="navbar-brand">
      <button type="button" className="btn bg-dark text-light">
        <h1>Contact List with React & Fetch</h1>
      </button>
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
