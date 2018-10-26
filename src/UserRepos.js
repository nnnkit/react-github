import React, { Component } from 'react';

class UserRepos extends Component {
  constructor() {
    super();
    this.state = {
      userRepos: {}
    }
  }

  componentDidMount(){
    fetch(`https://api.github.com/search/users?q=${this.state.searchTerm}/repos`)
    .then(res => res.json())
    .then(data => this.setState({ userRepo: data }))
  }

  render() {
    return (
      <div className="row">
        <h1>UserRepos</h1>
      </div>
    );
  }
}

export default UserRepos;