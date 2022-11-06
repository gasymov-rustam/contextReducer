import { createContext, useContext, useState } from 'react';

export const userActions = {
  addUser: null,
  removeUser: null,
};

const UserContext = createContext({});

export const useUserData = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [state, setState] = useState([]);

  userActions.addUser = (newUser) => setState([...state, newUser]);
  userActions.removeUser = (user) => setState((prev) => prev.filter(({ id }) => user.id !== id));

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};
