export const selectTransactions = state => state.transactions;

export const selectTransactionsList = state =>
  selectTransactions(state).transactionsList;

export const selectLoading = state => selectTransactions(state).loading;

export const selectHasErrored = state => selectTransactions(state).hasErrored;
