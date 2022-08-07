import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Avatar, Grid, ImageList, ImageListItem } from "@mui/material";
import AboutUserCard from "./AboutUserCard";

const profile = {
  userName: "musk",
  followers: 10,
  following: 10,
  userImageUrl:
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
  bio: "we all die alone",
  feedImages: [
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
      title: "musk",
    },
    {
      img: "https://veja.abril.com.br/wp-content/uploads/2022/06/GettyImages-1395062612.jpg.jpg?quality=70&strip=info&resize=850,567",
      title: "musk",
    },
    {
      img: "https://static.poder360.com.br/2022/04/Elon_Musk-848x477.jpg",
      title: "musl",
    },
    {
      img: "https://static.poder360.com.br/2022/04/Elon_Musk-848x477.jpg",
      title: "musk",
    },
    {
      img: "https://static.poder360.com.br/2022/04/Elon_Musk-848x477.jpg",
      title: "musk",
    },
    {
      img: "https://static.poder360.com.br/2022/04/Elon_Musk-848x477.jpg",
      title: "musk",
    },
    {
      img: "https://static.poder360.com.br/2022/04/Elon_Musk-848x477.jpg",
      title: "musk",
    },
    {
      img: "https://static.poder360.com.br/2022/04/Elon_Musk-848x477.jpg",
      title: "musk",
    },
  ],
};

const ProfilePage = () => {
  const { feedImages = [], userImageUrl = "" } = profile;

  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        justifyContent: "center",
        marginTop: 5,
      }}
    >
      <Card sx={{ display: "flex", width: 500, height: 250 }}>
        <Avatar
          sx={{ width: 100, height: 100, top: 75, marginLeft: 2 }}
          src={userImageUrl}
          //  sx={{ bgcolor:  "#465678" }}
          aria-label="img"
        ></Avatar>
        <AboutUserCard profileData={profile}></AboutUserCard>
      </Card>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {feedImages.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ProfilePage;
