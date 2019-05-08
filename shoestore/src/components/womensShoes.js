import React from 'react';
import Reviewhandle from './reviewHandler';
import sperry from '../sperry.jpeg';


class WomensShoes extends React.Component {

    render() {
        return (
            <div className="pageContainer">

                Women's Shoes, b

                <div>
                <img src={sperry} alt="A shoe"/> 
                $60.99 <button>Buy</button>
                </div>

                <div>
                <img src={sperry} alt="A shoe"/> 
                $60.99 <button>Buy</button>
                </div>

                <div>
                <img src={sperry} alt="A shoe"/> 
                $60.99 <button>Buy</button>
                </div>

                <Reviewhandle />
            </div>


        );
    }

}
export default WomensShoes;