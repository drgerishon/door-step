import React from 'react';
import styles from '../styles/pizza.module.css';
import PizzaCard from './PizzaCard';

const Pizza = ({pizzalist}) => {
  return <div className={styles.container}>
    <h1 className={styles.title}>THE BEST PIZZA IN KANAIRO</h1>
    <p className={styles.desc}>
    I am a positive, enthusiastic and self-motivated person who understands the importance of customer service in a role of this nature. I believe the life experiences I have gained so far would enable me to deal with your customers in a positive manner in line with the expectations of the role, and also in respect of the code of conduct required by your organization.
    </p>
    <div className={styles.wrapper}>
      {pizzalist.map((pizza) =>(
        <PizzaCard key={pizza._id} pizza={pizza}/>
      ))}
     
    </div>
  </div>;
};

export default Pizza;
