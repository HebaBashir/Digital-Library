import React from 'react';

function WishlistItem({ item }) {
    return (
        <div className="wishlist-item">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Pages: {item.page}</p>
        </div>
    );
}

export default WishlistItem;
