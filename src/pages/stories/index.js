import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Avatar, CardHeader, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
document.body.style = "background:  #35425C;";
const stories = {
  userName: "musk",
  userImageUrl:
    "https://assets.reedpopcdn.com/scene-Iron-Man.webp/BROK/thumbnail/1600x900/format/jpg/quality/80/scene-Iron-Man.webp",
  storiesImagesUrl: [
    "https://assets.reedpopcdn.com/scene-Iron-Man.webp/BROK/thumbnail/1600x900/format/jpg/quality/80/scene-Iron-Man.webp",
    "https://classic.exame.com/wp-content/uploads/2021/12/homem-aranha-3-1.jpg?quality=70&strip=info&w=1024",
  ],
};
export default function StoriesPage() {
  const [isStoped, setIsStoped] = React.useState(false);
  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);
  const { userName, userImageUrl, storiesImagesUrl } = stories;

  const handleNext = () => {
    if (currentImgIndex === storiesImagesUrl.length) {
      return;
    }
    setCurrentImgIndex(currentImgIndex + 1);
  };
  const handleBack = () => {
    if (currentImgIndex === 0) {
      return;
    }
    setCurrentImgIndex(currentImgIndex - 1);
  };
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
              src={userImageUrl}
              //  sx={{ bgcolor:  "#465678" }}
              aria-label="recipe"
            ></Avatar>
          }
          action={
            <IconButton
              onClick={() => setIsStoped(!isStoped)}
              aria-label="settings"
            >
              {isStoped ? <PlayArrowIcon /> : <StopIcon></StopIcon>}
            </IconButton>
          }
          title={userName}
          //subheader={createdAt}
        />

        <MobileStepper
          style={{ backgroundColor: "#465678", height: 10 }}
          steps={storiesImagesUrl.length}
          position="static"
          activeStep={currentImgIndex}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              ///disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button onClick={handleBack} size="small">
              <KeyboardArrowLeft />
            </Button>
          }
        ></MobileStepper>
        <CardMedia
          component="img"
          height="600"
          image={storiesImagesUrl[currentImgIndex]}
          alt="Paella dish"
        />
      </Card>
    </div>
  );
}
