import { ImageList ,ImageListItem } from "@mui/material";

const ProfileMediaList = ({mediaData =[]}) => {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {mediaData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ProfileMediaList;
