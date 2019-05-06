import React from 'react';
import '../stylesheets/review.css';
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDdkwKYHkxhiBNEABcTOn4IzBBtnuMrLeU",
  authDomain: "shoeshopproject.firebaseapp.com",
  databaseURL: "https://shoeshopproject.firebaseio.com",
  projectId: "shoeshopproject",
  storageBucket: "shoeshopproject.appspot.com",
  messagingSenderId: "299630602786"
};
firebase.initializeApp(config);

const database = firebase.database();

const Generic_Review = "Review this product"

class Review extends React.Component {


  componentWillMount() {
    this.state = {
      comment: Generic_Review,
      submitMode: false
    }
  }


  componentDidMount() {
    const commentRef = database.ref("comment/");

    commentRef.on("value", snapshot => {
      this.setState({
        comment: snapshot.val()
      })
    })
  }

  writeData = e => {

    const commentValue = e.target.elements.inputText.value;

    database.ref("comment/").push(commentValue, function (error) {
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
      comment: this.refs.commentContent.value,
      submitMode: false
    });
  }

  render() {

    let commentElement, buttonArea;
    if (this.state.submitMode) {
      commentElement = (<textarea ref="commentContent" type="comment" className='col-sm-6' name="inputText" placeholder={Generic_Review}></textarea>)

      buttonArea = (
        <div>
          <button className='btn btn-info' onClick={this.handleSubmit.bind(this)} onSubmit={this.writeData.bind(this)}>
            Submit
                  </button>
        </div>
      )

    }
    else {
      commentElement = <h6>{Generic_Review}</h6>
      buttonArea = (
        <div>
          <button
            className='btn btn-secondary'
            onClick={this.handleComment.bind(this)}
          >
            Write a review
                  </button>

        </div>
      );
    }


    return (
      <div className='col-sm-8'>
        <div className='card card-view'>
          <div className='card-body'>
            {commentElement}
            {buttonArea}
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='card card-view'>
            <div className='card-body'>
              <li>{this.state.comment}</li>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Review.defaultProps = {
  comment: 'Comment',
};

export default Review;

