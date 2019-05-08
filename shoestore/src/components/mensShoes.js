import React from 'react';
import Reviewhandle from './reviewHandler';
import Shoes from './shoes'
import Footer from './footer';
import sperry from '../sperry.jpeg';

class MensShoes extends React.Component {

    render() {
        return (
            <div className="pageContainer">
             <Shoes />
             <Reviewhandle />

                Men's Shoes,
                
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
            <Footer/>
            </div>
            
            

        );
    }

}
export default MensShoes;