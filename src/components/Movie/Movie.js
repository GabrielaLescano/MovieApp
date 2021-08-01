import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getDetail(movieId);
  }

  render() {
    return (
      <div className="movie-detail">
        <h1>{this.props.movie.Title}</h1>
        <h2>{this.props.movie.Year}</h2>
        <span> <img src={this.props.movie.Poster} alt='img not found' height="300px" width="230px"/> </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDetail: (idMovie) => dispatch(getMovieDetail(idMovie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);