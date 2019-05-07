import React from 'react';
//import Navbar from './navBar.js'

class shoes extends React.Component {
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
                    <div className="col-md-4">
                        <div className="card border-danger" >
                            <div className="card-header">
                                Card Header
                            </div>
                            <div className="card-body bg-secondary">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary">Click me</button>
                            </div>
                            <div className="card-footer">
                                Card Footer
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div className="card border-danger" >
                            <div className="card-header">
                                Card Header
                                         </div>
                            <div className="card-body bg-secondary">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                < button className="btn btn-primary">Click me</button>
                            </div>
                            <div className="card-footer">
                                Card Footer
                                         </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-danger"  >
                            <div className="card-header">
                                Card Header
                                        </div>
                            <div className="card-body bg-secondary">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button class="btn btn-primary">Click me</button>
                            </div>
                            <div className="card-footer">
                                Card Footer
                                         </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default shoes;