import React, { useState, useEffect } from 'react';
import Message from "./Message";
import {  FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase'
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import ModalComponent from './ModalComponent.js'
import './App.css'



function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')



  const sendMessage = (event) => {
    //all the logic to send message
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username, 
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('')
  }

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id : doc.id , message: doc.data() })))
    })
  }, []);

 



  useEffect(() => {
    //run the code based on any condition
    //if the [] is blank, then this code runs ONCE when the app component loads
    // if [input ] is not blank, code runs everytime the input changes
  }, []);

  const getUsername = (input) => {
  
    setUsername(input)
  }

  

  return (
    <div className="App">
      <ModalComponent sendUsername={getUsername}/>
      <div className="app__header">
        <h1 className="app__title"> Messenger <span><i className="fab fa-facebook-messenger app__logo"></i></span></h1>
        <h4>Welcome, {username} ❗</h4>
      </div>
      <div className="app__container">
                <FlipMove>
                {
                  messages.map(({id , message}) => (
                    <Message className="app__message" key={id} username={username} message ={message}  timestamp={message.timestamp} />
                  ))
                }
              </FlipMove>
        
              <form className = "app__form">
              <FormControl className="app__formControl">
                <InputLabel color="primary">Enter Your Message 📧</InputLabel>
                  <Input className="app__input"  value={input} onChange={event => setInput(event.target.value)}
                  color="primary"
                />
                  <IconButton className ="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
                    <SendIcon />
                  </IconButton>
                </FormControl>
            </form>
      </div>
    </div>
  );
}

export default App;
