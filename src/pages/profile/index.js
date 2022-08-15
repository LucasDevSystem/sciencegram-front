import * as React from "react";
import Card from "@mui/material/Card";
import { Avatar, ImageList, ImageListItem } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import ProfileMediaList from "./ProfileMediaList";

const profile = {
  userName: "musk",
  followers: 10,
  following: 10,
  userImageUrl:
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
  bio: "hi",
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
  ],
};

const ProfilePage = () => {
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        justifyContent: "center",
        marginTop: 5,
      }}
    >
      <ProfileHeader headerData={profile}></ProfileHeader>
      <ProfileMediaList mediaData={profile.feedImages}></ProfileMediaList>
    </div>
  );
};

export default ProfilePage;
