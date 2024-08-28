import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store } = useContext(Context);
  const { theid } = useParams();

  // Encuentra el contacto usando el ID
  const contact = store.contactList.find(
    (contact) => contact.id === parseInt(theid)
  );

  if (!contact) {
    return <h1>Contact not found</h1>;
  }

  return (
    <div className="container mt-5">
      <h1>{contact.name}</h1>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
      <p>
        <strong>Address:</strong> {contact.address}
      </p>
      <Link to="/">
        <button className="btn btn-primary">Back to Contacts</button>
      </Link>
    </div>
  );
};
