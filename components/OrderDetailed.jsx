import React, { useState } from 'react';
import styles from '../styles/OrderDetail.module.css';

const OrderDetailed = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay Ksh {total} after delivery</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name Surname</label>
          <input
            onChange={(e) => setCustomer(e.target.value)}
            className={styles.input}
            placeholder="gerishon"
            type="text"
          />
        </div>
        <div className={styles.item}>
          <lable className={styles.label}>Phone number</lable>
          <input
            type="text"
            placeholder="+254 76543332"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <lable className={styles.label}>Address</lable>
          <textarea
            type="text"
            placeholder="Kikiuyu 202320"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={() =>handleClick()}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetailed;
