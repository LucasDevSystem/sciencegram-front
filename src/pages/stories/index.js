import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Header from "./Header";

document.body.style = "background:  #35425C;";

export default function StoriesPage({stories}) {
  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);
  const { storiesImagesUrl } = stories;

  const handleNext = () => {
    if (currentImgIndex + 1 === storiesImagesUrl.length) {
      setCurrentImgIndex(0);
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
        <Header
          handleBack={handleBack}
          handleNext={handleNext}
          currImgIndex={currentImgIndex}
          headerData={stories}
        ></Header>
        <CardMedia
          component="img"
          height="600"
          image={storiesImagesUrl[currentImgIndex]}
          alt="img"
        />
      </Card>
    </div>
  );
}
