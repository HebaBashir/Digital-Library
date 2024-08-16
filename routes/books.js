const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { check } = require('express-validator');
const { 
    addBook, 
    getBooks, 
    getBookById,  // Importing the getBookById controller
    addToWishlist, 
    getWishlist, 
    getRecentBooks, 
    getRecommendedBooks 
} = require('../controllers/bookController');

// Add a new book
router.post(
    '/',
    [
        auth, 
        [
            check('title', 'Title is required').not().isEmpty(),
            check('author', 'Author is required').not().isEmpty(),
            check('description', 'Description is required').not().isEmpty(),
            check('publishedDate', 'Published date is required').isDate(),
            check('genre', 'Genre is required').not().isEmpty()
        ]
    ],
    addBook
);

// Get all books
router.get('/', getBooks);

// Get a book by ID
router.get('/:id', getBookById); // Add this route for fetching a book by its ID

// Add to wishlist
router.put('/wishlist/:id', auth, addToWishlist);

// Get wishlist
router.get('/wishlist', auth, getWishlist);

// Get recent books for a user
router.get('/recent/:userId', auth, getRecentBooks);

// Get recommended books for a user
router.get('/recommended/:userId', auth, getRecommendedBooks);

module.exports = router;
