import React, { Component } from "react";
import MovieCard from "./MovieCard";

class Dashboard extends Component {
    render() {
        const { userByMovie, movies, users } = this.props;

        const movieCards = Object.keys(movies).map(id => (
            <MovieCard
                key={id}
                users={users}
                usersWhoLikedMovie={userByMovie[id]}
                movieInfo={movies[id]}
            />
        ));

        return <ul>{movieCards}</ul>;
    }
}

export default Dashboard;
