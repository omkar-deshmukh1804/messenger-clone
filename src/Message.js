import React, {forwardRef} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Message.css';

const Message = forwardRef(({username, message, timestamp}, ref) => {
    const isUser = username === message.username;
    
    return (
        <div>
            <Card  ref={ref}
            className={`message ${isUser ?  'message__user' : 'message__guest'}`}
            >
                <span style={{display : isUser ? 'none' : 'inline'}} className="message__username"> {!isUser && `${message.username || 'unknown user' }`}</span> 
                <CardContent>
                  
                    <Typography
                        
                            color = "white"
                            variant="h5"
                            component="h2"
                        >
                         {message.message}
                        </Typography>
                </CardContent>
                {timestamp && <span className="message__datetime">{`${new Date(timestamp.seconds * 1000).toLocaleDateString('en-IN')} , ${new Date(timestamp.seconds * 1000).toLocaleTimeString()}`}</span>}
                </Card>
        </div>
    );
})

export default Message;
