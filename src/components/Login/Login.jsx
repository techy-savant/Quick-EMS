import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import {useNavigate} from 'react-router-dom'


const Login = ({ setIsAuthenticated }) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    if (document.activeElement.name === 'SignIn') {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);
  
            Swal.fire({
              icon: 'success',
              title: 'Successfully Signed in!',
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch (error) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: `Something went wrong - Incorrect Email or Password`,
              showConfirmButton: true,
            });
          },
        });
      }
    } 
    

    
  };

  return (
    <div className="small-container">
      <h1 className='logo' style={{marginBottom: '30px'}}>Quick-EMS</h1>

      <form onSubmit={handleLogin}>
        <h3>Admin Login</h3>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input style={{ marginTop: '12px' }} type="submit" value="SignIn" name="SignIn" />
        <input style={{ marginTop: '12px', marginLeft: '12px', backgroundColor: 'black' }} type="button" value="Register Admin »" name="Register" onClick={()=>{navigate('/register');}} />
      </form>
    </div>
  );
};

export default Login;