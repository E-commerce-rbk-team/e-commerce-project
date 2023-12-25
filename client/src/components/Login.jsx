import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/sign.css"
import { useAuth } from './AuthContext.jsx';


function Login({setId,userData}) {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email= formData.get('email')
    const password =formData.get('password')
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/login', {
        email: email,
        password: password,
      });
      const {token, id} = response.data;
       console.log(response.data);
      if (id && token) {
        const { token } = response.data;
        setToken(token);
        setErrorMessage('');
        setLoading(false);
        setId(id)
        if(userData.role=="user"){
          navigate(`/`);
        }
        if(userData.role==="seller"){
          navigate(`/seller`);
        }
        if(userData.role==="admin"){
          navigate(`/admin`);
        }
       
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
        <div className='logo-login1'><img src="https://media.discordapp.net/attachments/1186723460072865853/1187531378980573304/image-removebg-preview.png?ex=659739c8&is=6584c4c8&hm=165c6ac25e9118be3713903e3e9f8abb01bd00cc7b8ff15f8d88e0a03ad14f5f&=&quality=lossless&width=375&height=248" alt="" /></div>
        <h2 className="title1">Login</h2>
        <form onSubmit={handleSubmit} className="form1">
          <label className="label1">
            Email Address:
            <input type="email" name="email" required className="input1" />
          </label>
          <label className="label1">
            Password:
            <input type="password" name="password" required className="input1" />
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
