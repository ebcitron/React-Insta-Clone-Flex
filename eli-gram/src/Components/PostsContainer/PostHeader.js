import React from 'react';

import './Posts.css';

const PostHeader = props => {
    return(
        <div className = "postHeader">
        <h3>{props.username}</h3>
        <img src='{props.thumbnailUrl}'></img>
        </div>
    
    
    );
};                       


export default PostHeader;