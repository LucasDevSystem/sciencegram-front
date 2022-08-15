import * as React from "react";
import {
  Autocomplete,
  Avatar,
  Box,
  TextField,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const sugestion = [
  {
    label: "musk",
    imageUrl:
      "https://veja.abril.com.br/wp-content/uploads/2022/06/GettyImages-1395062612.jpg.jpg?quality=70&strip=info&resize=850,567",
  },
  {
    label: "bill",
    imageUrl:
      "https://classic.exame.com/wp-content/uploads/2020/08/gettyimages-625137408-e1490022536452.jpg?quality=70&strip=info&w=1024",
  },
  {
    label: "steve",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg",
  },
];

export default function AutocompleteSearch() {
  const [searchText, setSearchText] = React.useState("");

  const onSearchProfile = (value) => {
    console.log(value);
  };

  return (
    <Search>
      <SearchIconWrapper></SearchIconWrapper>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={searchText ? sugestion : []}
        sx={{ width: 300 }}
        onChange={(e, value) => onSearchProfile(value)}
        noOptionsText={searchText ? "no results found." : ""}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <Avatar
              style={{ marginRight: 10 }}
              src={option.imageUrl}
              aria-label="img"
            ></Avatar>
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
          />
        )}
      />
    </Search>
  );
}
