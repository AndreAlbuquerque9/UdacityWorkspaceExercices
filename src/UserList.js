import React, { Component } from "react";
import User from "./User";
import PropTypes from "prop-types";

class UserList extends Component {
    state = {
        showGamesPlayed: true
    };

    toggleGamesPlayedPanel = () =>
        this.setState(oldState => ({
            showGamesPlayed: !oldState.showGamesPlayed
        }));

    render() {
        const { showGamesPlayed } = this.state;
        const { users } = this.props;

        const gamesPlayedButton = (
            <div>
                <button
                    className="smallButton"
                    onClick={this.toggleGamesPlayedPanel}
                >
                    {showGamesPlayed ? "Hide" : "Show"}
                    the number of games played
                </button>
            </div>
        );

        return (
            <div>
                {users && users.length > 0 ? gamesPlayedButton : ""}
                <ol>
                    {users.map(user => (
                        <User
                            key={user.username}
                            user={user}
                            showGamesPlayed={showGamesPlayed}
                        />
                    ))}
                </ol>
            </div>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;
