import React from 'react';

function ReviewList() {
    const reviews = [
        { id: 1, bookTitle: 'Operating System Concepts', content: 'Great book!', imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQheuTjS7Ut-rBghh2YWNw6Pg-7dqNGY11pYWSssCzPU3nlbjx0' },
        { id: 2, bookTitle: 'Operating Systems courses', content: 'Very informative.', imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvL0KJDgX_U2uJRr7Vm2TvnH7v1P90wvRauEeSvPdoaIfHvw9E' },
        { id: 3, bookTitle: 'Introduction to Algorithms', content: 'Best to understand.', imageUrl: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Introduction-to-Algorithms.jpg' },
        { id: 4, bookTitle: 'Data Structures and Algorithms Made Easy', content: 'Go for it blindly', imageUrl: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Data-Structures-And-Algorithms-Made-Easy.jpg' },
        { id: 5, bookTitle: 'Operating System Concepts', content: 'Great book!', imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQheuTjS7Ut-rBghh2YWNw6Pg-7dqNGY11pYWSssCzPU3nlbjx0' },
        { id: 6, bookTitle: 'Operating Systems courses', content: 'Very informative.', imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvL0KJDgX_U2uJRr7Vm2TvnH7v1P90wvRauEeSvPdoaIfHvw9E' },
        { id: 7, bookTitle: 'Introduction to Algorithms', content: 'Best to understand.', imageUrl: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Introduction-to-Algorithms.jpg' },
        { id: 8, bookTitle: 'Data Structures and Algorithms Made Easy', content: 'Go for it blindly', imageUrl: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Data-Structures-And-Algorithms-Made-Easy.jpg' },
    ];

    return (
        <div className="container">
            <h2>Reviews</h2>
            <ul className="list-group">
                {reviews.map((review) => (
                    <li className="list-group-item" key={review.id}>
                        <div className="review-item">
                            <img src={review.imageUrl} alt={review.bookTitle} className="review-image" />
                            <div className="review-content">
                                <h5>{review.bookTitle}</h5>
                                <p>{review.content}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <style jsx>{`
                .list-group {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 20px;
                }
                h2 {
                    text-align: left;
                    margin-bottom: 20px;
                }
                .list-group {
                    padding: 0;
                }
                .list-group-item {
                    display: flex;
                    align-items: center;
                    padding: 15px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    margin-bottom: 10px;
                    background-color:  #f5d1d1;
                }
                .review-item {
                    display: flex;
                    align-items: center;
                }
                .review-image {
                    width: 100px;
                    height: 100px;
                    margin-right: 15px;
                    border-radius: 4px;
                    object-fit: cover;
                }
                .review-content {
                    display: flex;
                    flex-direction: column;
                }
                .review-content h5 {
                    margin: 0;
                    font-size: 18px;
                }
                .review-content p {
                    margin: 5px 0 0;
                    font-size: 16px;
                    color: #555;
                }
            `}</style>
        </div>
    );
}

export default ReviewList;
