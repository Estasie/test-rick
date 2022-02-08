import React from 'react';
import './characterThumb.css';

function CharacterThumb({src}) {

    return (
        <img className={"character-thumb"} src={src} />
    );
}

export default CharacterThumb;