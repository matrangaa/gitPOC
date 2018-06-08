import React from 'react';
import UserEntry from './UserEntry';

const UsersTable = (props) => {
  if (props.users.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {props.users.map((u, i) =>
            <UserEntry key={i} user={u} deleteUser={props.deleteUser} getById={props.getById} selectUser={props.selectUser} />
          )}
        </tbody>
      </table>
    );
  } else {
    return (
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>        
          </tr>
        </thead>
      </table>
    );
  }
}

export default UsersTable;