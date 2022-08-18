import * as React from "react";

import { Box, Card, CardHeader } from "@mui/material";
import { Container } from "@mui/system";
import MessagesView from "./MessagesView";
import RecentMessagesList from "./RecentMessagesList";

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
        <Box
          sx={{
            width: "100%",
            height: 650,
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Card sx={{ maxWidth: 700, width: "35%", float: "left" }}>
            <CardHeader title="myself" />
            <RecentMessagesList
              onSelect={handleSelect}
              recentMessages={messagesData}
            />
          </Card>
          <Card sx={{ maxWidth: 700, width: "75%" }}>
            <CardHeader title={activeMessage} />
            <MessagesView messages={messages} />
          </Card>
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
