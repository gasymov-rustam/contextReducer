import { useUserSharedState } from './store';

export const Users = () => {
  const [state, setState] = useUserSharedState();
  console.log('USERS==================>>>>>>>>>>>>>>>>>>>>>>>>>');
  return (
    <ul>
      {state?.map((user) => {
        return (
          <li key={user.id}>
            {user.title}
            <button onClick={() => setState((prev) => prev.filter(({ id }) => id !== user.id))}>
              remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};
