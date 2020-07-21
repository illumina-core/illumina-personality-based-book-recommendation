import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Genres extends Component {

  render() {
    return (
      <div className="collapse" id={"genres_" + this.props.alph}>
        <div className="row pt-3" id={this.props.alph}>
          {
            this.props.gen_array.map((genres) =>(
                <div className="col" key={genres}>
                  <ul className="list-group">
                    {
                      genres.map((genre) =>(
                        <li className="list-group-item" key={genre}>
                          <Link className="text-decoration-none" to={"/search?genre=" + genre} style={{color:'#151B2D'}}>
                            {genre}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
            ))
          }
        </div>
    </div>
    )
  }
}

export default Genres      