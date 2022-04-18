import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';
import {useFormWithValidation} from '../../hooks/useForm';
import iconSearchInput from '../../images/search-icon-form.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({findMovies, isLoading, onFilterClick}) {

    const {
        values,
        handleChange,
        resetForm,
    } = useFormWithValidation();

    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!values.movie) {
            setError('Нужно ввести ключевое слово');
        } else {
            findMovies(values.movie);
            setError('');
            resetForm();
        }
    }
    return (
        <section className="search-form">
            <div className="search-form__container">
                <form className="search-form__form"
                      title="Поиск фильма"
                      name="search-film"
                      onSubmit={handleSubmit}>
                    <div className="search-form__film-container">
                        <img src={iconSearchInput} alt="Значок с лупой"
                             className="search-form__film-icon"/>
                        <input className="search-form__film-input"
                               onChange={handleChange}
                               id="movie"
                               name="movie"
                               type="text"
                               maxLength="100"
                               placeholder="Фильм"
                               disabled={isLoading}/>
                        <span className="search-form__input-error" id="movie-error">{error}</span>
                        <button className="search-form__film-find"
                                type="submit">
                            Найти
                        </button>
                    </div>
                    <FilterCheckbox
                      onFilterClick={onFilterClick}
                    />
                </form>
            </div>
        </section>
    );
}

SearchForm.propTypes = {
    findMovies: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default SearchForm;