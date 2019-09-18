import React from 'react';
import { connect } from 'react-redux';

import Map from '../components/blocks/map';
import SearchFrom from '../components/forms/searchFrom';

import {
  changeSearchField,
  setCoords
} from '../redux/searchFieldMap/searchFieldActions';

import {} from '../redux/searchFieldMap/searchFieldSelectors';

const TransactionsMapContainer = ({
  setCoords,
  changeSearchField,
  searchField,
  coords,
  correct
}) => {
  return (
    <>
      <SearchFrom {...{ setCoords, correct, searchField, changeSearchField }} />
      <Map {...coords} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    coords: state.search.coords,
    searchField: state.search.searchField,
    correct: state.search.correct,
    loading: state.search.loading
  };
};

export default connect(
  mapStateToProps,
  { changeSearchField, setCoords }
)(TransactionsMapContainer);
