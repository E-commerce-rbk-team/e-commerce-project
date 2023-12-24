import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';
import '../css/sign.css';
import { CheckBox } from '@mui/icons-material';


function Signup({setId}) {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const username= formData.get('username')
    const  email= formData.get('email')
    const  password= formData.get('password');
    const  role= formData.get('role');
    console.log("username",username)
    try {
    
      const response = await axios.post('http://localhost:3000/api/register', {
        username:username,
        email: email,
        password: password,
        role:role
      });
     

// const {email,username,token, id} = response.data;
     const {token}=response.data
     console.log("dsrthn",response.data)
      if (email && username && role && token) {
        setToken(token);
        setId(response.data.id);
        setSuccessMessage('Registration successful!');
        setErrorMessage('');
        if(role=="user"){
          navigate(`/`);
        }
       else if(role==="seller"){
          navigate(`/seller`);
        }
        else{
          navigate(`/admin`);
        }
        
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
        <img src="https://media.discordapp.net/attachments/1173529999295381524/1187087546820333608/image.png?ex=65959c6e&is=6583276e&hm=df9e9f1513c9b52dba719168ad71a4655e6c4eab87cd9f17edc9b97a54b0aee6&=&quality=lossless&width=375&height=248" alt="Lock Icon" className="lock-icon" />
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
          <label required className="label1">
          Role:
          <div>
            <label>
              <input
                type="radio"
                name="role"
                value="user"
              />
              User
            </label>
            <label>
              <input 
                type="radio"
                name="role"
                value="seller"

              />
              Seller
            </label>
          </div>
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
