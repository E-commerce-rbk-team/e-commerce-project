const router = require('express').Router();
const cartController = require('../controllers/cartController');

// GET all cart items for a specific user
router.get('/users/cart/:userId', cartController.getAllCart);

// DELETE a cart item for a specific user
router.delete('/users/cart/:userId/:cartItemId', cartController.deleteCartItem);

// POST create a new cart item
router.post('/users/cart/:userId', cartController.createCart);

module.exports = router;
