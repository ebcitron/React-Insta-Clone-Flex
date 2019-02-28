import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsContainer from "./Components/PostsContainer/PostsContainer";
import SearchBar from "./Components/SearchBar/SearchBarContainer";


// class app - sets this.state = dummyData and calls it posts
    // Than It renders our Searchbar and PostsContainer(containing all) to the screen

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <div className="searchBar">
          <SearchBar />
        </div>
        <div className = "postsContainer">
           <PostsContainer posts={this.state.posts} />
        </div>
      </div>
    
    );
  }
}

export default App;
