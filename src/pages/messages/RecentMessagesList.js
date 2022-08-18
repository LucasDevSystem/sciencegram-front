import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";

const RecentMessagesList = ({ recentMessages = [] ,onSelect}) => {
  return (
    <List sx={{ width: "99%", maxWidth: 400, bgcolor: "background.paper" }}>
      {recentMessages.map(({ profileImageUrl, userName }) => (
        <div key={userName}>
          <ListItem onClick={(e) => onSelect(userName)}>
            <ListItemAvatar>
              <Avatar src={profileImageUrl}></Avatar>
            </ListItemAvatar>
            <ListItemText primary={userName} secondary="Jan 10, 2022" />
          </ListItem>
          <Divider variant="middle" />
        </div>
      ))}
    </List>
  );
};

export default RecentMessagesList;
