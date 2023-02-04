import React, { useContext, useState } from 'react'
import classes from './Search.module.css';
import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";
import { db } from '../../firebase/index';
import { AuthContext } from '../../context/AuthContext';


const Search = () => {
  const [userName, setUserName] = useState('');
  const [searchUser, setSearchUser] = useState(null);
  const [error, setError] = useState(false);

  const currentUser = useContext(AuthContext);

  const handleSearch = async () => {
    try {

      const q = query(
        collection(db, 'users'), where('displayName', '==', userName)
      )

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSearchUser(doc.data());
      });

    } catch (e) {
      setError(true)
    }

  }

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  const handleSelect = async () => {
    try {
      const combinedId = currentUser.uid > searchUser.uid ?
        currentUser.uid + searchUser.uid :
        searchUser.uid + currentUser.uid;

      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combinedId), {
          messages: []
        });
      }

      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [combinedId + '.userInfo']:{
          uid: searchUser.uid,
          displayName: searchUser.displayName,
          photoURL: searchUser.photoURL
        },
        [combinedId + '.date']: serverTimestamp()
      })

      await updateDoc(doc(db, 'userChats', searchUser.uid), {
        [combinedId + '.userInfo']:{
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL
        },
        [combinedId + '.date']: serverTimestamp()
      })

    } catch (e) {

    }

    
    setUserName('');
    setSearchUser(null);
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchForm}>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyDown={handleKey}
          type='text'
          placeholder='Найти пользователя...' />
      </div>
      {error && <div className={classes.searchMessage}>Пользователь не найден!</div>}
      {searchUser &&
        <div onClick={handleSelect}
          className={classes.userChat}>
          <img src={searchUser.photoURL} alt='фото'></img>
          <div className={classes.userChatInfo}>
            <span>{searchUser.displayName}</span>
          </div>
        </div>}
    </div>
  )
}

export default Search