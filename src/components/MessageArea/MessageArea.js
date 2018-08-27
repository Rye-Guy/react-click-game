import React from 'react';
import './MessageArea.css';

const MessageArea = (props) => {
    console.log(props.message);
    return(
        <div>
            {props.message}
        </div>
    );
}

export default MessageArea;