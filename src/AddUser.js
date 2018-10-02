import React, { Component } from "react";

class AddUser extends Component {
    state = {
        user: {
            firstName: "",
            lastName: "",
            username: ""
        },

        userExist: false
    };

    userExist = currUsername => {
        const users = this.props.users;
        for (let user of users) {
            if (user.username === currUsername) {
                return true;
            }
        }
        return false;
    };

    handleSubmit = event => {
        event.preventDefault();
        const userExist = this.userExist(this.state.user.username);

        if (!userExist) {
            this.props.onAddUser(this.state.user);
        }

        this.setState(() => ({
            userExist
        }));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState(currState => ({
            ...currState,
            user: {
                ...currState.user,
                [name]: value
            }
        }));
    };

    isDisabled = () => {
        const { firstName, lastName, username } = this.state.user;
        return firstName === "" || lastName === "" || username === "";
    };

    render() {
        const { firstName, lastName, username } = this.state.user;

        return (
            <div>
                <h1>New User</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                            value={firstName}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button disabled={this.isDisabled()}>Add</button>
                </form>
                {this.state.userExist ? (
                    <p className="error">
                        You cannot add a user that already exists.
                    </p>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default AddUser;
