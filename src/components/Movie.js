import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Movie extends Component {
    rentTheMovie = () => {
        this.props.rentTheMovie(this.props.movie.id)
    }

    removeFromRented = () => {
        this.props.removeFromRented(this.props.movie.id)
    }

    render() {
        return (
            <div className='movie'>
                <Link to={`/catalog/movie/${this.props.movie.title}`}>
                    <img className='movieImage' src={this.props.movie.img} alt="" />
                    <div className='movieName'>{this.props.movie.title}</div>
                </Link>
                    <span onClick={this.rentTheMovie} className='add'>+</span>
                    <span onClick={this.removeFromRented} className='remove'>-</span>
               
            </div>
        )
    }
}

export default Movie