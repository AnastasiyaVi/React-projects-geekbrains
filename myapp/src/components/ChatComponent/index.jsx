import React from 'react';
import './ChatComponent.css';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export const ChatComponent = (props) => {
    return (

        <ListItem action="true" alignItems="flex-start">


            <ListItemAvatar>
                <Avatar alt="" src={props.chat.img} />
            </ListItemAvatar>
            <p className="ContactName"> {props.chat.name} </p>

        </ListItem>



    );
}