import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SellerList = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/getall');
        const filteredSellers = response.data.filter(user => user.role === 'sellers');
        setSellers(filteredSellers);
      } catch (error) {
        console.error('Error fetching sellers:', error);
      }
    };

    fetchSellers();
  }, []);

  return (
    <div>
      <h1>Seller List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id}>
              <td>{seller.id}</td>
              <td>{seller.username}</td>
              <td>{seller.email}</td>
              <td>{seller.password}</td>
              <td>{seller.address}</td>
              <td>{seller.firstName}</td>
              <td>{seller.lastName}</td>
              <td>{seller.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerList;
