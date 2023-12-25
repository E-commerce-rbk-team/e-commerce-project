import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import "../css/Logout.css"
function Logout({setUserData}) {
  // const history = useHistory();
  const { clearToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken(); 
    setUserData("");
    navigate(`/Login`);
    // history.push('/login');
  };
  return (
    <div>
      <p className="logout warn" onClick={handleLogout}>Logout</p>
      
    </div>
  );
}

export default Logout;
