import React from 'react';
import github from '../api/github';
import './App.css';
import NavBar from './NavBar';
import UserDetails from './UserDetails';

class App extends React.Component {
  state = {
    github: []
  }

  componentDidMount() {
    this.onSearch('github');
  }

  onSearch = async term => {
    const response = await github.get(`/users/${term}`);
    //console.log(response.data);
    this.setState({
      github: response.data
    });
    console.log(this.state.github);
  }

  render() {
    return (
      <div className="app">
        <NavBar onSearch={this.onSearch} />
        <UserDetails data={this.state.github} />
      </div>
    );
  }
}

export default App;
