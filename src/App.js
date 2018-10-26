import React, { Component } from 'react';
import SearchResult from './SearchResult';
import UserDetails from './UserDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResult: [],
      searchTerm: '',
      isLoading: true,
      error: null,
      selectedUser: ''
    }
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value, selectedUser: '' })
  }
  handleUserClick = (login) => {
    this.setState({ selectedUser: login})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let url = `https://api.github.com/search/users?q=${this.state.searchTerm}`;
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          searchResult: data.items,
          isLoading: false
        }))
      .catch(error => {
        if(!navigator.onLine){
          this.setState({error: 'No Internet'})
        } else {
          this.setState({ error })
        }
      });
  }
  render() {
    const { searchTerm, isLoading, error, searchResult, selectedUser } = this.state;
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              value={searchTerm}
              placeholder="Search Username"/>
          </form>
          <p>{error ? 'error' : ''}</p>
          {
            isLoading ?
              <p>Loading...</p>
              : 
              selectedUser ? <UserDetails username={selectedUser} /> : (searchResult.map((user,key) => 
                <SearchResult
                  userClick={this.handleUserClick}
                  key={key}
                  user={user} />
                ))
          }
        </div>
      </div>
    );
  }
}

export default App;