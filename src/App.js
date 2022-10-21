import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const[ASC, setASC]=useState(null);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  function sortHandle() {
    const tampuserlist=[...usersList]
    if(!ASC){
      setUsersList( tampuserlist.sort((a,b)=>a.name.localCompare(b.name)))
    }
    //console.log(tampuserlist,usersList);

   //setUsersList(tampuserlist)
   console.log(tampuserlist,usersList);

  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      <button onClick={sortHandle}>sort</button>
    </div>
  );
}

export default App;