import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
       <img 
        src="https://www.allaboutlean.com/wp-content/uploads/2019/10/Amazon-Logo-768x231.png" 
        alt="Amazon logo" 
        className="login-amazon-logo" 
      />
      <form onSubmit={login} className="login-content">
        <h1>Sign in</h1>
        <label htmlFor="email">Email</label>
        <input 
          id="email"
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <label htmlFor="password">Password</label>
        <input 
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign in</button>
      </form>
      <div className="login-para">
        <hr />
        <span>New to Amazon?</span>
        <hr />
      </div>
      <Link to="/register">
        <button className="login-register-button">Create new Amazon account</button>
      </Link>
    </div>
  )
}
