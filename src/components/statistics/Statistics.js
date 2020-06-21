import React from 'react';
import styles from './statistics.module.css'

 

export const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
  
    <ul className={styles.statList}>{stats.map((per) => (
        <ListStatistics key={per.id} data={per}/>
    ))}</ul>
  </section>
  );

  const ListStatistics = ({data:{label, percentage}}) => (
    <li className={styles.item}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}> {percentage}%</span>
  </li>
  )
  