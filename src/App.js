import React, { useState, useEffect } from 'react';
import Message from "./Message";
import {  FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase'
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import './App.css';

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
    setUsername(prompt("Please enter your name"))
  }, []);


  return (
    <div className="App">
      <div className="app__header">
        <h1 className="app__title"> Messenger <span><i class="fab fa-facebook-messenger app__logo"></i></span></h1>
        <h4>Welcome, {username} ❗</h4>
      </div>
    
      <div className="container-fluid app__container">
        <div className="row">
            <div className="col-12">
                <FlipMove>
                {
                  messages.map(({id , message}) => (
                    <Message className="app__message" key={id} username={username} message ={message} />
                  ))
                }
              </FlipMove>
            </div>

            <div className="col-12">
              <form className = "app__form">
                <FormControl className="app__formControl">
                  <Input className="app__input" placeholder="Enter your message" value={input} onChange={event => setInput(event.target.value)}  />
                  <IconButton className ="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
                    <SendIcon />
                  </IconButton>
                </FormControl>
            </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
