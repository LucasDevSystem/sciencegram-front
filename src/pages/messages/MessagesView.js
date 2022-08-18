import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { Send } from "@mui/icons-material";

const MessagesView = ({ messages }) => {
  const [text, setText] = React.useState("");

  const handleSend = () => {
    setText("");
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        <CardContent>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: isFromMe(msg) ? "flex-end" : "flex-right",
              }}
            >
              <Typography
                style={{
                  marginTop: 5,
                  fontSize: 16,
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: "#D3D3D3",
                  textAlign: "center",
                }}
              >
                {msg[Object.keys(msg)[0]]}
              </Typography>
            </div>
          ))}
        </CardContent>
      </List>
      <CardActions
        sx={{
          margin: "auto",
          width: "100%",
          marginBottom: 7,
        }}
      >
        <TextField
          sx={{ width: "85%" }}
          id="outlined-uncontrolled"
          placeholder="write"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <IconButton onClick={handleSend}>
          <Send></Send>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MessagesView;

function isFromMe(msg) {
  if (msg.me) {
    return true;
  }
  return false;
}
