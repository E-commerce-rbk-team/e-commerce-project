import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { token: localStorage.getItem('token') || null });
  const setToken = (token) => {
    localStorage.setItem('token', token); // here i save the token in the local storage
    dispatch({ type: 'SET_TOKEN', payload: token });
  };

  const clearToken = () => { // this function is used to delete the token from the local storage
    localStorage.removeItem('token');
    dispatch({ type: 'CLEAR_TOKEN' });
  };


  return (
    <AuthContext.Provider value={{ token: state.token, setToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
