import React from 'react';
import  firebase from "firebase";


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
        showMode: false
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

  writeFireData = e => {
    e.preventDefault();
    const calledReview = database.ref("review/");
    calledReview.on("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        //item.key = childSnapshot.key;

        calledReview.push(item);
      });

      return calledReview;
    })
  }

  handleComment(e) {
    e.preventDefault();
    this.setState({
      submitMode: true
    });
  }

  handleShoeReview(e) {
    e.preventDefault();
    this.setState({
      reviews: [],
      showMode: true
    })
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
          <input className='btn btn-info' type="submit" name="submitButton" />
        </ form>)

      submittedReviews = (
        <form onClick={this.writeFireData.bind(this)}> <textarea type="text" className='col-sm-6' name="oldReview" />
          <input className='btn btn-info' type="submit" name="reviewButtom" />
        </form>
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
     
          <button
            className='btn btn-secondary'
            onClick={this.handleShoeReview.bind(this)}>
            Show Previous Reviews
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