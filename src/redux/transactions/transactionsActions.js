import { resolvePath } from '../../helpers/index';
import { FETCH_TRANSACTIONS, HAS_ERRORED, LOADING } from './transactionsTypes';

export const setError = hasErrored => ({ type: HAS_ERRORED, hasErrored });

export const loading = loading => ({ type: LOADING, loading });

export const fetchTransactions = () => dispatch => {
  dispatch(loading(true));

  fetch(resolvePath('transactions.json'))
    .then(resp => resp.json())
    .then(transactions => {
      dispatch(loading(false));
      dispatch(setError(false));

      dispatch({
        type: FETCH_TRANSACTIONS,
        transactionsList: transactions.transactionsList
      });
    })
    .catch(() => {
      dispatch(setError(true));
      dispatch(loading(false));
    });
};
