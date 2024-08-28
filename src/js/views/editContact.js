import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
  const { id } = useParams();
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `https://playground.4geeks.com/contact/agendas/Elias/contacts/${id}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setContact({
          name: data.contact.name || "",
          email: data.contact.email || "",
          phone: data.contact.phone || "",
          address: data.contact.address || "",
        });
      } catch (error) {
        console.error("Failed to fetch contact:", error);
      }
    };
    fetchContact();
  }, [id]);

  const handleSave = async () => {
    try {
      const updatedContact = await actions.editContact(id, contact);
      if (updatedContact && updatedContact.id) {
        setSaved(true);
        // Navegar a la vista del contacto después de guardar
        navigate(`/single/${updatedContact.id}`);
      } else {
        console.error("El contacto actualizado no tiene ID");
      }
    } catch (error) {
      console.error("Error al guardar el contacto:", error);
    }
  };

  if (saved) {
    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">Contact Updated</h1>
        <p className="text-center">The contact has been successfully updated.</p>
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
    <div className="container mt-4">
      <h1 className="text-center mb-4">Edit Contact</h1>
      <div className="row">
        <div className="col-12 mb-3">
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
        <div className="col-12 mb-3">
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
        <div className="col-12 mb-3">
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
        <div className="col-12 mb-3">
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
      </div>
      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={handleSave}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditContact;
