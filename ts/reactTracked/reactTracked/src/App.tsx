import { AddUser } from './AddUser';
import { UserProvider } from './store';
import { Users } from './Users';

export const App = () => (
  <UserProvider>
    <AddUser />
    <Users />
  </UserProvider>
);
