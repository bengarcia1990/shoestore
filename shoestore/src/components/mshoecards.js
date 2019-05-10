import React from 'react';
import ReviewHandle from './reviewHandler'
import '../stylesheets/mshoecards.css';


class Mshoes extends React.Component {
    constructor() {
        super();
        this.state = {
            review: ""
        }
    }


    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-5">
                        <div className="card border-warning">
                            <div id="first" className='card-body bg-secondary'>

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div><br />
                    <div className="col-md-8 col-lg-6">
                        <div className="card border-warning" >
                            <div id="second" className="card-body bg-secondary">
                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div><br /><br />
                    <div className="col-md-7 col-lg-5">
                        <div className="card border-warning"  >
                            <div id="third" className="card-body bg-secondary">

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div><br />
                    <div className="col-md-8 col-lg-6">
                        <div className="card border-warning" >
                            <div id="fourth" className="card-body bg-secondary">

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div><br />
                </div>
            </div>
        );
    }
}


export default Mshoes;