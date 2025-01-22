import React, { useState } from 'react';
import styles from "./UserList.module.css"
import { ClipLoader } from 'react-spinners';

const UserList = ({ users, onSelectUser }) => {
  
  const [imgLoaded, setImgLoaded] = useState({});

  const handleImgErr = (e, userId,src) => {
    e.target.src = '';
    setImgLoaded((prev) => ({ ...prev, [userId]: true }));
    console.error("Image failed to load from source:"+src)
  };

  return (
    <>
      <h1 className={styles.title}>All Users</h1>
      <ul className={styles.grid}>
        {users.map(user=>(
          <li
            key={user.id}
            onClick={()=> onSelectUser(user)}
            className={styles.card}
          >
            {!imgLoaded[user.id] && (
              <div className={styles.spinner}>
                <ClipLoader/>
              </div>
            )}
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className={styles.img}
              onLoad={() => setImgLoaded(prev => ({ ...prev, [user.id]: true }))}
              onError={e => handleImgErr(e, user.id,user.avatar)}
              style={{display:imgLoaded[user.id]?"block":"none"}}
            />
            <div className={styles.infoContainer}>
              <h2 className={styles.name}>{user.first_name} {user.last_name}</h2>
              <p className={styles.jobTitle}>{user.employment.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;