import React from 'react';
import './SearchBar.css';
import {Form, div} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-feather';
import styled from 'styled-components';

const divy = styled.div`
background: green
`;

const SearchBar = props => {
  return(
    
    <divy className="search-bar-wrapper">
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
    </divy> 
  );
};

export default SearchBar;