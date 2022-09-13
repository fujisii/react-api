import React, { useEffect } from 'react';
import { getUsers } from '../data/api/getUsers';

const Users: React.FC = () => {
  useEffect(() => {
    getUsers().then((users) => {
      console.log('# users', users);
    });
  }, []);
  return <span>Users</span>;
};

export { Users };
