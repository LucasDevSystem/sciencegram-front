import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Avatar, CardHeader, IconButton } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
document.body.style = "background:  #35425C;";
const stories={
    userName:'aa',
    imagesUrl:[],
}
export default function StoriesPage() {
  const [isStoped,setIsStoped] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ maxWidth: 800, width: 500 }}>
        <CardHeader
          style={{ backgroundColor: "#465678" }}
          avatar={
            <Avatar
              src={
                "https://assets.reedpopcdn.com/scene-Iron-Man.webp/BROK/thumbnail/1600x900/format/jpg/quality/80/scene-Iron-Man.webp"
              }
              //  sx={{ bgcolor:  "#465678" }}
              aria-label="recipe"
            ></Avatar>
          }
          action={
            <IconButton onClick={()=>setIsStoped(!isStoped)} aria-label="settings">
             {isStoped? <PlayArrowIcon/>:<StopIcon></StopIcon>}
            </IconButton>
          }
          title={"musk"}
          //subheader={createdAt}
        />

        <MobileStepper
          style={{ backgroundColor: "#465678",height:10 }}
          steps={5}
          position="static"
          activeStep={1}
          nextButton={
            <Button
              size="small"
              // onClick={handleNext}
              ///disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small">
              <KeyboardArrowLeft />
            </Button>
          }
        ></MobileStepper>
        <CardMedia
          component="img"
          height="600"
          image={
            "https://assets.reedpopcdn.com/scene-Iron-Man.webp/BROK/thumbnail/1600x900/format/jpg/quality/80/scene-Iron-Man.webp"
          }
          alt="Paella dish"
        />
      </Card>
    </div>
  );
}
