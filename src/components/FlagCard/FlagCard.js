import React from 'react';
import './FlagCard.css';

const FlagCard = (props) => {
    console.log(props);
    return (
    <a onClick={() => props.selectFlag(props.flag)}>
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.imageLink} alt="Flag"/>
            </div>
        </div>
    </a>
    );
}

export default FlagCard;
