const router = require('express').Router();
const ProductController = require('../controllers/ProductController');

// POST create a new product
router.post('/products', ProductController.createProduct);

// GET all products
router.get('/products', ProductController.getAllProducts);

// GET a single product by ID
router.get('/products/:id', ProductController.getProductById);

// PUT update a product by ID
router.put('/products/:id', ProductController.updateProductById);

// DELETE a product by ID
router.delete('/products/:id', ProductController.deleteProductById);

module.exports = router;
