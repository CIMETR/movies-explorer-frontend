import React from 'react';
import './Movies.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({isLoading}) {
    return (
        <div className="movies">
            <Header/>
            <SearchForm/>
            <MoviesCardList isLoading={isLoading}/>
            <button
                className="movies-cardlist__button"
                type="button"
                onClick
            >
                Ещё
            </button>
            <Footer/>
        </div>
    );
}

Movies.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default Movies;