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
      postData: [],
      searchData: []
        };
  }

  componentDidMount() {
    this.setState({
      postData: dummyData;
    })
  }

  handleSearch = e => {
    const filtered = this.state.postData.filter( post => {
      if(post.username.includes(e.target.value)) {
        return post
      } 
    });
    this.setState({
      searchData: filtered
    })
  }

  render() {
    return (
      <div className="App">
        <div className="searchBar">
          <SearchBar searchPosts = {this.handleSearch} />
        </div>
        <div className = "postsContainer">
           <PostsContainer posts={
             this.state.searchData.length > 0 ?
             this.state.searchData :
             this.state.postData} />
        </div>
      </div>
    
    );
  }
}

export default App;
