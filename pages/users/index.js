// Node Module Imports
import { useEffect, useState, useContext } from 'react';
import { useClickAway } from '@uidotdev/usehooks';

// Custom Imports
import Table from '../table';
import Spinner from '../spinner';
import { usersStore } from '../../state/usersStore';
import { counterStore } from '../../state/counterStore';
import {usersActions, counterActions} from '../../state/actions';

// Styles
import styles from './index.module.css';

export default function Home() {
  // Hooks
  const { usersState } = useContext(usersStore);
  const { counterState } = useContext(counterStore);

  useEffect(() => {
    if (!usersState.users && !usersState.fetching) {
      usersActions.fetchAllUsers();
    }
  });

  const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);
  const clickAwayRef = useClickAway(() => setAddUserDialogOpen(false));

  // Handlers
  function handleAddUser(event) {
    event.preventDefault();
    const data = new FormData(document.getElementById('app-form'));
    const userData = {};

    for (const i of data) {
      userData[i[0]] = i[1];
    }
  
    usersActions.createUser(userData);
  }

  function handleDeleteUser(rowData) {
    const userId = rowData.find((field) => field.columnName === 'id').value;

    usersActions.deleteUser(userId);
  }

  // Helpers
  function mapUsersData() {
    const usersData = Object.entries(usersState.users).map((userEntry) => {
      const userObject = userEntry[1];
      const rowData = Object.entries(userObject).map((userProperty) => ({
        columnName: userProperty[0],
        value: userProperty[1],
      }));

      rowData.push({
        columnName: '',
        value: <button type="submit" onClick={() => handleDeleteUser(rowData)}>X</button>,
      });
      return rowData;
    });

    return usersData;
  }

  // Renderers
  function renderTable() {
    return (
      <div>
        <Table tableData={mapUsersData()} />
        <button
          type="submit"
          onClick={() => setAddUserDialogOpen(!addUserDialogOpen)}
          style={{ float: 'right', margin: '10px' }}
        >
          Add User
        </button>
        <div>
          <button onClick={counterActions.decrementCount}>-</button>
          <button onClick={counterActions.incrementCount}>+</button>
          <span>{counterState.count}</span>
        </div>
      </div>
    );
  }

  function renderAddUserForm() {
    return (
      <form
        id="app-form"
        onSubmit={handleAddUser}
        className={styles.appForm}
      >
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" required />
        <input type="submit" value="Submit" wrap="hard" />
      </form>
    );
  }

  function renderSpinner() {
    return <Spinner />;
  }

  function renderAddUserDialog() {
    return (
      <dialog open ref={clickAwayRef} className={styles.createUserDialog}>
        {usersState.creating ? renderSpinner() : renderAddUserForm()}
      </dialog>
    );
  }

  return (
    <>
      {usersState.users ? renderTable() : renderSpinner()}
      {addUserDialogOpen ? renderAddUserDialog() : null}
    </>
  );
}
