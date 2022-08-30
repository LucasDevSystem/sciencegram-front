import { MenuItem } from "@mui/material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";

const ICON_SIZE = "small";
const ACTIVE_ICON_COLOR = "primary";
const INACTIVE_ICON_COLOR = "inherit";

const HomeItem = (props) => {
  const PATH = "/";
  const { currentPath, onNavigate } = props;

  return (
    <MenuItem onClick={() => onNavigate(PATH)}>
      <IconButton
        size={ICON_SIZE}
        color={currentPath === PATH ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR}
      >
        <HomeIcon></HomeIcon>
      </IconButton>
    </MenuItem>
  );
};

const MessageItem = (props) => {
  const PATH = "/messages";
  const { currentPath, onNavigate } = props;

  return (
    <MenuItem onClick={() => onNavigate(PATH)}>
      <IconButton
        size={ICON_SIZE}
        color={currentPath === PATH ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR}
      >
        <Badge badgeContent={4} color="error"></Badge>
        <RocketLaunchOutlinedIcon></RocketLaunchOutlinedIcon>
      </IconButton>
    </MenuItem>
  );
};

const ActivityItem = (props) => {
  const PATH = "/activity";
  const { currentPath, onNavigate } = props;

  return (
    <MenuItem onClick={() => onNavigate(PATH)}>
      <IconButton
        size={ICON_SIZE}
        color={currentPath === PATH ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR}
      >
        <Badge badgeContent={1} color="error"></Badge>
        <StarIcon></StarIcon>
      </IconButton>
    </MenuItem>
  );
};

const ProfileItem = (props) => {
  const PATH = "/profile";
  const { currentPath, onNavigate } = props;

  return (
    <MenuItem onClick={() => onNavigate(PATH)}>
      <IconButton
        size={ICON_SIZE}
        color={currentPath === PATH ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR}
      >
        <PersonIcon></PersonIcon>
      </IconButton>
    </MenuItem>
  );
};

export { HomeItem, MessageItem, ActivityItem, ProfileItem };
