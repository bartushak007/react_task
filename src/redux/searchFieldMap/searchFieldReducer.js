import { CHANGE_FIELD, CORRECT, SET_COORDS } from './searchFieldTypes';

const searchFieldReducer = (
  store = {
    searchField: '',
    correct: true,

    coords: { lat: 32.0678, lng: 34.7647 }
  },
  action
) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...store,
        searchField: action.searchField
      };

    case CORRECT:
      return {
        ...store,
        correct: action.correct
      };

    case SET_COORDS:
      return {
        ...store,
        coords: action.coords
      };

    default:
      return store;
  }
};

export default searchFieldReducer;
