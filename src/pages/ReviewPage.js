import React from 'react';
import ReviewList from '../components/Review/ReviewList';
import ReviewForm from '../components/Review/ReviewForm';

function ReviewPage() {
    return (
        <div className="container">
            <ReviewForm />
            <ReviewList />
        </div>
    );
}

export default ReviewPage;
