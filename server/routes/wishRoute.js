const router = require('express').Router();
const wishController = require('../controllers/wishController');


router.get('/wish/:id', wishController.getWishById);


module.exports = router;