import { userActions } from './context/UserProvider';

export const AddUser = () => {
  const handleClick = () => {
    const id = Date.now();

    userActions.addUser({
      id,
      title: `bob - ${id}`,
    });
  };
  console.log('AddUser==================>>>>>>>>>>>>>>>>>>>>>>>>>');

  return <button onClick={handleClick}>addUser</button>;
};
