import React, { Component } from 'react';
import './App.css';

import {Switch, Route, Link} from 'react-router-dom';
import AllBeers from './components/allBeers';
import RandomBeer from './components/randomBeer';
import NewBeer from './components/newBeer';



import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      theBeers: [],
      ready: false
    }
  }


  fetchTheBeers(){
      axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then(response => {
        this.setState({
          // get just the latest created 20 beers
          theBeers: response.data.reverse().slice(0,20),
          ready: true
        })
      })
      .catch(err => console.log(err))   
  }

  render() {
    return (
      <div className="App">

        <Link to="/all-beers">See All Beers</Link>
        <Link to="/random">Random Beer</Link>
        <Link to="/new">Add New</Link>

        {this.fetchTheBeers()}
        
        <Switch>
          <Route exact path="/all-beers" render={props =>
            <AllBeers
              {...props}
              beers={this.state.theBeers}
              ready={this.state.ready}
              beersCount={this.state.theBeers.length}
            /> 
          } />

          <Route exact path="/random" render={props =>
            <RandomBeer
              {...props}
              beers={this.state.theBeers}
              ready={this.state.ready}
            /> 
          } />

          <Route exact path="/new" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
