import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import SignUp from './components/Sign.jsx'

function App() {
    return (
      <div>
        <SignUp />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('App'))