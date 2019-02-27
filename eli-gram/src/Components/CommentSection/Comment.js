import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

const Comment = props => {
  return (
    <div className="comment">
      <span className="commenttext">
        {" "}
        <strong> {props.comment.username}</strong> {props.comment.text}{" "}
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
