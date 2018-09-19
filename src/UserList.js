import React, { Component } from "react";

class UserList extends Component {
    render() {
        const { users, usersWhoLikedMovie } = this.props;

        if(!usersWhoLikedMovie || usersWhoLikedMovie.length === 0) {
            return <p>No one user liked that movie</p>
        }

        const listOfItems = usersWhoLikedMovie.map((id) => (
            <li key={id}>
                <p>{users[id].name}</p>
            </li>
        ));

        return <ul>{listOfItems}</ul>
    }
}

export default UserList;
