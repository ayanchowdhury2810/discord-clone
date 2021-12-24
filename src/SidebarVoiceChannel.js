import React from 'react'
import './SidebarVoiceChannel.css';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

function SidebarVoiceChannel() {
    return (
        <div className='voice_channels_list'>
            <VolumeUpIcon className='volume_icon' fontSize='small'/>
            <h4>VC1</h4>
        </div>
    )
}

export default SidebarVoiceChannel
