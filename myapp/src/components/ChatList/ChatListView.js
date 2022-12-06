import React from "react";
import "./ChatComponent.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const ChatListView = ({ chats, onDelete }) => {
  console.log(chats);
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {chats.map((item) => (
          <ListItem
            action="true"
            alignItems="flex-start"
            justify-content="space-between"
            key={item.id}
          >
            <Link to={`/chats/${item.id}`} className="ChatLink">
              <Avatar className="ContactImg" src={item.img} alt="" />
              <p className="ContactName"> {item.name} </p>
            </Link>
            <Button className="DeleteBtn" onClick={() => onDelete(item.id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};
