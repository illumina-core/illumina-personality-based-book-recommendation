import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component";
import {rate_book} from '../Services'

export class Rating extends Component {

    render() {
        return (
            <ReactStars 
                className={this.props.className}
                size={this.props.size}
                edit={this.props.edit}
                value={this.props.value}
                half={true}
                name="rating"
                onChange={new_rating =>{
                    const rating = {
                        new_rating, 
                        id: this.props.id
                    }
                    rate_book(rating).then(res =>{
                        window.location.reload(false)
                    })
                    .catch(err =>{
                        alert(err)
                    })
                }}
            /> 
        )
    }
}

export default Rating
