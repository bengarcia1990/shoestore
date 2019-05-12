import React from 'react';
import Review from './review'
import _ from 'lodash';
import firebase from "firebase";


const config = {
  apiKey: "AIzaSyCChWpAScV7I2LK1rmGdDQDSu-c-yso6Jw",
  authDomain: "another-example-964d2.firebaseapp.com",
  databaseURL: "https://another-example-964d2.firebaseio.com",
  projectId: "another-example-964d2",
  storageBucket: "another-example-964d2.appspot.com",
  messagingSenderId: "589831448287",
  appId: "1:589831448287:web:4b4a12f81bb4aa62"
};

firebase.initializeApp(config);

const database = firebase.database();

const Generic_Review = '';



class Reviewhandle extends React.Component {
  constructor() {
    super();
    this.state = {
      submitMode: false,
      reviews: []
    };
  }

  componentDidMount() {
    const reviewRef = database.ref("review/");
    reviewRef.on("value", snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values) {
    let reviewsVal = values;
    let reviewList = _(reviewsVal)
      .keys()
      .map(
        reviewKey => {
          let cloned = _.clone(reviewsVal[reviewKey]);
          cloned.key = reviewKey;
          return cloned;
        }
      )
      .value();

    this.setState({
      reviews: reviewList
    });

    console.log(this.state.reviews);
  }

  handleComment(e) {
    this.setState({
      submitMode: true
    });
  }

  handleSubmit() {
    this.setState({
      review: this.refs.commentContent.value,
      submitMode: false
    });
  }


  writeData = e => {
    let fields = e.target.elements;
    let review = {};
    for (let x of [...fields]) {
      if (x.name) review[x.name] = x.value;
    }
    database.ref("review/").push(review, function (error) {
      if (error) {
        alert("That didn't work, please try again.");
      } else {
        console.log("Successful submit!");
      }
    });
  };

  render() {

    let commentElement, buttonArea;
    if (this.state.submitMode) {
      commentElement = (
        <form onSubmit={this.writeData.bind(this)}>
          <textarea ref="commentContent" type="text" className='col-sm-6' name="name" placeholder={Generic_Review} />
          <input ref="reviewContent" className='btn btn-info' type="submit" name="mensreview" />

          <div className="row">
            {this.state.reviews.map(review => (
              <Review source={review} key={review.key} />
            ))}
          </div>
        </ form>
      )
    }

    else {
      buttonArea = (
        <div>
          <button
            className='btn btn-secondary'
            onClick={this.handleComment.bind(this)}>
            Write a review
          </button>
        </div>
      );
    }


    return (
      
     // <div className='col-sm-8'>
     //   <div className='card card-view'>
          <div>
            {commentElement}
            {buttonArea}
          </div>
      //  </div>

     )
  }
}


export default Reviewhandle;