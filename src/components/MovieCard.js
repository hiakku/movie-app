import { Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid !important",
    gridGap: "37px 28px",
    transition: "all 0.4s ease-in-out",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2,1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(5,1fr)",
    },
  },
  card: {
    borderRadius: "11px !important",
    backgroundColor: "#394B61 !important",
    boxShadow: "none !important",
    transition: "none !important",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "none !important",
    },
    padding: "9px !important",
  },
  media: {
    paddingTop: "117.5%",
    borderRadius: "6px",
  },
  content: {
    padding: "8px 0 0 0 !important",
    fontSize: "15px",
    fontWeight: "500",
    color: theme.palette.primary.normal,
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 1,
    whiteSpace: "pre-wrap",
  },
  cardIcon: {
    color: theme.palette.primary.normal,
    width: "20px",
    height: "20px",
    "&:last-child": {
      marginLeft: "15px",
    },
  },
  selectedCard: {
    border: "3px solid #00E0FF",
  },
}));

const MovieCard = (props) => {
  const { movies, setMovieSelected, movieSelected } = props;
  const classes = useStyles();
  const handleClick = (item, index) => {
    if (
      movieSelected &&
      movieSelected.index === `movie-cards-item${index + 1}`
    ) {
      setMovieSelected({});
    } else {
      setMovieSelected({
        ...item,
        index: `movie-cards-item${index + 1}`,
      });
    }
  };
  return (
    <React.Fragment>
      <Grid container className={classes.gridContainer}>
        {movies.map((item, index) => (
          <React.Fragment key={`movie-cards-item${index + 1}`}>
            <Grid item>
              <Card
                className={`${classes.card} ${
                  movieSelected &&
                  movieSelected.index === `movie-cards-item${index + 1}` &&
                  classes.selectedCard
                }`}
                onClick={() => handleClick(item, index)}
              >
                <CardMedia className={classes.media} image={item.Poster} />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    {item.Title}
                  </Typography>
                </CardContent>
                <PlayCircleOutlineRoundedIcon className={classes.cardIcon} />
                <ControlPointRoundedIcon className={classes.cardIcon} />
              </Card>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default MovieCard;
