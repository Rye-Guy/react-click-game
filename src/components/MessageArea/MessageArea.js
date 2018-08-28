import React from 'react';
import './MessageArea.css';

const MessageArea = (props) => {
    return(
        <div className='message-container'>
            <h3>Top Score: {props.topScore}</h3>
            <h2>{props.message}</h2>
            <h3>Current Score: {props.score}</h3>
        </div>
    );
}

export default MessageArea;