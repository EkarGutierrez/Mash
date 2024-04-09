import { useState } from 'react'
import './Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
    } 
    else {
      alert('Please enter both username and password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // You may want to redirect the user to the login page after logout
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="card">
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </>
  );
}

export default App;
