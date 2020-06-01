import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Book from './components/Bookshelves/Bookshelves'
import SearchResults from './components/SearchResults/SearchResults'
import Recommendations from './components/Recommendations/Recommendations'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={props => (
            <Home />
          )} />

        <Route path="/dash" component={Dashboard} />
        <Route path="/book" component={Book} />
        <Route path="/search" component={SearchResults} />
        <Route path="/rec" component={Recommendations} />
      </Router>
    )
  }
}

export default App