import React, { createContext, useState, useEffect } from 'react';

const localState = JSON.parse(localStorage.getItem("selectedUser"));

export const SelectedUserContext = createContext();

// eslint-disable-next-line react/prop-types
export default function SelectedUserProvider( {children} ) {
  const [selectedUser, setSelectedUser] = useState(localState ? localState : false);

  useEffect(() => {
    localStorage.setItem("selectedUser", JSON.stringify(selectedUser));
  }, [selectedUser]);

  return (
    <SelectedUserContext.Provider value={{selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
}
