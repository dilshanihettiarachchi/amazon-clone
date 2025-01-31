import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpwd, setConfirmPwd] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    if (password !== confirmpwd) {
      alert("Password don't match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
      });

      navigate("/");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register">
      <img 
        src="https://www.allaboutlean.com/wp-content/uploads/2019/10/Amazon-Logo-768x231.png" 
        alt="Amazon logo" 
        className="register-amazon-logo" 
      />
      <form onSubmit={register} className="register-content">
        <h1>Create Account</h1>
        <label htmlFor="name">Your name</label>
        <input 
          id="name"
          type="text"
          placeholder="Full name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
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
          placeholder="At least 6 characters"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <label htmlFor="confirmPwd">Re-enter password</label>
        <input 
          id="confirmPwd"
          type="password"
          required
          value={confirmpwd}
          onChange={(e) => setConfirmPwd(e.target.value)}
          />
        <button type="submit">Create your Amazon account</button>
        <hr />
        <div className="register-login-path">
        <p>
          Already have an account? 
          <Link to="/login">
            <span className="register-login-link">Sign in</span>
          </Link>
        </p>
        </div>
      </form>
    </div>
  )
}
