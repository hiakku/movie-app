import { Box, Button, Grid, Slider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./movieDetails.css";
const useStyles = makeStyles((theme) => ({
  slider: {
    height: "8px !important",
    width: "111px !important",
    borderRadius: "5px !important",
    color: "#283647 !important",
  },
  heading: {
    fontWeight: "700 !important",
    fontSize: "30px !important",
    color: theme.palette.primary.normal,
    paddingBottom: "3px",
  },
  ratingBox: {
    display: "flex",
    columnGap: "12px",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "unset",
    },
  },
  rating: {
    fontSize: "16px !important",
    fontWeight: "600 !important",
    lineHeight: "1.9 !important",
  },
  plot: {
    fontSize: "14px !important",
    fontWeight: "400 !important",
    color: theme.palette.primary.normal,
    margin: "17px 0 21px 0 !important",
  },
  buttons: {
    textTransform: "capitalize  !important",
    borderRadius: "5px  !important",
    fontSize: "16px !important",
    fontWeight: "700 !important",
    minWidth: "152px  !important",
    height: "38px ",
    marginBottom: 0,
    [theme.breakpoints.up("xs")]: {
      marginBottom: "16px !important",
    },
  },
}));
const MovieDetails = (props) => {
  const { movieSelected } = props;
  const classes = useStyles();
  const rating = () => {
    if (
      movieSelected &&
      movieSelected.imdbRating &&
      movieSelected.imdbRating !== "N/A"
    ) {
      return Math.floor(
        Number(
          movieSelected && movieSelected.imdbRating
            ? movieSelected.imdbRating
            : 0
        ) * 10
      );
    } else {
      return 0;
    }
  };
  return (
    <div
      className={`movieDetailsContainer ${
        movieSelected && movieSelected.index ? "movieDetailsVisible" : ""
      }`}
    >
      <div
        className={`movieDetailsInnerContainer ${
          movieSelected && movieSelected.index
            ? "movieDetailsInnerContainerVisible"
            : ""
        }`}
      >
        <div className="imageBlock">
          <img
            alt={movieSelected && movieSelected.Title}
            src={movieSelected && movieSelected.Poster}
            loading="lazy"
          />
        </div>
        <div className="movieDetailBlock">
          <Typography className={classes.heading}>
            {movieSelected && movieSelected.Title}
          </Typography>
          <Box className={classes.ratingBox}>
            <Slider
              key={`slider-${
                movieSelected && movieSelected.imdbRating
                  ? movieSelected.imdbRating
                  : 0
              }`}
              disabled
              defaultValue={rating()}
              aria-label="Disabled slider"
              className={classes.slider}
            />
            <Typography className={classes.rating}>
              {movieSelected &&
              movieSelected.imdbRating &&
              movieSelected.imdbRating !== "N/A"
                ? `${movieSelected.imdbRating} / 10`
                : "N/A"}
            </Typography>
          </Box>
          <Grid container>
            <Grid item xs={4} className={classes.rating}>
              Year:
            </Grid>
            <Grid item xs={8} className={classes.rating}>
              {movieSelected && movieSelected.Year}
            </Grid>
            <Grid item xs={4} className={classes.rating}>
              Running Time:
            </Grid>
            <Grid item xs={8} className={classes.rating}>
              {movieSelected && movieSelected.Runtime}
            </Grid>
            <Grid item xs={4} className={classes.rating}>
              Directed by:
            </Grid>
            <Grid item xs={8} className={classes.rating}>
              {movieSelected && movieSelected.Director}
            </Grid>
            <Grid item xs={4} className={classes.rating}>
              language:
            </Grid>
            <Grid item xs={8} className={classes.rating}>
              {movieSelected && movieSelected.Language}
            </Grid>
          </Grid>
          <Typography className={classes.plot}>
            {movieSelected && movieSelected.Plot}
          </Typography>
          <Button
            variant="contained"
            className={classes.buttons}
            sx={{
              color: "#000000",
              background: "#00E0FF",
              marginRight: "16px",
            }}
          >
            Play Movie
          </Button>
          <Button
            variant="outlined"
            className={classes.buttons}
            sx={{
              borderColor: "#00E0FF",
              color: "#00E0FF",
            }}
          >
            Watch Trailer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
