import { createContext,  useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const DataContext = createContext();
const DataProvider = ({ children }) => {
    const navigate = useNavigate();
    const [oneProduct, setOneproduct] = useState({});
    const handleOneProd=(id)=>{
        axios.get(`http://localhost:3000/api/products/${id}`).then((res)=>{
        setOneproduct(res.data)
        navigate("/details")
    }).catch((err)=>console.log(err))
    }
    return (
        <DataContext.Provider value={{ oneProduct, setOneproduct,handleOneProd }}>
          {children}
        </DataContext.Provider>
      );
}
export {DataProvider,DataContext}