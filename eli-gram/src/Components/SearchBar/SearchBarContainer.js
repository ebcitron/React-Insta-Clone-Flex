import React from 'react';
import './SearchBar.css';
import {Form} from 'reactstrap';
import * as Icon from 'react-feather';



const SearchBar = props => {
  return(
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
      <Icon.Instagram className = 'instaIcon' />
      <img className = 'instaCursive'
      src="https:fontmeme.com/images/instagram-new-logo.png"
      alt = "Instagram Written"/>
      </div>
      <div className="searchBarStyling">
        <Form>
        <input type="search" name='searchBar' placeholder="Search" onChange = {props.searchPosts} />
        </Form>
      </div>
      <div className="social-wrapper">
        <div className="social">
          <Icon.Compass  className="fa fa-compass" />
        </div>
        <div className="social">
          <Icon.Heart className="fa fa-heart" />
        </div>
        <div className="social">
          <Icon.User className="fa fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;