
/*
const Generic_Review = "Review this product"

class Review extends Component {

    componentWillMount() {
        this.state = {

            title: GENERIC_BOOK_TITLE,
            commentMode: false
        }
    }

    handleComment() {
        this.setState({
            commentMode: true
        });
    }

    handleSubmit() {
        this.setState({
            title: this.refs.titleContent.value,
            commentMode: false
        });
    } 

    render() {

        let titleElement, buttonArea;
        if (this.state.commentMode) {
            titleElement = (<textarea ref="titleContent" className="title-textarea" placeholder={this.state.title}></textarea>)

            buttonArea = (
                <div>
                    <button className='btn btn-info' onClick={this.handleSubmit.bind(this)}>
                        Submit
                  </button>
                </div>
            )

        }
        else {
            titleElement = <h6>{this.state.title}</h6>
            buttonArea = (
                <div>
                    <button
                        className='btn btn-warning'
                        onClick={this.handleEdit.bind(this)}
                    >
                        Write a review
                  </button>

               </div>     
            );
        }


        return (
            <div className='col-sm-4'>
                <div className='card card-view'>
                    <div className='card-body'>
                        {titleElement}
                        {buttonArea}
                    </div>

                </div>
            </div>
        )
    }


    Review.defaultProps = {
        title: 'Title',
    };

    export default Review;

*/








/*
function myFunction() {
    var element = document.getElementById("myDIV");
    if (element.classList) { 
      element.classList.toggle("mystyle");
    } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("mystyle");
      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("mystyle");
        element.className = classes.join(" "); 
    }
  }
  */

  //import firebase from "firebase";

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

  const database = firebase.database();
*/



/*
class Review extends React.Component {
    constructor() {
      super();
      this.state = {
          text: "Review this product"
      }
    }

   myFunction() {
      var element = document.getElementById("comment");
      element.classList.toggle("myform");
    }   

 render() {
        return (
          <div className="review" >
            <footer className="Home-footer">
             

             <div className='col-md-10 offset-md-1' id="comment" >
                 <h6>{this.state.text}</h6>
                 <button className='btn btn-secondary' onclick="myFunction()">Write a review</button><br/>
                 
                 <form className="myForm" onSubmit={this.writeData}>
                   <textarea type="text" name="inputText" className="title-textarea" placeholder="Write Comment"></textarea><br/>
                   <button className='btn btn-secondary' name="submitButton">Submit</button>
                 </form>
              </div>
            </footer>
          </div>
        );
      }
    }
    
    export default Review;   

    */