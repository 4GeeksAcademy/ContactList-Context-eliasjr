import React, { useState, useEffect } from "react";
import getState from "./flux";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(() => {
      const initialState = getState({
        getStore: () => state?.store,
        getActions: () => state?.actions,
        setStore: (updatedStore) =>
          setState((prevState) => ({
            store: { ...prevState.store, ...updatedStore },
            actions: { ...prevState.actions },
          })),
      });
      return initialState;
    });

    useEffect(() => {
      if (state?.actions?.loadContacts) {
        state.actions.loadContacts();
      }
    }, [state?.actions]);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
