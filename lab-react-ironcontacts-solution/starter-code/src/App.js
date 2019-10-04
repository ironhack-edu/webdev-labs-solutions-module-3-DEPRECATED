import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ContactList from './components/contact-list';
class App extends Component {
  render() {
    return (
      <div>
        <ContactList />
      </div>
    );
  }
}

export default App;
