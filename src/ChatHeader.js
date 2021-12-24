import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';

function ChatHeader({channelName}) {
    return (
        <div className='chat_header'>
            <div className='chat_header_left'>
                <h4><span className='chat_channel_hash'># </span>{channelName}</h4>
            </div>
            
            <div className='chat_header_right'>
                <NotificationsIcon/>
                <PushPinIcon/>
                <PeopleIcon/>
                <div className='chat_search'>
                    <input placeholder='Search'/>                   
                    <SearchIcon/>
                </div>
                <InboxIcon/>
                <HelpIcon/>

            </div>
        </div>
    )
}

export default ChatHeader
