import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import LineEllipsis from "react-lines-ellipsis";

function Movie({ poster, title, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => (
                        <MovieGenre genre={genre} key={index} />
                    ))}
                </div>
                <div className="Movie__Synopsis">
                    <LineEllipsis
                        maxLine="3"
                        text={synopsis}
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                    />
                </div>
            </div>
        </div>
    );
}
function MovieGenre({ genre }) {
    return <span className="Movie__Genre">{genre}</span>;
}

function MoviePoster({ poster, alt }) {
    return <img className="Movie__Poster" alt={alt} title={alt} src={poster} />;
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
};

export default Movie;
