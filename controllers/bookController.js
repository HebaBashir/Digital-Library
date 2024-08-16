const Book = require('../models/Book');
const User = require('../models/User');

// Add a new book
exports.addBook = async (req, res) => {
    const { title, author, description, publishedDate, genre } = req.body;
    try {
        const newBook = new Book({
            title,
            author,
            description,
            publishedDate,
            genre
        });
        const book = await newBook.save();
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all books
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a book to the wishlist
exports.addToWishlist = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        user.wishlist.push(book);
        await user.save();
        res.json(user.wishlist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get wishlist
exports.getWishlist = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('wishlist');
        res.json(user.wishlist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get recent books for a user
exports.getRecentBooks = async (req, res) => {
    try {
        const userId = req.params.userId;
        // Example logic to fetch recent books based on userId
        const recentBooks = await Book.find().sort({ updatedAt: -1 }).limit(5);
        res.json(recentBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get recommended books for a user
exports.getRecommendedBooks = async (req, res) => {
    try {
        const userId = req.params.userId;
        // Example logic to fetch recommended books based on userId
        const recommendedBooks = await Book.find().limit(5);
        res.json(recommendedBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
