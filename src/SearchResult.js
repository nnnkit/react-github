import React, { Component } from 'react';

class SearchResult extends Component {
  render() {
    const { avatar_url, login } = this.props.user;
    return (
      <div className="three columns" onClick={() => this.props.userClick(login)}>
        <img style={{height: '200px'}} src={avatar_url} alt={login} />
        <p>{login}</p>
      </div>
    );
  }
}


export default SearchResult;