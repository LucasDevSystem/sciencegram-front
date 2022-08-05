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
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Header = ({ headerData, handleBack, handleNext, currImgIndex }) => {
  const [isStoped, setIsStoped] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const { userName, userImageUrl, storiesImagesUrl } = headerData;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (isStoped) {
          return oldProgress;
        }
        if (oldProgress >= 99) {
          handleNext();
          return 0;
        }
        return oldProgress + 10;
      });
    }, 250);

    return () => {
      clearInterval(timer);
    };
  }, [isStoped, currImgIndex]);

  return (
    <div>
      <CardHeader
        style={{ backgroundColor: "#465678" }}
        avatar={
          <Avatar
            src={userImageUrl}
            //  sx={{ bgcolor:  "#465678" }}
            aria-label="img"
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
        activeStep={currImgIndex}
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
      <Box sx={{ width: "100%" }}>
        {progress !== 100 && (
          <LinearProgress variant="determinate" value={progress} />
        )}
      </Box>
    </div>
  );
};

export default Header;
