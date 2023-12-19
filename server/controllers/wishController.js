const Wishlist = require('../database/wishList.js');

async function deleteWishlistItemById(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Wishlist.destroy({
        where: { id },
      });
      if (deleted) {
        res.json({ message: 'Wishlist item deleted successfully' });
      } else {
        res.status(404).json({ message: 'Wishlist item not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function addWishlistItem(req, res) {
    try {
      const newItem = await Wishlist.create(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async function getWishlistItemById(req, res) {
    try {
      const { id } = req.params;
      const item = await Wishlist.findByPk(id);
      if (!item) {
        res.status(404).json({ message: 'Wishlist item not found' });
        return;
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  module.exports = {
    getWishlistItemById,
    addWishlistItem,
    deleteWishlistItemById
  };  