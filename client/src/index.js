import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './components/AuthContext.jsx'
//  import reportWebVitals from './reportWebVitals';
import {DataProvider} from './context.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* this is just a tool (doesnt affect the app) i used for catching errors early in the development process. */}
  <BrowserRouter>
    <AuthProvider> {/* Wrap the App with AuthProvider , so all the app component have access to the token */}
    <DataProvider>
      <App />
      </DataProvider>
    </AuthProvider>
  </BrowserRouter>
</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//  reportWebVitals();
