import React, { Component } from 'react'

export class Genres extends Component {

  render() {

    const url = window.location.protocol + "//" + window.location.host
    
    return (
      <div className="collapse" id={"genres_" + this.props.alph}>
        <div className="row pt-3" id={this.props.alph}>
          {
            this.props.gen_array.map((genres) =>(
                <div key={genres} className="col">
                  <ul className="list-group">
                    {
                      genres.map((genre) =>(
                        <li key={genre} className="list-group-item">
                          <a className="text-decoration-none" href={url + "/search?genre=" + genre} style={{color:'#151B2D'}}>
                            {genre}
                          </a>
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