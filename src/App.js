import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Counter from './components/Counter';
import Nav from './components/Nav';
import DinnerList from './components/DinnerList';
import GuestList from './components/GuestList';

class App extends Component {
  render() {
    const menuItems = [
      { title: 'Home', link: '/'},
      { title: 'Portfolio', link: '/portfolio'},
      { title: 'About Me', link: '/about'}
    ];

    const names = [
      { firstName: 'Steve', lastName: 'Sonoa'},
      { firstName: 'Brad', lastName: 'Pitt'}
    ];

    return (
      <div className="App">
        <header className="App-header">
          <Nav items={menuItems} />
          <img src={logo} className="App-logo" alt="logo" />

          <GuestList
            guests={names}
            eventTitle="React Training Meeting"
          />
          
          <Counter name="Natalie" adj="boring" />
          
        </header>
      </div>
    );
  }
}

export default App;
