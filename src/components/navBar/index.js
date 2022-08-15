import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AutocompleteSearch from "./AutocompleteSearch";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeItem, MessageItem, ActivityItem, ProfileItem } from "./menuItems";

export default function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (path === pathname) {
      return;
    }
    
    navigate(".." + path);
  };

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

          <HomeItem currentPath={pathname} onNavigate={handleNavigate}></HomeItem>
          <MessageItem
            currentPath={pathname}
            onNavigate={handleNavigate}
          ></MessageItem>
          <ActivityItem
            currentPath={pathname}
            onNavigate={handleNavigate}
          ></ActivityItem>
          <ProfileItem
            currentPath={pathname}
            onNavigate={handleNavigate}
          ></ProfileItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
