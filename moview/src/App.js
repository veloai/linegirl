import React from 'react';
// import logo from './logo.svg';

// import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    //movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json/sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    /*setTimeout(() => {
      this.getMovies();
      //this.setState({isLoading:false})
    }, 6000);*/
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((mv) => (
              <Movie
                key={mv.id}
                id={mv.id}
                year={mv.year}
                title={mv.title}
                summary={mv.summary}
                poster={mv.medium_cover_image}
                genres={mv.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
