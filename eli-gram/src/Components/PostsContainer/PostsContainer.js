import React from 'react';
import Post from './Post';
import './Posts.css';


const PostsContainer = props => {
    return(
        <div className = "Posts">
            {props.posts.map(posts => 
                <Post key={posts.imageUrl} post = {posts} />
                
             
            )}

        </div>  

    );
};





export default PostsContainer;