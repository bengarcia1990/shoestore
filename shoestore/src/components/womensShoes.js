import React from 'react';
import Reviewhandle from './reviewHandler';
import Shoes from './shoes'

class WomensShoes extends React.Component {

    render() {
        return (
            <div className="pageContainer">
                <Shoes />
                <Reviewhandle />
            </div>


        );
    }

}
export default WomensShoes;