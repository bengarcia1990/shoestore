import React from 'react';


const Review = ({ source }) => (

    <div className="alert alert-dark">
        <div className="card card-view">
            <div className="card-body">
                <p className="card-title">Feedback:{source.name}</p>

            </div>
        </div>
    </div>
)

export default Review;