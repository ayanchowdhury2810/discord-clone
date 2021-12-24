import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Chat from './Chat';
import Sidebar1 from './Sidebar1';
import Sidebar2 from './Sidebar2';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user is ', authUser);
      if(authUser){
        // user logged in
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            photo: authUser.photoURL,
            name: authUser.displayName
          })
        );
      }else{
        // user logged out
        dispatch(logout());
      };
    });
    
  }, [dispatch])

  return (
    <div className="App">
     {  user ? (
        <>
          <Sidebar1/>
          <Sidebar2/>
          <Chat/>
        </>
      ) : (
         <Login/>
      )}
      
    </div>
  );
}

export default App;
