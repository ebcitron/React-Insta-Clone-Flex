import React from 'react';
import Comments from './Comments';


// import CommentInput from './CommentInput';


import PropTypes from 'prop-types';


class CommentContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            comments: props.comments

        };
    }
    render(){
        return(
            <div>
            {this.state.comments.map((c,i) => <Comments comment= {c} key = {i} />)}
{/*           
            <CommentInput />
            </div> */}
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