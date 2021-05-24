import React, { createContext, useState } from 'react';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export default function UserProvider( {children} ) {
  const [user, setUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser, selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
}
