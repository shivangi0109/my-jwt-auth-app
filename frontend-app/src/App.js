import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login', { email, password })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Auth with JWT 🪐</h1>

      { !token && (
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text" />

            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPasword(e.target.value)}
              type="password" />
            <button type='submit'>Submit!</button>
          </form>
        ) }

      </header>
    </div>
  );
}

export default App;
