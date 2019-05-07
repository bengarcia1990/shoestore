import React, { useState } from 'react';

export default function addReview() {
    const [review, setReview] = useState(null);
    function handleReviewAdd(e) {
        setReview: (e.target.value);
    }
    return (
        <div>
            <div className='card card-view'>{review}</div>
            <input>
                value = {...review}
                onChange= {handleReviewAdd}
            </input>
            <button onClick={() => setReview(review)}>
                Review
      </button>
        </div>
    );
}
