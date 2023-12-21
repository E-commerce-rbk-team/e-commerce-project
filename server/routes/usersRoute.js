const router = require('express').Router();
const UserController = require('../controllers/UserController');
const { Register, Login } = require('../controllers/authController');

const authenticateToken = require('../middleware/jwtAuthMiddleware');
console.log(authenticateToken);
// router.get('/user', authenticateToken, UserController.getUserDetails);
router.post('/login', Login);
router.post('/register', Register);
// GET all users
router.get('/users/getall', UserController.getAllUsers);

// GET user by ID
router.get('/users/:id', UserController.getUserById);

// POST create a new user
router.post('/users/add', UserController.createUser);

// PUT update a user by ID
router.put('/users/:id', UserController.updateUserById);

// DELETE a user by ID
router.delete('/users/:id', UserController.deleteUserById);

module.exports = router;
