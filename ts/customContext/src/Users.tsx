import { userActions, useUserContext } from './context/UserProvider';

export const Users = () => {
  const users = useUserContext();
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
