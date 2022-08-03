import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const stories = [
  {
    imageUrl:
      "https://veja.abril.com.br/wp-content/uploads/2022/06/GettyImages-1395062612.jpg.jpg?quality=70&strip=info&resize=850,567",
    userName: "elton musk",
  },
  {
    imageUrl:
      "https://classic.exame.com/wp-content/uploads/2020/08/gettyimages-625137408-e1490022536452.jpg?quality=70&strip=info&w=1024",
    userName: "bilu gayto",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg",
    userName: "Steve works",
  },
];
function Stories() {
  return (
    <Card sx={{ maxWidth: 500, display: "flex" }}>
      {stories.map(({userName='',imageUrl=''}) => {
       return( <div>
          <CardActionArea>
            <CardMedia
              style={{
                marginLeft: 2,
                marginTop: 5,
                borderRadius: "50%",
                borderColor: "green",
                width: "100px",
                borderStyle: "solid",
                height: "100px",
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
