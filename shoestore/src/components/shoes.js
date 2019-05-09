import React from 'react';
import ReviewHandle from './reviewHandler'
import '../stylesheets/shoes.css';


class Shoes extends React.Component {
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
                    <div className="col-md-5">
                        <div className="card border-danger" >
                            <div id="first" className="card-body ">

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card border-danger" >
                            <div id="second" className="card-body bg-secondary">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card border-danger"  >
                            <div id="third" className="card-body bg-secondary">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Click me</button>
                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card border-danger" >
                            <div id="first" className="card-body bg-secondary">
                                <h5 className="card-title">Card title</h5>
                                < button className="btn btn-primary">Click me</button>
                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Shoes;