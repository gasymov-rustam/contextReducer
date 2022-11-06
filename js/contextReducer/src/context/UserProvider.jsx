import { createContext, useContext, useMemo, useReducer } from 'react';
import { reducer } from './reducer';

const initialState = [];

const UserContext = createContext({});

export const useUserData = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [state, dispatch], [state]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
