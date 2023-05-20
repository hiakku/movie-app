import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import SideNavbar from "./components/SideNavbar";
import MovieListing from "./components/MovieListing";
import { MOVIE_LIST } from "./movieData";
import TopHeader from "./components/TopHeader";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [movies, setMovies] = useState(MOVIE_LIST);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <TopHeader
        setMovies={setMovies}
        handleDrawerToggle={handleDrawerToggle}
        movies={movies}
      />
      <SideNavbar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <MovieListing movies={movies} />
    </Box>
  );
}
