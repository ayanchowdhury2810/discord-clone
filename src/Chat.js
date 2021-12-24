import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifBoxIcon from '@mui/icons-material/GifBox';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
import db from './firebase';
import firebase from 'firebase';

function Chat() {

    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const[input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        if(channelId){
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot)=>
            setMessages(snapshot.docs.map((doc)=> doc.data()))
            )
        }
    },[channelId]);

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').add({
            user: user,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        // setMessages([...messages, input]);
        setInput('');
    }

    return (
        <div className='chat'>
            <ChatHeader channelName={channelName}/>

            <div className='chat_messages'>
                {messages.map((message)=>(
                    <Message user={message.user} message={message.message} timestamp={message.timestamp}/>
                ))}
            </div>

            <div className='chat_input'>
                <AddCircleIcon/>
                <form>
                    <input disabled={!channelId} value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                    <button onClick={sendMessage} type='submit' >Send</button>
                </form>
                <div className='chat_icons'>
                    <CardGiftcardIcon/>
                    <EmojiEmotionsIcon/>
                    <GifBoxIcon/>
                </div>
            </div>
        </div>
    )
}

export default Chat
