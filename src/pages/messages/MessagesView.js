import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import styles from "./styles";
const MessageCard = Card;

const MessagesView = ({ messages }) => {
  const handleSend = () => {};

  return (
    <MessageCard sx={styles.messageCard}>
      <MessageHeader title={"musk"} />
      <MessageContent messages={messages} />
      <MessageInput onSend={handleSend} />
    </MessageCard>
  );
};

export default MessagesView;

const MessageHeader = ({ title }) => (
  <>
    <CardHeader title={title} />
    <Divider></Divider>
  </>
);

const MessageContent = ({ messages = [] }) => (
  <List style={styles.messageContent}>
    <CardContent>
      {messages.map((msg, index) => (
        <InternalText
          key={index}
          isSentByViewer={isSentByViewer(msg)}
          msg={msg}
        />
      ))}
    </CardContent>
  </List>
);

const InternalText = ({ isSentByViewer, msg }) => (
  <div
    style={{
      display: "flex",
      justifyContent: isSentByViewer ? "flex-end" : "flex-right",
    }}
  >
    <Typography style={styles.message}>{msg[Object.keys(msg)[0]]}</Typography>
  </div>
);

const MessageInput = ({ onSend }) => {
  const [text, setText] = React.useState("");
  return (
    <CardActions sx={styles.cardActions}>
      <TextField
        sx={{ width: "90%" }}
        id="outlined-uncontrolled"
        placeholder="write"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton
        onClick={() => {
          setText("");
          onSend(text);
        }}
      >
        <Send></Send>
      </IconButton>
    </CardActions>
  );
};

function isSentByViewer(msg) {
  if (msg.me) {
    return true;
  }
  return false;
}
