import logo from './logo.svg';
import './App.css';
import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';

import Table from './Table';
import DogImages from './DogImages';
import UserList from './UserList';

function App() {
  /*const [myData, setMyData] =useState([])

  //using promises
  useEffect(() => {
    axios.get("https://dog.ceo/api/breed/malinois/images").then((res) => setMyData(res.data));
  }, []); */

  return (
<>
<div>
  <h1>First Api Solution</h1>
  <UserList />
</div>
<div>
  <h1>second Api Solution</h1>
  <DogImages />
</div>
<div>
  <h1>Practice Api</h1>
  <Table />
</div>
</>
  );
}

export default App;
