import React from 'react';
<<<<<<< HEAD:shoestore/src/components/wshoecards.js
import  ReviewHandle from './reviewHandler'
import  '../stylesheets/wshoecards.css';
=======
import ReviewHandle from './reviewHandler'
import '../stylesheets/shoes.css';
>>>>>>> 4114e4e5ee25e2aa8a1b3b09ca32231ea335c167:shoestore/src/components/shoes.js


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
<<<<<<< HEAD:shoestore/src/components/wshoecards.js
                            <div id="fifth" className='card-body bg-secondary'>
=======
                            <div id="first" className="card-body ">
>>>>>>> 4114e4e5ee25e2aa8a1b3b09ca32231ea335c167:shoestore/src/components/shoes.js

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div><br/>
                    <div class="col-md-5">
                        <div className="card border-danger" >
                            <div id="sixth" className="card-body bg-secondary">

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div><br/><br/>
                    <div className="col-md-5">
                        <div className="card border-danger"  >
                            <div id="seventh" className="card-body bg-secondary">

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div><br/>
                    <div className="col-md-5">
                        <div className="card border-danger" >
<<<<<<< HEAD:shoestore/src/components/wshoecards.js
                            <div id="eighth" className="card-body bg-secondary">

=======
                            <div id="first" className="card-body bg-secondary">
                                <h5 className="card-title">Card title</h5>
                                < button className="btn btn-primary">Click me</button>
>>>>>>> 4114e4e5ee25e2aa8a1b3b09ca32231ea335c167:shoestore/src/components/shoes.js
                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                            </div>
                        </div>
                    </div><br/>
                </div>
            </div>
        );
    }
}


export default Wshoes;