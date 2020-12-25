import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Movie from './Movie';

class Catalog extends Component {
    
    render() {
        console.log(this.props);
        return (
            // <Router>
            <div className='Catalog'>
              <input type='text' />
              <button className='search'>Search</button>
             
            <div className='rentedMovies'>Rented: {this.props.movies.filter(s=> s.isRented).map(m=>{
                 return <Movie movie={m} key={m.id} rentTheMovie={this.props.rentTheMovie} removeFromRented={this.props.removeFromRented}  />})}
            </div>
             <div className='allMovies'> Catalog:{this.props.movies.filter(s=> !s.isRented).map(m=>{
                 return <Movie movie={m} key={m.id} rentTheMovie={this.props.rentTheMovie} removeFromRented={this.props.removeFromRented} />})}
            </div>

            </div>
        //   </Router>
        );
    }
}

export default Catalog