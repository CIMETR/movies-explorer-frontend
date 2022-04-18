import React, { useState } from 'react';
import './SavedMovies.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';

function SavedMovies({
  isLoading, loggedIn, findMovies, movies, messages, onCardDelete
}) {
  const [filterIsOn, setFilterIsOn] = useState(false);

  const filterShortFilm = !filterIsOn ? movies : movies.filter(
    (movie) => movie.duration <= SHORT_MOVIE_DURATION,
  );

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  return (
    <div className="saved-movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        findMovies={findMovies}
        isLoading={isLoading}
        onFilterClick={onFilterClick}
      />
      <MoviesCardList
        isLoading={isLoading}
        moviesCards={filterShortFilm}
        messages={messages}
      >
        {
          (filterShortFilm.map((card) => (
            <MoviesCard
              key={card.movieId}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...card}
              onCardDelete={onCardDelete}
            />
          )).reverse())
        }
      </MoviesCardList>
      <Footer />
    </div>
  );
}

SavedMovies.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  findMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  messages: PropTypes.shape({
    regForm: PropTypes.string,
    authForm: PropTypes.string,
    profileForm: PropTypes.string,
    searchForm: PropTypes.string,
    auth: PropTypes.string,
  }).isRequired,
  onCardDelete: PropTypes.func.isRequired,
};

export default SavedMovies;
