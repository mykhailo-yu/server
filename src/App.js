import React, { useEffect, useState } from 'react'
import { User } from "./components/User"
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      })
  }

  console.log(users);


  return (
    <>
      <div>
        {
          users.map((user) => (
            <User id={user.id} key={user.id} name={user.name} email={user.email} />
          ))
        }
      </div>
    </>
  );

}

export default App;
