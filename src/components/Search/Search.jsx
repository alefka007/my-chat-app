import React from 'react'
import classes from './Search.module.css'

const Search = () => {
    return (
        <div className={classes.search}>
            <div className={classes.searchForm}>
                <input type='text' placeholder='Найти пользователя...' />
            </div>
            <div className={classes.userChat}>
                <img src='https://avatars.mds.yandex.net/i?id=479ac8f998f110a919cd4bef582f525c-5332070-images-thumbs&ref=rim&n=33&w=150&h=150' alt=''></img>
                <div className={classes.userChatInfo}>
                    <span>Alex</span>
                </div>
            </div>
        </div>
    )
}

export default Search