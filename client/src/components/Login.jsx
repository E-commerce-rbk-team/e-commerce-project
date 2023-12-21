import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/sign.css"
import { useAuth } from './AuthContext.jsx';
// import logo from '../assets/logo2.png'

function Login({setId}) {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  console.log(useAuth)

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/login', {
        email: formData.get('email'),
        password: formData.get('password'),
      });
      const {token, userId} = response.data;

      if (userId && token) {
        const { token } = response.data;
        setToken(token);
        setErrorMessage('');
        setLoading(false);
        // Redirect user to the home page after successful login
        setId(userId)
        navigate(`/Home`);
      } else {
        setErrorMessage('Login failed. Please check your credentials.');
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage('Error during login. Please try again.');
      setLoading(false);
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container1">
      <div className="form-container1">
        {/* <div className='logo-login1'><img src={logo} alt="" /></div> */}
        <h2 className="title1">Login</h2>
        <form onSubmit={handleSubmit} className="form1">
          <label className="label1">
            Email Address:
            <input type="email" name="userEmail" required className="input1" />
          </label>
          <label className="label1">
            Password:
            <input type="password" name="userPassword" required className="input1" />
          </label>
          <button type="submit" className="button1" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {errorMessage && (
          <div className="error-message1">
            {errorMessage}
          </div>
        )}

        <p className="create-account-link1">
          Don't have an account? <a href="/sign">Sign up here</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
