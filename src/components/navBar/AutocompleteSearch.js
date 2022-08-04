import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
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
  { label: "elton Musk" },
  { label: "bilu gato" },
  { label: "Steve works" },
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
