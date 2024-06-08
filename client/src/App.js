import "./App.css";
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const  [password, setPassword] = useState("");
  const [title, setTitle] = useState("");

  const addPassword = () => {
    Axios.post('http://localhost:5001/addpassword', {
      password: password, 
      title: title,
    });
  };
  return (
    <div className="App">
      <h1>Insert Password</h1>
      <div className="AddPassword">
        <input type="text" placeholder='Ex. password123' 
        onChange={(event) => {setPassword(event.target.value);}}/>
        <input type="text" placeholder='Ex. Youtube' 
        onChange={(event) => {setTitle(event.target.value);}}/>
        <button onClick={addPassword}>Add Password</button>
      </div>
    </div>
  );
}

export default App;
