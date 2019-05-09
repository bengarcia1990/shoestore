import React from 'react';
<<<<<<< HEAD
import  firebase from "firebase";
=======
import '../stylesheets/review.css';
import firebase from "firebase";
>>>>>>> 4114e4e5ee25e2aa8a1b3b09ca32231ea335c167


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
      reviews: [],
      submitMode: false
    };
  }

  componentDidMount() {
    const commentRef = database.ref("review/");

      commentRef.on("value", snapshot => {
      console.log(snapshot.val())
      this.setState({
        review: snapshot.val(),
        submitMode: false,
      })
    })

  }

  writeData = e => {
    e.preventDefault();
    const reviewValue = e.target.inputText.value;

    database.ref("review/").push(reviewValue, function (error) {
      error ? alert("error") : console.log("it worked", reviewValue)
    }
    )
  }

  handleComment(e) {
    e.preventDefault();
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


  render() {

    let commentElement, buttonArea, submittedReviews;
    if (this.state.submitMode || this.state.showMode) {
      commentElement = (
        <form onSubmit={this.writeData.bind(this)}>
          <textarea ref="commentContent" type="text" className='col-sm-6' name="inputText" placeholder={Generic_Review} />
          <input ref="reviewContent" className='btn btn-info' type="submit" name="submitButton" />
        </ form>)
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
<<<<<<< HEAD
      
     // <div className='col-sm-8'>
     //   <div className='card card-view'>
          <div>
            {commentElement}
            {buttonArea}
          </div>
      //  </div>
=======
>>>>>>> 4114e4e5ee25e2aa8a1b3b09ca32231ea335c167

      // <div className='col-sm-8'>
      //   <div className='card card-view'>
      <div className='card-body'>
        {commentElement}
        {buttonArea}
        <div className='submittedReviews'>
          {submittedReviews}
        </div>
      </div>

      //  </div>

    )
  }
}


export default Reviewhandle;