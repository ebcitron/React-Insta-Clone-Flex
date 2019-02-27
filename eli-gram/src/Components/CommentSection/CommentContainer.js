import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import './Comment.css';


const CommentContainer = props => {
    return(
        <div>
        <div className = "comments">

        {props.comments.map((c,i) => ( <Comment key = {i} comment = {c} />
        ))}
        </div>
  
        <CommentInput />
        </div>
  )
}



    CommentContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
    }  ;









export default CommentContainer;

