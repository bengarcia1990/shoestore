import React from 'react';
import Reviewhandle from './reviewHandler';
import Mshoes from './mshoecards'


class MensShoes extends React.Component {

    render() {
        return (
            <div className="pageContainer">
<<<<<<< HEAD
              <Mshoes />
              <Reviewhandle />
            </div>
=======
                <Shoes />

                Men's Shoes,

                <div>
                    <img src={sperry} alt="A shoe" />
                    $60.99 <button>Buy</button>
                </div>

                <div>
                    <img src={sperry} alt="A shoe" />
                    $60.99 <button>Buy</button>
                </div>

                <div>
                    <img src={sperry} alt="A shoe" />
                    $60.99 <button>Buy</button>
                </div>

                <Reviewhandle />
                <Footer />
            </div>



>>>>>>> 4114e4e5ee25e2aa8a1b3b09ca32231ea335c167
        );
    }

}
export default MensShoes;