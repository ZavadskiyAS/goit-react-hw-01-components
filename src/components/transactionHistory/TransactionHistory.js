import React from 'react';
import styles from './transaction.module.css';

export const TransactionHistory = ({ items = [] }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <TransactionHistoryItem key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);