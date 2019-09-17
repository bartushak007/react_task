import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../shared/icon';
// import Image from '../../shared/image';
import './style/transactions.scss';

const Transactions = ({ transactionsList, map }) => {
  const renderTransactionsItem = (props, i) => (
    <TransactionsItem key={i} {...props} i={i} />
  );

  return (
    <div className="wrap-content transactions__container">
      <div className="transactions__inner ">
        <div className="transactions__item">
          <div className="transactions__cell-num title">№</div>
          <div className="transactions__cell-transaction title">
            Transactions
          </div>
          <div className="transactions__cell-date title">Date</div>
          <div className="transactions__cell-amount title">Amount</div>
        </div>
        {transactionsList.map(renderTransactionsItem)}
      </div>
      <div className="transactions__inner ">{/* <Image src={map} /> */}</div>
    </div>
  );
};

const TransactionsItem = memo(({ transaction, date, amount, i }) => {
  return (
    <div className="transactions__item">
      <div className="transactions__cell-num">{i + 1}</div>
      <div className="transactions__cell-transaction">{transaction}</div>
      <div className="transactions__cell-date">{date}</div>
      <div className="transactions__cell-amount">
        <span className="transactions__amount">
          <Icon icon="dollar" /> {amount}
        </span>
      </div>
    </div>
  );
});

Transactions.propTypes = {
  transactionsList: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      amount: PropTypes.string
    })
  ),

  map: PropTypes.string
};

export default Transactions;
