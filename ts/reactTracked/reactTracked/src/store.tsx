import { useState } from 'react';
import { createContainer } from 'react-tracked';

interface IUser {
  id: number;
  title: string;
}

const initialState: IUser[] = [];

const useUserData = () => useState(initialState);

export const { Provider: UserProvider, useTracked: useUserSharedState } =
  createContainer(useUserData);
