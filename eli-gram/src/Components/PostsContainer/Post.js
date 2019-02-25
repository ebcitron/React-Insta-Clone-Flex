import React from 'react';
import PostHeader from './PostHeader';
import CommentContainer from '../CommentSection/CommentContainer';

const Post = props => {
    return(
        <div className = "post">
            <PostHeader 
                username = {props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
                />
        
        <div>
            <img alt = "thumbnail" className = "image" src = {props.post.imageUrl} />
        </div>
            <CommentContainer comments = {props.post.comments} />
        </div>
    )


}
export default Post;