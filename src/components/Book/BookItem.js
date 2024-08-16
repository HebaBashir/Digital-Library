import React from 'react';

function BookItem({ book }) {
    return (
        <div className="book-item">
            <img src={book.image} alt={book.title} className="book-image" />
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <style jsx>{`
                .book-item {
                    text-align: center;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    background-color: #f9f9f9;
                }
                .book-image {
                    width: 150px;
                    height: 200px;
                    object-fit: cover;
                    margin-bottom: 10px;
                    border-radius: 4px;
                }
                h5 {
                    font-size: 18px;
                    margin: 10px 0;
                }
                p {
                    font-size: 16px;
                    color: #555;
                }
            `}</style>
        </div>
    );
}

export default BookItem;
