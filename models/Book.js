const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    genre: { type: String, required: true },
    image: { type: String, required: true }, // Assuming the image URL is also required
});

module.exports = mongoose.model('Book', BookSchema);

