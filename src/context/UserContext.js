import React, { createContext, useState ,useEffect} from 'react';

const localState = JSON.parse(localStorage.getItem("user"));


export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export default function UserProvider( {children} ) {
  const [user, setUser] = useState(localState ? localState : false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
