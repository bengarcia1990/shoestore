import React from 'react';
import Reviewhandle from './reviewHandler';
import Wshoes from './wshoecards'


class WomensShoes extends React.Component {

    render() {
        return (
            <div className="pageContainer">
                <Wshoes />
                <Reviewhandle />
            </div>


        );
    }

}
export default WomensShoes;