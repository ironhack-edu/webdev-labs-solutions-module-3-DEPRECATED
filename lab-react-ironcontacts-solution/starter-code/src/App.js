import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ContactsList from './components/ContactsList';
class App extends Component {
  render() {
    return (
      <div>
        <ContactsList />
      </div>
    );
  }
}

export default App;
