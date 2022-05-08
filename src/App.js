import React, { useEffect, useState } from 'react'
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

  return null;

}

export default App;
