import { useTheme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar, IconButton, Box, AppBar } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import { DRAWER_WIDTH } from "../constant";
import SearchBox from "./SearchBox";

const TopHeader = (props) => {
  const theme = useTheme();
  const { setMovies, handleDrawerToggle, movies } = props;
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` },
        background: theme.palette.primary.main,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          paddingTop: "40px",
          paddingBottom: "40px",
          "@media (min-width: 600px)": {
            paddingLeft: "48px",
            paddingRight: "48px",
          },
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchBox
            sx={{
              display: "flex",
              width: "16%",
              justifyContent: "end",
            }}
            setMovies={setMovies}
            movies={movies}
          />
          <Box>
            <WbSunnyOutlinedIcon
              style={{
                width: "23px",
                height: "23px",
              }}
            />
            <MoreVertTwoToneIcon
              style={{
                width: "23px",
                height: "23px",
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default TopHeader;
