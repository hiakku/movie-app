import { Collapse, Container, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTheme } from "@emotion/react";
import { MOVIE_LIST } from "../movieData";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  searchBox: {
    width: "unset",
    [theme.breakpoints.up("lg")]: {
      width: "567px !important",
    },
  },
}));
const SearchBox = (props) => {
  const { setMovies } = props;
  const [searchText, setSearchText] = useState("");
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const handleLoadMovies = (searchValue) => {
    const filtered = !searchValue
      ? MOVIE_LIST
      : MOVIE_LIST.filter((movie) =>
          movie.Title.toLowerCase().includes(searchValue.toLowerCase())
        );
    setMovies(filtered);
  };
  const handleChange = (event) => {
    setSearchText(event.target.value);
    handleLoadMovies(event.target.value);
  };
  const handleClose = () => {
    setIsShowSearchBox(false);
    setSearchText("");
    handleLoadMovies("");
  };

  return (
    <Container
      style={{ position: "relative", padding: 0, width: "70%", margin: "0" }}
    >
      <Collapse
        {...(isShowSearchBox ? { timeout: 1000 } : {})}
        orientation="horizontal"
        in={isShowSearchBox}
      >
        <TextField
          id="search"
          type="text"
          variant="filled"
          placeholder="Title, Movies, Keyword"
          value={searchText}
          style={{
            backgroundColor: "#1A2536",
            borderRadius: "8px",
          }}
          fullWidth
          onChange={handleChange}
          autoComplete="off"
          InputProps={{
            disableUnderline: true,
            className: classes.searchBox,
            inputProps: {
              sx: {
                padding: "12.6px 16px 12.22px 55px",
                color: theme.palette.primary.normal,
                fontSize: "21px",
                fontWeight: "600",
              },
            },
            endAdornment: (
              <IconButton
                sx={{ padding: "0", width: "23px", height: "23px" }}
                aria-label="toggle search visibility"
                onClick={handleClose}
              >
                <CloseRoundedIcon
                  sx={{ color: theme.palette.primary.normal }}
                />
              </IconButton>
            ),
          }}
        />
      </Collapse>
      <IconButton
        sx={{
          padding: "0  0 0 3px",
          position: "absolute",
          left: "15px",
          bottom: "1rem",
          zIndex: 2,
        }}
        onClick={() => setIsShowSearchBox(true)}
      >
        <SearchIcon
          sx={{
            width: "23px",
            height: "23px",
            color: theme.palette.primary.normal,
          }}
        />
      </IconButton>
    </Container>
  );
};
export default SearchBox;
