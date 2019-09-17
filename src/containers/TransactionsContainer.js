import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Transactions from '../components/blocks/transactions';
import { fetchTransactions } from '../redux/transactions/transactionsActions';

import {
  selectTransactionsList,
  selectLoading,
  selectHasErrored
} from '../redux/transactions/transactionsSelectors';

const TransactionsContainer = props => {
  const { fetchTransactions, loading, hasErrored } = props;
  useEffect(fetchTransactions, [fetchTransactions]);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : !hasErrored ? (
        <Transactions {...props} />
      ) : (
        <button onClick={fetchTransactions}>Loading</button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    transactionsList: selectTransactionsList(state),
    loading: selectLoading(state),
    hasErrored: selectHasErrored(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchTransactions }
)(TransactionsContainer);
