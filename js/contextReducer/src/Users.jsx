import { useUserData } from './context/UserProvider';

export const Users = () => {
  const [state, dispatch] = useUserData();

  console.log('USERS==================>>>>>>>>>>>>>>>>>>>>>>>>>');
  return (
    <ul>
      {state?.map((user) => {
        return (
          <li key={user.id}>
            {user.title}
            <button onClick={() => dispatch({ type: 'REMOVE_USER', payload: user })}>remove</button>
          </li>
        );
      })}
    </ul>
  );
};
