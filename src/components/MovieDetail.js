import React, { Component } from 'react';



class MovieDetail extends Component {
    
    render() {
        

        let relTitle = this.props.match.params.title
        const movie = this.props.movies.find(m=> m.title == relTitle)

console.log('hiii');
        return (
           <div className='movieInfo'>
             <div className='title'>{movie.title}</div>
             <div className='year'>{movie.year}</div>
             <div className='description'>{movie.descrShort}</div>
             <img className='movieDetImage' src={movie.img} alt="" />
           </div>
        )
    }
}


export default MovieDetail