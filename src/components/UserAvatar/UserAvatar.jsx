import React from 'react';

import './UserAvatar.css';

const UserAvatar = (props) => {
    return(
        <div className="userAvatar">
            <img width={props.maxWidth} height={props.maxWidth} src={props.avatarURL} alt={props.altTxt} />
        </div>
    )
}

export default UserAvatar;

