import React, {forwardRef} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Message.css';

const Message = forwardRef(({username, message}, ref) => {
    const isUser = username === message.username;

    return (
        <div>
            <Card  ref={ref}
            className={`message ${isUser ?  'message__user' : 'message__guest'}`}
            >
                    <CardContent>
                    <Typography
                        
                            color = "white"
                            variant="h5"
                            component="h2"
                        >
                           {!isUser && `${message.username || 'unknown user' } says`}  {message.message}
                        </Typography>
                    </CardContent>
                </Card>
        </div>
    );
})

export default Message;