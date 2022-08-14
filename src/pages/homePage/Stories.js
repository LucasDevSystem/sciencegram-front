import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Stories({ storiesData = [] }) {
  let navigate = useNavigate();

  const onClick = (selectedUser) => {
    navigate("../stories/" + selectedUser);
  };

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Card sx={{ maxWidth: 500, display: "flex", width: 500 }}>
        {storiesData.map(({ userName = "", imageUrl = "" }, index) => {
          return (
            <div key={index}>
              <CardActionArea onClick={(e) => onClick(userName)}>
                <Avatar
                  sx={{ width: 70, height: 70,marginLeft: 0.5 }}
                  src={imageUrl}
                  aria-label="avatar"
                ></Avatar>
                <CardContent style={{ marginLeft:0.5, textAlign: "center" }}>
                  <Typography gutterBottom variant="h7" component="div">
                    {userName.length > 9
                      ? userName.slice(0, 7) + "..."
                      : userName}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </div>
          );
        })}
      </Card>
    </div>
  );
}

export default Stories;
