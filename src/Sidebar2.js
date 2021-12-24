import React, { useEffect, useState } from 'react'
import './Sidebar2.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SidebarVoiceChannel from './SidebarVoiceChannel';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';

function Sidebar2() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(()=>{
        db.collection('channels').onSnapshot((snapshot) => 
            setChannels(snapshot.docs.map((doc)=>({
                id: doc.id, 
                channel: doc.data()
            })))
        );
    },[]);

    const addChannel = () =>{
        const channelName = prompt('Enter New Channel Name');

        if(channelName){
            db.collection('channels').add({
                channelName:channelName,
            });
        }
    }

    return (
        <div className='sidebar2'>
            <div className='sidebar_top'>
                <h3>Server 1</h3>
                <ExpandMoreIcon/>
            </div>
        
        <div className='chatAndvoice'>
            <div className='sidebar_channels'>
                <div className='sidebar_channels_header'>
                    <ExpandMoreIcon/>
                    <h5>TEXT CHANNELS</h5>
                    <AddIcon className='sidebar_add_icon' onClick={addChannel}/>
                </div>

                <div className='sidebar_channels_list'>
                    {channels.map(({ id, channel })=>(
                        <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                    ))}
                </div>
            </div>

            <div className='sidebar_voice_channel'>
                <div className='sidebar_voiceChannel_header'>
                    <ExpandMoreIcon/>
                    <h5>VOICE CHANNELS</h5>
                    <AddIcon/>
                </div>

                <div className='sidebar_voiceChannel_list'>
                    <SidebarVoiceChannel/>
                    <SidebarVoiceChannel/>
                    <SidebarVoiceChannel/>
                </div>
            </div>
        </div>
            
            <div className='sidebar_voicecall'>
                <Avatar src={user.photo} onClick={() => auth.signOut()}/>
                <div className='user_info'>
                    <h3>{user.name}</h3>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>

                <div className='voice_icons'>
                    <KeyboardVoiceIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            
            </div>
        </div>
    )
}

export default Sidebar2
