import React from 'react';
import styles from './friendList.module.css'

export const FriendList = ({friends}) => (
<ul className={styles.friendList}>{friends.map((per) => (
        <FriendListItem key={per.id} data={per}/>
    ))} 
</ul>
  );

  const FriendListItem = ({data:{avatar, name, isOnline}}) => (
    <li className={styles.item}>
    <span className={isOnline ? styles.status : styles.isActive}></span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
  )
  