import { createContext, ReactNode, Reducer, useContext, useMemo, useReducer } from 'react';
import { reducer, UserAction } from './reducer';

interface IProviderProps {
  children: ReactNode;
}

interface IContext {
  state: IUser[];
  dispatch: (action: UserAction) => void;
}

export interface IUser {
  id: number;
  title: string;
}

const initialState: IUser[] = [];

const UserContext = createContext({} as IContext);

export const useUserData = () => useContext(UserContext);

export const UserProvider = (props: IProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<IUser[], UserAction>>(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <UserContext.Provider value={value} {...props} />;
};
