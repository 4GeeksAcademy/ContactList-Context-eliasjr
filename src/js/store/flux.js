const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [],
      demo: [
        { title: "FIRST", background: "white", initial: "white" },
        { title: "SECOND", background: "white", initial: "white" },
      ],
    },
    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loadContacts: async () => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/Elias"
          );
          if (!response.ok) throw new Error("Failed to load contacts");
          const data = await response.json();
          setStore({ contactList: data.contacts });
        } catch (error) {
          console.error("Error loading contacts:", error);
        }
      },

      newContact: async (contact) => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/Elias/contacts",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contact),
            }
          );

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              `Error ${response.status}: ${
                errorData.message || "Unknown error"
              }`
            );
          }

          const data = await response.json();
          if (!data || !data.contact || !data.contact.id) {
            throw new Error("The created contact has no ID.");
          }

          await getActions().loadContacts();
          return data.contact;
        } catch (error) {
          console.error("Error saving contact:", error);
          throw error;
        }
      },

      editContact: async (id, contact) => {
        const apiUrl = `https://playground.4geeks.com/contact/agendas/Elias/contacts/${id}`;

        try {
          const response = await fetch(apiUrl, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              `Error ${response.status}: ${
                errorData.message || "Error editing contact."
              }`
            );
          }

          const updatedContact = await response.json();
          await getActions().loadContacts();
          return updatedContact;
        } catch (error) {
          console.error("Error editing contact:", error);
          throw error;
        }
      },

      deleteContact: async (id) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/Elias/contacts/${id}`,
            { method: "DELETE" }
          );
          if (!response.ok) throw new Error("Failed to delete contact");
          await getActions().loadContacts();
          alert("Contact deleted successfully.");
        } catch (error) {
          console.error("Failed to delete contact:", error);
        }
      },
    },
  };
};

export default getState;
