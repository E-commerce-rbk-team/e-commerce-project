import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext/authContext';
import '../css/sign.css';


function Signup({setId}) {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await axios.post('http://localhost:3000/api/users/add', {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
      });
      // console.log("register",response.data);
      const {email,username,token, id} = response.data;
      console.log("id",id);

      if (email && username && token) {
        setToken(token);
        setId(id);
        setSuccessMessage('Registration successful!');
        setErrorMessage('');

        navigate(`/Home`); // id is done successfully
        
      } else {
        setSuccessMessage('');
        setErrorMessage('Registration failed. Please try again.');
      }

    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error during registration. Please try again.');
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="container1">
      <div className="form-container1">
        {/* <img src={image} alt="Lock Icon" className="lock-icon" /> */}
        <h2 className="title1">Sign up</h2>
        <form onSubmit={handleSignup} className="form1">
          <label className="label1">
            User Name:
            <input type="text" name="username" required className="input1" />
          </label>

          <label className="label1">
            Email Address:
            <input type="email" name="email" required className="input1" />
          </label>
          <label className="label1">
            Password:
            <input type="password" name="password" required className="input1" />
          </label>
          <button type="submit" className="button1">
            Sign Up
          </button>
        </form>
          {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="error-message1">
            {errorMessage}
          </div>
        )}
        <p className="create-account-link1">
          Already have an account? <a href="/">Sign in here</a>.
        </p>
      </div>
    </div>
  );
}

export default Signup;
