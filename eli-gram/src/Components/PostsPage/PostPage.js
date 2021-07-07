import LoginPage from "../Login/LoginPage";
APP.js



const Show = withConditionalRender((postPage), (LoginPage))

return (
    <div className="App">
    <LoginPage />
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