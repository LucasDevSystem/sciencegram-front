import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Card, CardHeader, Divider } from "@mui/material";
import styles from "./styles";

const InboxList = ({ recentMessages = [], onSelect }) => {
  return (
    <Card sx={styles.inboxContainner}>
      <CardHeader title="myself" />
      <Divider></Divider>
      <List sx={styles.inboxContent}>
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
    </Card>
  );
};

export default InboxList;
