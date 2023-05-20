import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { DRAWER_WIDTH } from "../constant";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails/MovieDetails";

const MovieListing = (props) => {
  const { movies } = props;
  const theme = useTheme();
  const [movieSelected, setMovieSelected] = useState();
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        background: theme.palette.primary.main,
        color: theme.palette.primary.normal,
        padding: "130px 48px 13px 48px",
      }}
    >
      {movies.length > 0 ? (
        <React.Fragment>
          <MovieDetails movieSelected={movieSelected} />
          <MovieCard
            setMovieSelected={setMovieSelected}
            movieSelected={movieSelected}
            movies={movies}
          />
        </React.Fragment>
      ) : (
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "21px",
            color: "#fff",
          }}
        >
          No results found for your search.
        </Typography>
      )}
    </Box>
  );
};

export default MovieListing;
