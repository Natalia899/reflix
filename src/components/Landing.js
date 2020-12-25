import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Landing extends Component {
    constructor() {
        super()
          this.state = {
            users: ['user1', 'user2', 'user3']
          }
      }
    render() {

        return (
            <div class='users'>{this.state.users.map(u=>{
                return <Link to="/catalog"><div class='user' key={Math.random()}> {u}</div></Link>
            })}</div>
        );
    }
}

export default Landing