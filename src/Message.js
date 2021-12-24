import { Avatar } from '@mui/material';
import React from 'react';
import './Message.css';

function Message({user, message, timestamp}) {
    return (
        <div className='message'>
            <Avatar src={user.photo}/>
            <div className='message_info'>
                <h4>{user.name } <span className='timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
            
        </div>
    )
}

export default Message
