import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import StorieHeader from "./StorieHeader";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import styles from "./styles";

const Storie = Card;

const stories = {
  musk: {
    userName: "musk",
    userImageUrl:
      "https://veja.abril.com.br/wp-content/uploads/2022/06/GettyImages-1395062612.jpg.jpg?quality=70&strip=info&resize=850,567",

    storiesImagesUrl: [
      "https://cdn.geekwire.com/wp-content/uploads/2018/04/180401-musk-bankwupt-630x625.jpg",
      "https://womensagenda.com.au/wp-content/uploads/2021/11/elon-musk-tweet-1024x683.png",
    ],
  },
  bill: {
    userName: "bill",
    userImageUrl:
      "https://classic.exame.com/wp-content/uploads/2020/08/gettyimages-625137408-e1490022536452.jpg?quality=70&strip=info&w=1024",
    storiesImagesUrl: [
      "https://assets.reedpopcdn.com/scene-Iron-Man.webp/BROK/thumbnail/1600x900/format/jpg/quality/80/scene-Iron-Man.webp",
      "https://classic.exame.com/wp-content/uploads/2021/12/homem-aranha-3-1.jpg?quality=70&strip=info&w=1024",
      "https://assets.reedpopcdn.com/scene-Iron-Man.webp/BROK/thumbnail/1600x900/format/jpg/quality/80/scene-Iron-Man.webp",
      "https://classic.exame.com/wp-content/uploads/2021/12/homem-aranha-3-1.jpg?quality=70&strip=info&w=1024",
    ],
  },
  steve: {
    userName: "steve",
    userImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg",
    storiesImagesUrl: [
      "https://assets.reedpopcdn.com/scene-Iron-Man.webp/BROK/thumbnail/1600x900/format/jpg/quality/80/scene-Iron-Man.webp",
      "https://classic.exame.com/wp-content/uploads/2021/12/homem-aranha-3-1.jpg?quality=70&strip=info&w=1024",
      "https://assets.reedpopcdn.com/scene-Iron-Man.webp/BROK/thumbnail/1600x900/format/jpg/quality/80/scene-Iron-Man.webp",
      "https://classic.exame.com/wp-content/uploads/2021/12/homem-aranha-3-1.jpg?quality=70&strip=info&w=1024",
    ],
  },
};
export default function StoriesPage() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [storiesData, setStoriesData] = useState({});
  const { userName } = useParams();

  useEffect(() => {
    if (userName) {
      setLoading(true);
      setStoriesData(stories[userName]);
      setLoading(false);
    }
  }, [userName]);

  const handleNext = () => {
    const { storiesImagesUrl = [] } = storiesData;
    const index = currentImgIndex + 1 === storiesImagesUrl.length ? 0 : +1;

    setCurrentImgIndex(index);
  };
  const handleBack = () => {
    if (currentImgIndex === 0) {
      return;
    }
    setCurrentImgIndex(currentImgIndex - 1);
  };

  return (
    <div style={styles.storieContainner}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Storie sx={{ maxWidth: 800, width: 500 }}>
          <StorieHeader
            handleBack={handleBack}
            handleNext={handleNext}
            currImgIndex={currentImgIndex}
            headerData={storiesData}
          />
          <CardMedia
            component="img"
            height="600"
            image={
              storiesData.storiesImagesUrl
                ? storiesData.storiesImagesUrl[currentImgIndex]
                : ""
            }
            alt="img"
          />
        </Storie>
      )}
    </div>
  );
}
