import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Stories({ storiesData = [] }) {
  let navigate = useNavigate();

  const onClick = (selectedUser) => {
    navigate("../stories/" + selectedUser);
  };

  return (
    <Card sx={{ maxWidth: 500, display: "flex", width: 500 }}>
      {storiesData.map(({ userName = "", imageUrl = "" }, index) => {
        return (
          <div key={index}>
            <CardActionArea onClick={(e) => onClick(userName)}>
              <CardMedia
                style={{
                  marginLeft: 2,
                  marginTop: 5,
                  borderRadius: "50%",
                  borderColor: "green",
                  width: "80px",
                  borderStyle: "solid",
                  height: "80px",
                }}
                component="img"
                image={imageUrl}
              />
              <CardContent style={{ textAlign: "center" }}>
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
  );
}

export default Stories;
