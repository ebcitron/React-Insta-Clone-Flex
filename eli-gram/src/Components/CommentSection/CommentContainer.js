import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';



class CommentContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            comments: props.comment

        };
    }
    render(){
        return(
            <div>
            {this.state.comments.map((c,i) => <Comment key={i} comment ={c} />)}

            <CommentInput />
         </div>
        );
    }
}

CommentContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
};









export default CommentContainer;