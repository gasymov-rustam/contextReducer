import { AddUser } from './AddUser';
import { UserProvider } from './context/UserProvider';
import { Users } from './Users';

export const App = () => (
  <UserProvider>
    <AddUser />
    <Users />
  </UserProvider>
);
