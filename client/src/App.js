import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { Switch } from "react-router-dom";
import { Home } from '../src/components/Home/Home'
import { SearchResult } from './components/Search/SearchResult'
import { Book } from './components/Book/Book'
import { Dashboard } from './components/Dashboard/Dashboard'
import { BookShelves } from './components/Bookshelves/BookShelves'
import { Profile } from './components/Profile/Profile'
import { CustomRoute } from './components/CustomRoute'

export class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <CustomRoute exact path="/" component={Home} />
          <CustomRoute path="/search" component={SearchResult} />
          <CustomRoute exact condition="logged_in" exact path="/dashboard" component={Dashboard} />
          <CustomRoute exact condition="logged_in" exact path="/profile" component={Profile} />
          <CustomRoute exact condition="logged_in" exact path="/book-shelves" component={BookShelves} />
          <CustomRoute exact condition="logged_in" exact path="/book/:id" component={Book} />
        </Switch>
      </Router>
    );
  }
}

export default App