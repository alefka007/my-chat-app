import React from 'react'
import classes from './Chats.module.css';


const Chats = () => {
    return (
        <div className={classes.chats}>
            <div className={classes.userChat}>
                <img src='https://avatars.mds.yandex.net/i?id=479ac8f998f110a919cd4bef582f525c-5332070-images-thumbs&ref=rim&n=33&w=150&h=150' alt='' />
                <div className={classes.userChatInfo}>
                    <span>Alex</span>
                    <p>Hello Vasya!</p>
                </div>
            </div>
            <div className={classes.userChat}>
                <img src='https://avatars.mds.yandex.net/i?id=479ac8f998f110a919cd4bef582f525c-5332070-images-thumbs&ref=rim&n=33&w=150&h=150' alt='' />
                <div className={classes.userChatInfo}>
                    <span>Alex</span>
                    <p>Hello Vasya!</p>
                </div>
            </div>
            <div className={classes.userChat}>
                <img src='https://avatars.mds.yandex.net/i?id=479ac8f998f110a919cd4bef582f525c-5332070-images-thumbs&ref=rim&n=33&w=150&h=150' alt='' />
                <div className={classes.userChatInfo}>
                    <span>Alex</span>
                    <p>Hello Vasya!</p>
                </div>
            </div>
            <div className={classes.userChat}>
                <img src='https://avatars.mds.yandex.net/i?id=479ac8f998f110a919cd4bef582f525c-5332070-images-thumbs&ref=rim&n=33&w=150&h=150' alt='' />
                <div className={classes.userChatInfo}>
                    <span>Alex</span>
                    <p>Hello Vasya!</p>
                </div>
            </div>
        </div>
    )
}

export default Chats