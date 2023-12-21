import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/sign.css"
import { useAuth } from './AuthContext.jsx';


function Login({setId}) {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/login', {
        email: formData.get('email'),
        password: formData.get('password'),
      });
      const {token, id} = response.data;
      console.log("ugzrg",token)
      if (id && token) {
        const { token } = response.data;
        setToken(token);
        setErrorMessage('');
        setLoading(false);
        setId(id)
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
        <div className='logo-login1'><img src="https://media.discordapp.net/attachments/1173529999295381524/1187087546820333608/image.png?ex=65959c6e&is=6583276e&hm=df9e9f1513c9b52dba719168ad71a4655e6c4eab87cd9f17edc9b97a54b0aee6&=&quality=lossless&width=375&height=248" alt="" /></div>
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
