import { createContext, ReactNode, useContext, useState } from 'react';

export interface IUser {
  id: number;
  title: string;
}

export interface IUserActions {
  addUser: (user: IUser) => void;
  removeUser: (user: IUser) => void;
}

export const userActions = {} as IUserActions;

const initialState: IUser[] = [];

const UserContext = createContext(initialState);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IUser[]>([]);

  userActions.addUser = (newUser) => setState((prev) => [...prev, newUser]);
  userActions.removeUser = (user) => setState((prev) => prev.filter(({ id }) => user.id !== id));

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};
