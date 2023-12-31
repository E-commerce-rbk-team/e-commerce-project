import { createContext,  useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const DataContext = createContext();
const DataProvider = ({ children }) => {
    const navigate = useNavigate();
    const [oneProduct, setOneproduct] = useState({categories:"electronics"});
    const [products, setProducts] = useState([]);
    const [cartList,setCartList]=useState([])
    const [quantity,setQuantity]=useState(1)
    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
          .then((response) => {
            setProducts(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    const handleOneProd=(id)=>{
        axios.get(`http://localhost:3000/api/products/${id}`).then((res)=>{
        setOneproduct(res.data)
        navigate("/details")
    }).catch((err)=>console.log(err))
    }
    const handleAddToChartBtn=(id,prod)=>{
      setCartList([...cartList,{
        UserId:id,
        product:prod,
        quantity:1
      }])
    }
    return (
        <DataContext.Provider value={{ oneProduct, setOneproduct,handleOneProd,products,cartList,setCartList,quantity,setQuantity,handleAddToChartBtn }}>
          {children}
        </DataContext.Provider>
      );
}
export {DataProvider,DataContext}