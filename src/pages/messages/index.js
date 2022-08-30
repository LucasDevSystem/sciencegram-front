import * as React from "react";

import { Box } from "@mui/material";
import { Container } from "@mui/system";
import MessagesView from "./MessagesView";
import styles from "./styles";
import InboxList from "./InboxList";

const messagesData = [
  {
    userName: "musk",
    messages: [
      {
        me: "hii there",
      },
      {
        you: "hru?",
      },
      {
        me: "im not fine",
      },
    ],
    profileImageUrl:
      "https://veja.abril.com.br/wp-content/uploads/2022/06/GettyImages-1395062612.jpg.jpg?quality=70&strip=info&resize=850,567",
  },
  {
    userName: "bill",
    messages: [
      {
        me: "hi bill",
      },
      {
        you: "hru?",
      },
      {
        me: "im good",
      },
    ],
    profileImageUrl:
      "https://veja.abril.com.br/wp-content/uploads/2022/06/GettyImages-1395062612.jpg.jpg?quality=70&strip=info&resize=850,567",
  },
  {
    userName: "steve",
    messages: [
      {
        me: "morning steve",
      },
      {
        you: "hey",
      },
      {
        me: "where are u?",
      },
    ],
    profileImageUrl:
      "https://veja.abril.com.br/wp-content/uploads/2022/06/GettyImages-1395062612.jpg.jpg?quality=70&strip=info&resize=850,567",
  },
];
const MessagesPage = () => {
  const [activeMessage, setActiveMessage] = React.useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messages = activeMessage
    ? getMessagesByUser(messagesData, activeMessage)
    : [];

  const handleRequest = () => {
    console.log("requestedData");
  };
  const handleSelect = (selectedUser) => {
    setActiveMessage(selectedUser);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      handleRequest();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [messages]);
  return (
    <div>
      <Container fixed>
        <Box sx={styles.box}>
          <InboxList onSelect={handleSelect} recentMessages={messagesData} />
          <div style={styles.messageContainner}>
            <MessagesView messages={messages} />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default MessagesPage;

const getMessagesByUser = (data, activeMessage) => {
  const filtered = data.filter((user) => user.userName === activeMessage);
  if (!filtered.length) {
    return [];
  }
  return filtered[0].messages;
};
