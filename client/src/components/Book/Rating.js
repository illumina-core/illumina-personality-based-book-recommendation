import React, { Component } from 'react'
import ReactStars from 'react-rating-stars-component'
import {rateBook} from '../Services'

export class Rating extends Component {

    changeRating = (newRating) => {
        rateBook(newRating).catch(err =>{
            alert(err)
        })
    }

    render() {
        return (
            <ReactStars 
                className="mx-auto"
                size={25}
                value={this.props.value}
                half={true}
                name="rating"
                onChange={newRating =>{changeRating(newRating)}}
            /> 
        )
    }
}

export default Rating
