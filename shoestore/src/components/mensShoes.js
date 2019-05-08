import React from 'react';
import Reviewhandle from './reviewHandler';
import Shoes from './shoes'

class MensShoes extends React.Component {

    render() {
        return (
            <div className="pageContainer">
             <Shoes />
             <Reviewhandle />
            </div>


        );
    }

}
export default MensShoes;