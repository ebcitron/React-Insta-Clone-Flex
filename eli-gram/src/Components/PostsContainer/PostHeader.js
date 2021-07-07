import React from 'react';

import './Posts.css';

const PostHeader = props => {
    return (
        <div className="postHeader">
            <div className="headerUsername">
                <h3>{props.username}</h3>
            </div>
            <div className="headerImg">
                <img src={props.thumbnailUrl}></img>
            </div>
        </div>


    );
};


export default PostHeader;