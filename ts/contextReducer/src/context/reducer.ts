import { IUser } from './UserProvider';

export enum UserTypes {
  ADD_USER = 'ADD_USER',
  REMOVE_USER = 'REMOVE_USER',
}

export interface AddUserAction {
  type: UserTypes.ADD_USER;
  payload: IUser;
}

export interface RemoveUserAction {
  type: UserTypes.REMOVE_USER;
  payload: IUser;
}

export type UserAction = AddUserAction | RemoveUserAction;

export const reducer = (state: IUser[], { type, payload }: UserAction) => {
  switch (type) {
    case 'ADD_USER':
      return [...state, payload];
    case 'REMOVE_USER':
      return state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
};
