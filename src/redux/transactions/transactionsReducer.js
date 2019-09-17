import { FETCH_TRANSACTIONS, LOADING, HAS_ERRORED } from './transactionsTypes';

const transactionsReducer = (
  store = { transactionsList: [], loading: false, hasErrored: false },
  action
) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return {
        ...store,
        transactionsList: action.transactionsList
      };

    case LOADING:
      return { ...store, loading: action.loading };

    case HAS_ERRORED:
      return { ...store, hasErrored: action.hasErrored };

    default:
      return store;
  }
};

export default transactionsReducer;
