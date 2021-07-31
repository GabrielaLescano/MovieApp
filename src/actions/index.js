export function addMovieFavorite(payload) {
    return {
      type: "ADD_MOVIE_FAVORITE",
      payload,
    };
  }
  
  export function getMovies(titulo) {
    return function (dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then((response) => response.json())
        .then((obj) => {
          dispatch({
            type: "GET_MOVIES",
            payload: obj,
          });
        });
    };
  }
  
  export function getMovieDetail(id) {
    return function (dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
        .then((response) => response.json())
        .then((obj) => {
          dispatch({
            type: "GET_MOVIE_DETAIL",
            payload: obj,
          });
        });
    };
  }
  
  export function removeMovieFavorite(id) {
    return {
      type: "REMOVE_MOVIE_FAVORITE",
      payload: id,
    };
  }