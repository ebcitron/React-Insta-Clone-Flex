import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
//import CommentInput from "./CommentInput";
import { Input } from "reactstrap";
import * as Icon from "react-feather";
import "./Comment.css";

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes,
      comment: ""
    };
  }

  increaseLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  handleInputChange = e => {
    console.log(this.state.comment);
    this.setState({
      comment: e.target.value
    });
  };
  addNewComment = e => {
    console.log("commentAdded");
    e.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          text: this.state.comment,
          username: "Eli"
        }
      ]
    });
  };
  render() {
    return (
      <div>
        <div className="heartAndMessage">
          <Icon.MessageCircle className="icons" />
          <Icon.Heart className="icons" onClick={this.increaseLikes} />
        </div>
        <div className="likes">
          <p> {this.state.likes} Likes </p>
        </div>

        <div className="comments">
          {this.state.comments.map((c, i) => (
            <Comment key={i} comment={c} />
          ))}
        </div>
        <div className="input">
          <form onSubmit={this.addNewComment}>
            <input
              name="comment"
              type="text"
              placeholder="Something To Say?"
              value={this.state.comment}
              onChange={this.handleInputChange}
            />
          </form>
        </div>
      </div>
    );
  }

  // CommentContainer.propTypes = {
  //   comments: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       username: PropTypes.string,
  //       text: PropTypes.string
  //     })
  //   )
  // };
}
export default CommentContainer;
