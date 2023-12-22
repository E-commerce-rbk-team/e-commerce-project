const Cart = require('../database/cart.js');
const Product = require('../database/product.js');


async function getProductInfoByPostId(req, res) {
  try {
    const { userId } = req.params;

    const cartItems = await Cart.findAll({
      where: { UserId: userId },
      include: [
        {
          model: Product,
          attributes: ['id', 'productName', 'price', 'description', 'imageUrl', 'categories', 'size', 'colour', 'sales', 'available']
        }
      ]
    });

    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ error: 'Cart items not found for the user' });
    }

    res.json(cartItems); // Assuming the association is named Product in the Cart model
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
}

  

  async function deleteCartItem(req, res) {
    try {
      const { userId, cartItemId } = req.params;
      const cartItem = await Cart.findOne({
        where: {
          id: cartItemId,
          UserId: userId,
        },
      });
      if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found for this user' });
      }
      await Cart.destroy({
        where: {
          id: cartItemId,
          UserId: userId,
        },
      });
  
      res.json({ message: 'Cart item deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function createCart(req, res) {
    try {
      const { userId } = req.params;
      const cartData = req.body;
      cartData.UserId = userId; 
      
      const newCart = await Cart.create(cartData);
      res.status(201).json(newCart);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  

  module.exports = {
    getProductInfoByPostId,
    deleteCartItem,
    createCart
  };