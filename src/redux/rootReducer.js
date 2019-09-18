import { combineReducers } from 'redux';
import transactionsReducer from './transactions/transactionsReducer';
import searchFieldReducer from './searchFieldMap/searchFieldReducer';

export default combineReducers({
  transactions: transactionsReducer,
  search: searchFieldReducer
});
