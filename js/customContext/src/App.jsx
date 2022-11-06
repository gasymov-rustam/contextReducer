import { AddUser } from './AddUser';
import { UserProvider } from './context';
import { Users } from './Users';

export const App = () => (
  <UserProvider>
    <AddUser />
    <Users />
  </UserProvider>
);
