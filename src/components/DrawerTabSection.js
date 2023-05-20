import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Avatar, Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import user from "../assets/user.jpg";

const useStyles = makeStyles((theme) => ({
  avatarBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingTop: "40px",
    justifyContent: "center",
    rowGap: "15px",
    marginBottom: "20px",
  },
  avatarName: {
    fontSize: "20px !important",
    fontWeight: "200 !important",
    color: theme.palette.primary.normal,
  },
  divider: {
    border: "1px solid #394B61 !important",
  },
  tabs: {
    display: "flex",
    columnGap: "14px",
    alignItems: "center",
    fontSize: "15px !important",
    fontWeight: "600 !important",
    textTransform: "capitalize",
    color: theme.palette.primary.normal,
  },
  tabSelected: {
    borderRight: `3px solid #00E0FF !important`,
    overflow: "visible  !important",
  },
  icon: {
    width: "18px !important",
    height: "18px !important",
  },
  tabSelectedLabel: {
    color: "#00E0FF",
  },
}));
const DrawerTabSection = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.avatarBox}>
        <Avatar
          alt="User"
          sx={{ width: "100px", height: "100px" }}
          src={user}
        />
        <Typography className={classes.avatarName}>Eric Hoffman</Typography>
      </Box>
      <Divider className={classes.divider} />
      <Tabs
        orientation="vertical"
        aria-label="Vertical tabs"
        value={0}
        sx={{ padding: "13px 0" }}
      >
        <Tab
          label={
            <div className={`${classes.tabs} ${classes.tabSelectedLabel}`}>
              <SearchIcon className={classes.icon} /> Discover
            </div>
          }
          className={classes.tabSelected}
        />
        <Tab
          label={
            <div className={classes.tabs}>
              <PlaylistPlayOutlinedIcon className={classes.icon} /> Playlist
            </div>
          }
        />
        <Tab
          label={
            <div className={classes.tabs}>
              <LiveTvOutlinedIcon className={classes.icon} /> Movie
            </div>
          }
        />
        <Tab
          label={
            <div className={classes.tabs}>
              <DesktopWindowsOutlinedIcon className={classes.icon} /> TV Shows
            </div>
          }
        />
        <Tab
          label={
            <div className={classes.tabs}>
              <ListOutlinedIcon className={classes.icon} /> My List
            </div>
          }
        />
        <Tab
          className={classes.divider}
          label=""
          icon={<Divider className={classes.divider} />}
          disabled
          sx={{ minHeight: 0, padding: 0, height: 0 }}
        />
        <Tab
          label={
            <div className={classes.tabs}>
              <RestoreOutlinedIcon className={classes.icon} /> Watch later
            </div>
          }
        />
        <Tab
          label={
            <div className={classes.tabs}>
              <FavoriteBorderOutlinedIcon className={classes.icon} />{" "}
              Recommended
            </div>
          }
        />
        <Tab
          className={classes.divider}
          label=""
          icon={<Divider className={classes.divider} />}
          disabled
          sx={{ minHeight: 0, padding: 0, height: 0 }}
        />
        <Tab
          label={
            <div className={classes.tabs}>
              <SettingsOutlinedIcon className={classes.icon} /> Settings
            </div>
          }
        />
        <Tab
          label={
            <div className={classes.tabs}>
              <LogoutOutlinedIcon className={classes.icon} /> Logout
            </div>
          }
        />
      </Tabs>
    </div>
  );
};

export default DrawerTabSection;
