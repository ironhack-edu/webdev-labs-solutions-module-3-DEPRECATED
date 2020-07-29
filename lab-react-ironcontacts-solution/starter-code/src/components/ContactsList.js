import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import contactsFromJSON from '../contacts.json';
// you can name it whatever you want when you import it
// the important part is the relative path
// this is only true for json files because they do not have a default exported value

export default class ContactsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // allContacts: contactsFromJSON,
      firstVisibleContacts: contactsFromJSON.slice(0, 5)
    };
  }

  // Iteration 1 | Display 5 Contacts
  // Display that array of 5 contacts in a <table> and display the picture, name, and popularity of each contact.

  showContacts() {
    return this.state.firstVisibleContacts.map((eachContact, index) => {
      return (
        <tr key={index}>
          <td>
            <img className='img-fluid img-thumbnail celebImg' src={eachContact.pictureUrl} alt='celebrity photo' />
          </td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity.toFixed(2)}</td>
          <td>
            <button className='btn btn-secondary' onClick={() => this.deleteContact(index)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  // Iteration 2 | Add New Random Contacts
  // Create a Add Random Contact button so that every time you click on this button, it adds a new random actor.

  addRandomContact() {
    console.log('random clicked');
    let randomIndex = Math.floor(contactsFromJSON.length * Math.random()); // random number between 0 and contactsFromJSON.length (excluded)
    let randomContact = contactsFromJSON[randomIndex];

    // Method 1
    // Create a copy of this.state.firstVisibleContacts
    let newList = [...this.state.firstVisibleContacts];
    // push or unshift in the copy you just created
    newList.unshift(randomContact);
    // save it in the state
    this.setState({
      firstVisibleContacts: newList
    });

    // Method 2
    // this.setState({
    //   firstVisibleContacts: [...this.state.firstVisibleContacts, randomContact]
    // })
  }

  // Iteration 3 | Sort Contacts By Name And Popularity

  sortContacts(field) {
    // Create a different compareFunction based on "field" value
    let compareFunction;
    if (field === 'name') {
      compareFunction = (a, b) => (a.name > b.name ? 1 : -1);
    } else if (field === 'popularity') {
      compareFunction = (a, b) => b.popularity - a.popularity;
    }

    // this.state.contacts.slice() create a copy of the array (this.state.allContacts)
    this.setState({
      firstVisibleContacts: this.state.firstVisibleContacts.slice().sort(compareFunction)
    });
  }

  // Iteration 4 | Remove Contacts
  deleteContact(theIndexOfTheOneToBeDeleted) {
    // Method 1
    // let copyOfContactsArr = this.state.firstVisibleContacts;
    // copyOfContactsArr.splice(theIndexOfTheOneToBeDeleted, 1);
    // this.setState({
    //   firstVisibleContacts: copyOfContactsArr
    // })

    //  Method 2
    this.setState({
      // filter creates a copy
      // in "(c,i)", "c" is the current contact, "i" is the current index
      firstVisibleContacts: this.state.firstVisibleContacts.filter((c, i) => i !== theIndexOfTheOneToBeDeleted)
    });
  }
  render() {
    return (
      <div className='container-fluid'>
        <h1>
          IronContacts <span role='img'> ❤️ </span>
        </h1>
        <button className='btn btn-secondary' onClick={() => this.addRandomContact()}>
          Add random
        </button>
        <button className='btn btn-primary' onClick={() => this.sortContacts('popularity')}>
          Sort by popularity
        </button>
        <button className='btn btn-success' onClick={() => this.sortContacts('name')}>
          Sort by name
        </button>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>Picture</th>
              <th scope='col'>Name</th>
              <th scope='col'>Popularity</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>{this.showContacts()}</tbody>
        </table>
      </div>
    );
  }
}
