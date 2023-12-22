import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css"
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    rating: "",
    price: "",
    description: "",
    imageUrl: "",
    categories: [],
    size: "",
    colour: "",
    sales: "",
    available: "",
    UserId: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/products", newProduct);
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data);
      setNewProduct({
        productName: "",
        rating: 0,
        price: 0,
        description: "",
        imageUrl: "",
        categories: [],
        size: "",
        colour: "",
        sales: 0,
        available: "",
        UserId: 0,
      });
      setShowAddForm(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

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
          name="productID"
          placeholder="Product ID"
          value={newProduct.id}
          onChange={handleInputChange}
        />
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
          name="available"
          placeholder="Product availability"
          value={newProduct.available}
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
        <input
          type="text"
          name="UserId"
          placeholder="Product UserId"
          value={newProduct.UserId}
          onChange={handleInputChange}
        />
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
        <tbody>
          {products.map((products) => (
            <tr key={products.id}>
              <td>{products.id}</td>
              <td>{products.productName}</td>
              <td>{products.rating}</td>
              <td>{products.price}</td>
              <td>{products.description}</td>
              <td>{products.sales}</td>
              <td>{products.available}</td>
              <td>{products.categories}</td>
              <td>{products.size}</td>
              <td>{products.colour}</td>
              <td>{products.UserId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
