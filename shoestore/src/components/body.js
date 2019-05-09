import React from 'react';
import nike from "../nike.jpg";


class Body extends React.Component {

    render(){
        return(
           
            <div className = "container">
               <body><img src={nike} alt="A shoe"/></body>
            
            <footer className = "footer text-center">
            <div className = "container">
            <p className="footer-text">Copyright 2019</p>
            </div>
            </footer>
            </div>
        );
    }
}

export default Body;