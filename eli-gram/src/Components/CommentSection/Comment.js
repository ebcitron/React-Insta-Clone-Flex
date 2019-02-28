import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

const Comment = props => {
  return (
    <div className="comment">
      <span className="commentText">
        {" "}
        <strong> <h3>{props.comment.username}</h3></strong>
        {" "}
        <p>{props.comment.text}</p>
      </span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
