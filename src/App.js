import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
// REACT ROUTER DOCUMENTATION:
// https://reacttraining.com/react-router/web/guides/quick-start
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Counter from "./components/Counter";
import Nav from "./components/Nav";
import DinnerList from "./components/DinnerList";
import GuestList from "./components/GuestList";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Topics from "./components/pages/Topics";

class App extends Component {
    render() {
        const menuItems = [
            { title: "Home", link: "/" },
            { title: "Portfolio", link: "/portfolio" },
            { title: "About Me", link: "/about" }
        ];

        const names = [
            { firstName: "Steve", lastName: "Sonoa" },
            { firstName: "Brad", lastName: "Pitt" }
        ];

        return (
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/topics">Topics</Link>
                    <a href="/">DANGEROUS</a>
                </div>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/about/:name/:bookId/:id" component={About} />
                    <Route path="/topics" component={Topics} />
                </div>
                <div>
                  <h1>THIS COUNTER IS INSIDE APP:</h1>
                  <Counter name="Natalie" adj="boring" />
                </div>
            </Router>

            // <div className="App">
            //   <header className="App-header">
            //     <Nav items={menuItems} />
            //     <img src={logo} className="App-logo" alt="logo" />

            //     <GuestList
            //       guests={names}
            //       eventTitle="React Training Meeting"
            //     />

            //     <Counter name="Natalie" adj="boring" />

            //   </header>
            // </div>
        );
    }
}

export default App;
