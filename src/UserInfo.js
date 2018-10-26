import React, { Component } from 'react';

class UserInfo extends Component {

  render() {
    const { login } = this.props.userData;
    return (
      <div className="five columns">
        <h1>{login}</h1>
      </div>
    );
  }
}

export default UserInfo;