import { userActions, useUserData } from './context';

export const Users = () => {
  const users = useUserData();
  console.log('USERS==================>>>>>>>>>>>>>>>>>>>>>>>>>');
  return (
    <ul>
      {users?.map((user) => {
        return (
          <li key={user.id}>
            {user.title} <button onClick={() => userActions.removeUser(user)}>remove</button>
          </li>
        );
      })}
    </ul>
  );
};
