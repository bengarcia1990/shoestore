import  React from 'react';
import  ReviewHandle from './reviewHandler'
import  Rating from './rating'
import  '../stylesheets/wshoecards.css';


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
                            <div id="fifth" className='card-body '>

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                                <Rating/>
                            </div>
                        </div>
                    </div><br />
                    <div class="col-md-5">
                        <div className="card border-danger" >
                            <div id="sixth" className="card-body ">

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                                <Rating/>
                            </div>
                        </div>
                    </div><br /><br />
                    <div className="col-md-5">
                        <div className="card border-danger"  >
                            <div id="seventh" className="card-body bg-secondary">

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                                <Rating/>
                            </div>
                        </div>
                    </div><br />
                    <div className="col-md-5">
                        <div className="card border-danger" >
                            <div id="eighth" className="card-body ">

                            </div>
                            <div className="card-footer">
                                <ReviewHandle />
                                <Rating/>
                            </div>
                        </div>
                    </div><br />
                </div>
            </div>
        );
    }
}


export default Wshoes;