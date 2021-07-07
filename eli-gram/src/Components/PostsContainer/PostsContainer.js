import React from 'react';
import Post from './Post';
import './Posts.css';


// PostsContainer is what is rendered to the screen underneath the search bar.
// PostsContainer maps out each single post, and  renders them out as seperate divs, one after the other
// It is taking props from posts (in app), and designating the individual "Post" containers, each with there own key and a post

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