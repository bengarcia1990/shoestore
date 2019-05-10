import React from 'react';
import ReviewHandle from './reviewHandler'
import '../stylesheets/wshoecards.css';


class Wshoes extends React.Component {
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
                    </div><br />
                    <div class="col-md-5">
                        <div className="card border-danger" >
                            <div id="sixth" className="card-body bg-secondary">

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div><br /><br />
                    <div className="col-md-5">
                        <div className="card border-danger"  >
                            <div id="seventh" className="card-body bg-secondary">

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div><br />
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
                    </div><br />
                </div>
            </div>
        );
    }
}


export default Wshoes;