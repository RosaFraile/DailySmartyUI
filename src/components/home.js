import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./search-bar";
import RecentPosts from './recent-posts';

export default class Home extends Component {
  handleFormSubmit = function(query) {
    console.log("trying to handle submit for query", query);
    this.props.history.push("/results");
  }

  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
          <SearchBar onSubmit={(query) => this.handleFormSubmit(query)}/>
          <RecentPosts />
        </div>
      </div>
    );
  }
}
