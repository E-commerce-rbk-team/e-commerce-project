import React, { useState, useEffect } from "react";
import axios from "axios";
import Cloudinary from "../adminComponents/Cloudinary.jsx";
import "../adminComponents/Products.css"
const ProductsSeller = ({id}) => {
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [refresh,setRefresh]=useState(false)
  const [showUpdate,setShowUpdate]=useState(false)
  const [myId,setId]=useState(id)
  const [newProduct, setNewProduct] = useState({
    productName: "",
    rating: "",
    price: "",
    description: "",
    imageUrl: [],
    categories: [],
    size: "", 
    colour: "",
    sales: "",
    available: "",
    UserId:myId,
  });
  const [update, setUpdate] = useState({ 
    price: "",
    available: ""
  });
const hundleUpdate=(event,proId)=>{
  event.preventDefault();
  axios.put(`http://localhost:3000/api/products/${proId}`,update).then((ress)=>{
     setRefresh(!refresh)
  }).catch((err)=>{
    console.error(err)
  })
}
  
const setImg =(imageUrl)=>{
  setNewProduct({...newProduct,imageUrl:[...newProduct.imageUrl,imageUrl]});
}

  useEffect(() => {
    axios.get(`http://localhost:3000/api/producs/user/${id&&id}`).then(response=>
    setProducts(response.data.map((e,i)=>({...e,showUpdate:false})))
    ) .catch ((error)=>
        console.error("Error fetching products:", error)
   )
  }, [refresh]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  const handleUpdateChange = (event) => {
    const { name, value } = event.target;
    setUpdate({ ...update, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/products", newProduct);
      setNewProduct({
        productName: "",
        rating: 0,
        price: 0,
        description: "",
        imageUrl: [],
        categories: [],
        size: "",
        colour: "",
        sales: 0,
        available: "In Stock",
        UserId: id,
      });
      setShowAddForm(false);
      setRefresh(!refresh)
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
   console.log("prod",id);
  return (    
    <div>
      <h1 >Product List</h1>
      <button className= "productList" onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Hide Form' : 'Add Product'}
      </button>
      {showAddForm && (
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={newProduct.productName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="rating"
          placeholder="Product rating"
          value={newProduct.rating}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Product price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Product description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="sales"
          placeholder="Product sales"
          value={newProduct.sales}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="categories"
          placeholder="Product categories"
          value={newProduct.categories}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="size"
          placeholder="Product size"
          value={newProduct.size}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="colour"
          placeholder="Product colour"
          value={newProduct.colour}
          onChange={handleInputChange}
        />
         <Cloudinary setImg={setImg}/>
          <button type="submit">Submit</button>
      </form>
  )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>rating</th>
            <th>Price</th>
            <th>Description</th>
            <th>Sales</th>
            <th>Available</th>
            <th>Categories</th>
            <th>Size</th>
            <th>Colour</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody className="aff">
          {products.map((product) => (
            <tr key={product.id}>
              {!product.showUpdate?(<div> 
              <td>{product.productName}</td>
              <td>{product.rating}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.sales}</td>
              <td>{product.available}</td>
              <td>{product.categories}</td>
              <td>{product.size}</td>
              <td>{product.colour}</td>
              <button onClick={()=>{setProducts(products.map((e,i)=>(product.id===e.id ?{...e,showUpdate:!e.showUpdate}:{...e})))}}>update</button></div>): 
              (<div><form >
               <input
                 type="text"
                 name="price"
                 placeholder="Product price"
                 value={update.price}
                 onChange={handleUpdateChange}
               />
                <input
                 type="text"
                 name="available"
                 placeholder="available"
                 value={update.available}
                 onChange={handleUpdateChange}
               />
                <button onClick={(e)=>hundleUpdate(e,product.id)}>Update one</button>
             </form>
              </div>)}
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsSeller;