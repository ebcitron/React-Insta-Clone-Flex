import React from "react";
import "./Posts.css";


import PostHeader from "./PostHeader";

import CommentContainer from "../CommentSection/CommentContainer";

const Post = props => {
  return (
    <div className="post">
      <div className="header">
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}/>
      </div>

      <div className="postImage">
        <img alt="thumbnail" className="image" src={props.post.imageUrl} />
      </div>
      <div className ='comments'>
      <CommentContainer comments={props.post.comments} likes={props.post.likes} />
      </div>
    </div>
  );
};

export default Post;
