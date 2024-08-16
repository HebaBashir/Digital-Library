import React, { useState } from 'react';

function ReviewForm() {
    const [bookTitle, setBookTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Review:', { bookTitle, content });
    };

    return (
        
        <div className="container">
            <div className='background'>
            <h2>Leave a Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="bookTitle" className="form-label">Book Title</label>
                    <input type="text" className="form-control" id="bookTitle" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} required />
                
                    <label htmlFor="content" className="form-label">Review</label>
                    <textarea className="form-control" id="content" rows="3" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <style jsx>{`
                .mb-3 {
                    max-width: 100%;
                    margin: 50px auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    background-color: #f9f9f9;
                    text-align: left;
                    
                }
                h2 {
                    text-align: left;
                    margin-bottom: 20px;
                }
                .mb-3 {
                    margin-bottom: 15px;
                    text-align: left;
                    align-items: left;
                    
                }
                .form-label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                    text-align: left;
                    align-items: left;
                    
                }
                .form-control {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    align-items: left;
                    
                }
                .btn {
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                    text-align: left;
                }
                .btn:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
        </div>
    );
}

export default ReviewForm;
