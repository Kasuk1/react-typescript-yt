import { useState } from 'react';

interface UserProps {
  uid: string;
  name: string;
}

export const User = () => {
  const [user, setUser] = useState<UserProps>();

  const login = () => {
    setUser({
      uid: 'abc',
      name: 'Igor',
    });
  };

  return (
    <div className='mt-5'>
      <h3>User</h3>
      <button className='btn btn-outline-primary' onClick={login}>
        Login
      </button>

      {!user ? <pre>No user</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};
