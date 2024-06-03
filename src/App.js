import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); //prevent the page from reload
    if (username === '' || password === '') {
      setMessage('Both fields are mandatory');
    } else if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
    } else {
      setMessage('Invalid username or password');
    }
      
      
  }


  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>

        <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        </div>


        <div>
        <label htmlFor='password'>Password:</label>
        <input

          type='password'
          id='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        
        />

        </div>
        
        <button type='submit'>Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
