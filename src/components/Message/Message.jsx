import React from 'react';
import classes from './Message.module.css';

const Message = () => {
  return (
    <div className={classes.message + ' ' + classes.opposite}>
      <div className={classes.messageInfo}>
        <img src='https://avatars.mds.yandex.net/i?id=14c5cfe3adae7015a4181814bbc70e83cb346f40-8191391-images-thumbs&n=13&exp=1' alt='photo' />
        <span>just now</span>
      </div>
      <div className={classes.messageContent}>
        <p>hello</p>
        <img src='https://avatars.mds.yandex.net/i?id=14c5cfe3adae7015a4181814bbc70e83cb346f40-8191391-images-thumbs&n=13&exp=1' alt='photo' />
      </div>
    </div>
  )
}

export default Message