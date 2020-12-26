import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [{ id: 1, name: 'user1', budget: 10, rentedMovies: [] }, { id: 2, name: 'user2', budget: 15, rentedMovies: [] },
            { id: 3, name: 'user3', budget: 3, rentedMovies: [] },]
        }
    }

    render() {
        return (
            <div class='users'>{this.state.users.map(u => {
                return <Link to="/catalog"><div className='user' key={Math.random()}> {u.name}</div></Link>
            })}</div>
        )
    }
}

export default Landing