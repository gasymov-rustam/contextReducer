import { useUserData } from './context';

export const Users = () => {
  const { state, removeUser } = useUserData();
  console.log('USERS==================>>>>>>>>>>>>>>>>>>>>>>>>>');
  return (
    <ul>
      {state?.map((user) => {
        return (
          <li key={user.id}>
            {user.title} <button onClick={() => removeUser(user)}>remove</button>
          </li>
        );
      })}
    </ul>
  );
};
