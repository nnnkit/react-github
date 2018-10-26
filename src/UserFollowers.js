import React, { Component } from 'react';

class UserFollowers extends Component {
  constructor() {
    super();
    this.state = {
      userFollowers: null 
    }
  }

componentDidMount(){
  const uri = `https://api.github.com/users/${this.props.username}/followers`;
  fetch(uri)
  .then(res => res.json())
  .then(data => this.setState({ userFollowers: data }))
}

  render() {
    return (
      <div className="eight columns">
        { this.state.userFollowers ? 
          (this.state.userFollowers.map(user => <p>{user.login}</p>))
          :
          ''
        }
      </div>
    );
  }
}

export default UserFollowers;