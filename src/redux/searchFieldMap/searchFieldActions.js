import { CHANGE_FIELD, CORRECT, SET_COORDS } from './searchFieldTypes';
import { validateIP } from '../../helpers';

export const changeSearchField = searchField => (dispatch, state) => {
  dispatch(
    validateIP(searchField)
      ? { type: CORRECT, correct: true }
      : { type: CORRECT, correct: false }
  );
  dispatch({ type: CHANGE_FIELD, searchField });
};

export const setCoords = () => (dispatch, state) => {
  const { searchField, correct } = state().search;

  fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=4eb95bd1d7614379ae99ba725df96815${
      searchField === 0 ? '' : correct ? '&ip=' + searchField : ''
    }`
  )
    .then(resp => resp.json())
    .then(coords => {
      dispatch({
        type: SET_COORDS,
        coords: { lat: +coords.latitude, lng: +coords.longitude }
      });
    });
};
