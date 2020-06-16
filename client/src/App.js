import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from '../src/components/Home/Home'
import { SearchResult } from './components/Search/SearchResult'
import { Navbar } from '../src/components/layout/Navbar'
import { Book } from './components/Book/Book'
import { Dashboard } from './components/Dashboard/Dashboard'
import { BookShelves } from './components/Bookshelves/BookShelves'

export class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchResult}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/book/dashboard" component={Dashboard}/>
        <Route path="/book-shelves" component={BookShelves}/>

        <Route path="/book/:id" render={props => (
          <React.Fragment>
            <Navbar />
            <Book />
          </React.Fragment>
        )}/>
      </Router>
    );
  }
}

export default App