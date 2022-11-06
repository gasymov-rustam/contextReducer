import { UserAction, UserTypes } from './reducer';
import { IUser } from './UserProvider';

export const addUser = (payload: IUser): UserAction => {
  return { type: UserTypes.ADD_USER, payload };
};

export const removeUser = (payload: IUser): UserAction => {
  return { type: UserTypes.REMOVE_USER, payload };
};
