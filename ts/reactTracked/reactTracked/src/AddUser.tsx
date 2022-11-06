import { useUserSharedState } from './store';

export const AddUser = () => {
  const [, setState] = useUserSharedState();
  const handleClick = () => {
    const id = Date.now();

    setState((prev) => [
      ...prev,
      {
        id,
        title: `bob - ${id}`,
      },
    ]);
  };
  console.log('AddUser==================>>>>>>>>>>>>>>>>>>>>>>>>>');

  return <button onClick={handleClick}>addUser</button>;
};
