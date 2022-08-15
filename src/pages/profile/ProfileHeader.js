import * as React from "react";
import Card from "@mui/material/Card";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";

const ProfileHeader = ({ headerData }) => {
  const { userImageUrl = "" } = headerData;
  return (
    <Card sx={{ display: "flex", width: 500, height: 250 }}>
      <Avatar
        sx={{ width: 100, height: 100, top: 75, marginLeft: 2 }}
        src={userImageUrl}
        aria-label="img"
      ></Avatar>
      <AboutUserCard profileData={headerData}></AboutUserCard>
    </Card>
  );
};

export default ProfileHeader;


const AboutUserCard = ({ profileData }) => {
    const {
      userName = "",
      posts = 0,
      followers = 0,
      following = 0,
      bio = "",
    } = profileData;
    
    return (
      <Card sx={{ minWidth: 400, boxShadow: 0 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {userName}
          </Typography>
  
          <Grid
            mt={2}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 3, md: 3 }}
          >
            <Grid item xs={4}>
              <Typography variant="body1" component="div">
                {posts + " posts"}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" component="div">
                {followers + " followers"}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" component="div">
                {following + " following"}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" mt={5}>
            {bio}
            <br />
          </Typography>
        </CardContent>
      </Card>
    );
  };
