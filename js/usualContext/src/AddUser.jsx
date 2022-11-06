import { useUserData } from './context';

export const AddUser = () => {
  const { addUser } = useUserData();

  const handleClick = () => {
    const id = Date.now();

    addUser({
      id,
      title: `bob - ${id}`,
    });
  };
  console.log('AddUser==================>>>>>>>>>>>>>>>>>>>>>>>>>');

  return <button onClick={handleClick}>addUser</button>;
};
