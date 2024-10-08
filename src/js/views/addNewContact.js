import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const AddNewContact = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    if (!contact.name || !contact.email || !contact.phone || !contact.address) {
      alert("All fields are required.");
      return;
    }
    try {
      const newContact = await actions.newContact(contact);
      if (newContact && newContact.id) {
        setSaved(true);
        navigate(`/single/${newContact.id}`);
      } else {
        console.error("The new contact has no ID");
      }
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  if (saved) {
    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">Contact Added</h1>
        <p className="text-center">The new contact has been successfully added.</p>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Back to Contacts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5 shadow">
      <h1 className="text-center mb-4">Add a New Contact</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Enter Name"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter Email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          className="form-control"
          placeholder="Enter Phone"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="form-control"
          placeholder="Enter Address"
          value={contact.address}
          onChange={(e) => setContact({ ...contact, address: e.target.value })}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary my-2 mx-2 shadow"
          onClick={handleSave}
        >
          Save contact
        </button>
        <button
          type="button"
          className="btn btn-secondary my-2 mx-2 shadow"
          onClick={() => navigate("/")}
        >
          Back to Contacts
        </button>
      </div>
    </div>
  );
};

export default AddNewContact;
