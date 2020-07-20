import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import { search_book } from '../Services'
import './Admin.css'

// Imagine you have a list of books that you'd like to autosuggest.
var Books = [];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if(inputLength < 4){
      return []
  }else{
    search_book('title=' + inputValue).then(res =>{
        var data = JSON.parse(res.data.books)
        var books = []
        for (const [index, value] of data.entries()) {
            books.push(value)
          }
        Books = books
        
    })
    return Books.filter(Book =>
        Book.book_title.toLowerCase().slice(0, inputLength) === inputValue
    );
  }
  
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions.


export class SearchBook extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
      if(typeof newValue === 'object'){
          this.setState({value: newValue.book_title})
          this.props.selectBook(newValue)
      }else{
          this.setState({
            value: newValue
          });
      }
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderSuggestion = suggestion => (
    <div className="row shadow mt-3 p-2">
        <div className="col" >
            <img alt={suggestion.book_title} width="70" src={suggestion.cover_image} className="rounded img-fluid" />
        </div>

        <div className="col-8">
            <h3 className="font-weight-light" style={{fontSize:'27px'}}>
                {suggestion.book_title}
            </h3>
        </div>
    </div>
    )

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Book Title',
      className: 'form-control mx-auto list-unstyled',
      value,
      id: "edit_book_id",
      onChange: this.onChange
    };
    
    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default SearchBook