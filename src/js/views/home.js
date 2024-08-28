import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Contacts from "./contact";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const handleDeleteContact = (id) => {
    actions.deleteContact(id); // Llama a la función de eliminación desde el contexto
  };

  return (
    <div className="text-center mt-5">
      <div className="container">
        {store.contactList.map((item) => (
          <Contacts
            key={item.id}
            id={item.id}
            fullName={item.name}
            phone={item.phone}
            email={item.email}
            address={item.address}
            onDelete={handleDeleteContact}
          />
        ))}
      </div>
    </div>
  );
};
