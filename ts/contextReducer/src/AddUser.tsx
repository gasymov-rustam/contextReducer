import { addUser } from './context/actions';
import { useUserData } from './context/UserProvider';

export const AddUser = () => {
  const { dispatch } = useUserData();

  const handleClick = () => {
    const id = Date.now();

    dispatch(
      addUser({
        id,
        title: `bob - ${id}`,
      })
    );
  };
  console.log('AddUser==================>>>>>>>>>>>>>>>>>>>>>>>>>');

  return <button onClick={handleClick}>addUser</button>;
};
