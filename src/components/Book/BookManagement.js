import React from 'react';
import BookUpload from './BookUpload';

function BookManagement() {
    return (
        <div className="container">
            <h2>Book Management</h2>
            <BookUpload />
            {/* Additional book management features can be added here */}
        </div>
    );
}

export default BookManagement;
