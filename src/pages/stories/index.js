import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Header from "./Header";

document.body.style = "background:  #35425C;";
const stories = {
  userName: "musk",
  userImageUrl:
    "https://assets.reedpopcdn.com/scene-Iron-Man.webp/BROK/thumbnail/1600x900/format/jpg/quality/80/scene-Iron-Man.webp",
  storiesImagesUrl: [
    "https://assets.reedpopcdn.com/scene-Iron-Man.webp/BROK/thumbnail/1600x900/format/jpg/quality/80/scene-Iron-Man.webp",
    "https://classic.exame.com/wp-content/uploads/2021/12/homem-aranha-3-1.jpg?quality=70&strip=info&w=1024",
    "https://assets.reedpopcdn.com/scene-Iron-Man.webp/BROK/thumbnail/1600x900/format/jpg/quality/80/scene-Iron-Man.webp",
    "https://classic.exame.com/wp-content/uploads/2021/12/homem-aranha-3-1.jpg?quality=70&strip=info&w=1024",
  ],
};
export default function StoriesPage() {
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
