import React from 'react';
import PropTypes from 'prop-types';

import './style/search-form.scss';

const SearchFrom = ({ setCoords, changeSearchField, correct, searchField }) => {
  return (
    <form
      className="search-form"
      onSubmit={e => {
        e.preventDefault();
        setCoords();
      }}
    >
      <input
        className={`search-form__input ${!correct ? 'incorrect' : ''}`}
        placeholder="1.1.1.1"
        value={searchField}
        onChange={({ target }) => changeSearchField(target.value)}
      />
    </form>
  );
};

SearchFrom.propTypes = {
  setCoords: PropTypes.func,
  changeSearchField: PropTypes.func,
  correct: PropTypes.bool,
  searchField: PropTypes.string
};

export default SearchFrom;
