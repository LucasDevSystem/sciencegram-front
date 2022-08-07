import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AutocompleteSearch from "./AutocompleteSearch";
import { useLocation } from "react-router-dom";
import { HomeItem,MessageItem,ActivityItem,ProfileItem} from "./menuItems";

export default function NavBar() {
  const {pathname} = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#35425C" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontStyle: "normal",
            }}
          >
            sciencegram
          </Typography>

          <AutocompleteSearch />

          <HomeItem currentPath={pathname}></HomeItem>
          <MessageItem currentPath={pathname}></MessageItem>
          <ActivityItem currentPath={pathname}></ActivityItem>
          <ProfileItem currentPath={pathname}></ProfileItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
