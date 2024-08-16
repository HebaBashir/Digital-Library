import React from 'react';
import WishlistItem from './WishlistItem';
 // Import the CSS file

function Wishlist() {
    const wishlist = [
        { id: 1, title: 'Engineering Maths ', page: 50, imageUrl: 'https://m.media-amazon.com/images/I/51kJAbcClTL._AC_UF1000,1000_QL80_.jpg' },
        { id: 2, title: 'Objective Electrical ', page: 120, imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTznSmsUcZXjfD3zCPZAzYTjYyeTVILDgMMfHJZUWPiKpROrLlx' },
        { id: 3, title: 'Electronics Engineering', page: 175, imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLPr-js-lWuGrk5faDTD4AbB3oi3ntk1-3MW2vXzALeYxTj4IH' },
        { id: 4, title: 'AutoCAD', page: 20, imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRp6OLJk3UcAzPf1TrGVTPQIPhnZYe5myxTWC3uzGuPj-4xqw4v' },
    ];

    return (
        <div className='backk'>
            <div className="container">
                <h2>Wishlist</h2>
                <div className="row">
                    {wishlist.map((item) => (
                        <div className="col-md-4" key={item.id}>
                            <WishlistItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
