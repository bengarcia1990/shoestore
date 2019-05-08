import React from 'react';
import nike from "../nike.jpg";

class Body extends React.Component {
    render(){
        return(
           
            <div className = "container">
            <body><img src={nike} alt="A shoe"/></body>
            
            </div>
        
        );
    }
}

export default Body;