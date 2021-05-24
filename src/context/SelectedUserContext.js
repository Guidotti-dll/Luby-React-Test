import React, { createContext, useState } from 'react';

export const SelectedUserContext = createContext();

// eslint-disable-next-line react/prop-types
export default function SelectedUserProvider( {children} ) {
  const [selectedUser, setSelectedUser] = useState(false);
  return (
    <SelectedUserContext.Provider value={{selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
}
