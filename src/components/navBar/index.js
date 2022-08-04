import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import AutocompleteSearch from "./AutocompleteSearch";

export default function NavBar() {
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

          <MenuItem>
            <IconButton size="small" color="inherit">
              <HomeIcon></HomeIcon>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton size="small" color="inherit">
              <Badge badgeContent={4} color="error"></Badge>
              <RocketLaunchOutlinedIcon></RocketLaunchOutlinedIcon>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton size="small" color="inherit">
              <Badge badgeContent={1} color="error"></Badge>
              <StarIcon></StarIcon>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton size="small" color="inherit">
              <PersonIcon></PersonIcon>
            </IconButton>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
