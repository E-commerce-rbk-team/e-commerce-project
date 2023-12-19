const router = require('express').Router();
const WishlistController = require('../controllers/wishController');

// DELETE a wishlist item by ID
router.delete('/wishlist/:id', WishlistController.deleteWishlistItemById);

// POST add a wishlist item
router.post('/wishlist', WishlistController.addWishlistItem);

// GET a wishlist item by ID
router.get('/wishlist/:id', WishlistController.getWishlistItemById);

module.exports = router;
