import React from 'react';
import nike from "../nike.jpg";

class Body extends React.Component {
    render() {
        return (

            <div className="container">
                <img src={nike} alt="A shoe" />

            </div>

        );
    }
}

export default Body;