import React from 'react';

import './Comment.css';

const CommentInput = props => {

    handleInputChange = e => {
        this.setState({
          comment: e.target.value
        })
    
      }
    addNewComment = e => {
        event.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments,
                {
                    text: this.state.comment,
                    username: 'Eli'
                 }],
                 comment: '';
        })
    }


    return(
        <form onSubmit={this.addNewComment}>
            <input 
            name = 'comment'
            type="text"
            placeholder="Something To Say?"
            value ={props.value}
            onChange={this.handleInputChange}
            />
        </form>
    );
};

export default CommentInput;