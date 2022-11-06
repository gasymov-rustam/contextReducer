import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext();

export const useUserData = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [state, setState] = useState([]);

  const addUser = (newUser) => setState((prev) => [...prev, newUser]);
  const removeUser = (user) => setState((prev) => prev.filter(({ id }) => user.id !== id));

  const value = useMemo(() => ({ state, addUser, removeUser }), [state]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
