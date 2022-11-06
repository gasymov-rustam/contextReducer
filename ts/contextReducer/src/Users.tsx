import { removeUser } from './context/actions';
import { useUserData } from './context/UserProvider';

export const Users = () => {
  const { state, dispatch } = useUserData();
  console.log('USERS==================>>>>>>>>>>>>>>>>>>>>>>>>>');
  return (
    <ul>
      {state?.map((user) => {
        return (
          <li key={user.id}>
            {user.title} <button onClick={() => dispatch(removeUser(user))}>remove</button>
          </li>
        );
      })}
    </ul>
  );
};
