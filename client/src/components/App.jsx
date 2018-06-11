import React from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import UsersTable from './UsersTable';

import HelloWorld from './HelloWorld';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      editMode: false,
      selectedUser: null,
    }

    this.deleteUser = this.deleteUser.bind(this);
    this.getById = this.getById.bind(this);
    this.getData = this.getData.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.setEdit = this.setEdit.bind(this);
  }

  deleteUser(user) {
    fetch(`/users/${user.id}`, {
      method: 'DELETE',
      body: JSON.stringify(user)
    })
    .then(response => {
      this.getData();
    })
    .catch(e => console.log(e, 'Error deleting user'));
  }

  getById(id) {
    fetch(`/users/${id}`, {method: 'GET'}).then(result => {
      result.json()
      .then(res => {
        console.log(res);
      })
    })
    .catch(e => console.log(e, 'Error getting user by id'));
  }

  getData() {
    fetch('/users', { method: 'GET' }).then(result => {
      result.json()
      .then(res => {
        let users = [...res].sort((a, b) => a.id - b.id);
        this.setState({ users });
      })
    })
    .catch(e => console.log(e, 'Error fetching all users'));

    this.setState({ editMode: false, selectedUser: null });
  }

  selectUser(user) {
    this.setState({ editMode:true, selectedUser: user });
  }

  setEdit() {
    this.setState({ editMode: !this.state.editMode, selectedUser: null });
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    if (this.state.editMode === false) {
      return (
        [
          <UsersTable
            key="UsersTable"
            deleteUser={this.deleteUser}
            getById={this.getById}
            users={this.state.users}
            selectUser={this.selectUser} />,
          <hr key="hr1" />,
          <AddUser key="AddUser"/>,
          <hr key="hr2" />,
          <HelloWorld key="HelloWorld" />
        ]
      );
    } else {
      return (
        <EditUser
          setEdit={this.setEdit}
          selectedUser={this.state.selectedUser} />
      );
    }
  }
}

export default App;