import React, { useState } from 'react';
import './Movies.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';

function Movies({
  loggedIn, isLoading, findMovies, movies, messages, onCardLike, onCardDelete, likedMovies,
}) {
  const [filterIsOn, setFilterIsOn] = useState(false);

  const filterShortFilm = !filterIsOn ? movies : movies.filter(
    (movie) => movie.duration <= SHORT_MOVIE_DURATION,
  );

  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };


  return (
    <div className="movies">
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
        onCardLike={onCardLike}
      >
        {
          filterShortFilm.map((card) => (
            <MoviesCard
              key={card.id}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...card}
              // onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={() => onCardDelete(card)}
              isLiked={likedMovies.includes(card.id)}
            />
          ))
        }
      </MoviesCardList>
      <Footer />
    </div>
  );
}

Movies.propTypes = {
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
  onCardLike: PropTypes.func.isRequired,
  onCardDelete: PropTypes.func.isRequired,
  likedMovies: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Movies;
