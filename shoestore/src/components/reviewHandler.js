import React from 'react';
import '../stylesheets/review.css';
import  firebase from "firebase";
import Review from './review'


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

/*

const config = {
  apiKey: "AIzaSyDdkwKYHkxhiBNEABcTOn4IzBBtnuMrLeU",
  authDomain: "shoeshopproject.firebaseapp.com",
  databaseURL: "https://shoeshopproject.firebaseio.com",
  projectId: "shoeshopproject",
  storageBucket: "shoeshopproject.appspot.com",
  messagingSenderId: "299630602786"
};
firebase.initializeApp(config);

*/

const database = firebase.database();


const Generic_Review = "Review this product"

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
        submitMode: false
      })
    })
  }

  writeData = e => {
    e.preventDefault();
    const commentValue = e.target.inputText.value;

    database.ref("review/").push(commentValue, function (error) {
      error ? alert("error") : console.log("it worked")
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

    let commentElement, buttonArea;
    if (this.state.submitMode) {
      
      commentElement = (
        <form onSubmit={this.writeData.bind(this)}> 
        <textarea ref="commentContent" type="text" className='col-sm-6' name="inputText" placeholder={Generic_Review} />
        <input className='btn btn-info' type="submit" name="submitButton" />
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
      
     // <div className='col-sm-8'>
     //   <div className='card card-view'>
          <div className='card-body'>
            {commentElement}
            {buttonArea}
          </div>
      //  </div>
   //   </div>

    )
  }
}

// reviews.defaultProps = {
//   review: 'Comment',
// };

export default Reviewhandle;

