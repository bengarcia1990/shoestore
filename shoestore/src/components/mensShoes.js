import React from 'react';
import Reviewhandle from './reviewHandler';
import Mshoes from './mshoecards'


class MensShoes extends React.Component {

    render() {
        return (
            <div className="pageContainer">
              <Mshoes />
              <Reviewhandle />
            </div>
        );
    }

}
export default MensShoes;