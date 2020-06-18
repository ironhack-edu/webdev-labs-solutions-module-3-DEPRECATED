import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import EpisodeDetails from './pages/EpisodeDetails';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <Header /> */}
      <main className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/episodes/:id' component={EpisodeDetails} />
          <Route exact path='/about' component={AboutUs} />
        </Switch>
        {/* <Home /> */}
      </main>
    </div>
  );
}

export default App;
