import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


function Stories({storiesData = []}) {
  return (
    <Card sx={{ maxWidth: 500, display: "flex",width:500 }}>
      {storiesData.map(({userName='',imageUrl=''}) => {
       return( <div>
          <CardActionArea>
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
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
               {userName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </div>)
      })}
    </Card>
  );
}

export default Stories;
