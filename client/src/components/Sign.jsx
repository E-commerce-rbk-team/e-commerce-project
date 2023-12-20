import React, { useState } from 'react'
// import '../../dist/css/sign.css'

const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const handleSignUp = () => {
      setIsSignUp(true)
    }
    const handleSignIn = () => {
      setIsSignUp(false)
    }
    return (
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
            </div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome to OmniMarket!</h1>
              <p>"Welcome to OmniMarket! Sign up and unlock a world of limitless shopping experiences. Join us today for exclusive deals, seamless browsing, and personalized recommendations."</p>
              <button className="ghost" onClick={handleSignIn}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, There!</h1>
              <p>Welcome back to OmniMarket! Sign in to continue exploring a vast array of products tailored just for you. Get ready to shop effortlessly, track orders, and enjoy a seamless shopping journey with us</p>
              <button className="ghost" onClick={handleSignUp}>Sign Up</button>
            </div>
          </div>
        </div>
        <footer>
        </footer>
      </div>
    );
  };
export default SignUp
