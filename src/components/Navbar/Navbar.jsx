import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Favorite from "@material-ui/icons/Favorite";
import MoreIcon from "@material-ui/icons/MoreVert";

import Avatar from "@material-ui/core/Avatar";
import NewMsgMenu from "../Menus/NewMsgMenu/NewMsgMenu";
import UserFriendsMenu from "../Menus/UserFriendsMenu/UserFriendsMenu";
import CartMenu from "../Menus/CartMenu/CartMenu";
import LocalLanguageMenu from "../Menus/LocalLanguageMenu/LocalLanguageMenu";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  
}));

const avatarImg = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: -1,
      left: -1,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const Navbar = () => {
  const classes = useStyles();
  const classes2 = avatarImg();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      MenuProps={{disableScrollLocak: true}}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );


  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            {/* <MailIcon /> */}
            <svg
              class="MuiSvgIcon-root"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                class="fa-primary"
                d="M127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z"
              />
              <path
                fill="currentColor"
                class="fa-secondary"
                d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z"
              />
            </svg>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                class="fa-primary"
                d="M288 448c0 35.38-28.63 64-64 64S160 483.4 160 448H288z"
              />
              <path
                class="fa-secondary"
                d="M439.4 362.3c-19.25-20.75-55.5-52-55.5-154.3c0-77.75-54.38-139.9-127.9-155.1V32c0-17.62-14.38-32-32-32S192 14.38 192 32v20.88C118.5 68.13 64.13 130.3 64.13 208c0 102.3-36.25 133.5-55.5 154.3C2.625 368.8 0 376.5 0 384c.125 16.38 13 32 32.13 32h383.8c19.12 0 32-15.62 32.13-32C448 376.5 445.4 368.8 439.4 362.3z"
              />
            </svg>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow + " pramodize-dashboard-navbar-top"}>
      <AppBar position="fixed">
        <Toolbar>
        
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>


          <div className={classes.grow} />
          

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.sectionDesktop}>

          <NewMsgMenu/>
          <UserFriendsMenu/>

            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <svg
                  class="MuiSvgIcon-root notificationIcon "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    class="fa-primary"
                    d="M288 448c0 35.38-28.63 64-64 64S160 483.4 160 448H288z"
                  />
                  <path
                    fill="currentColor"
                    class="fa-secondary"
                    d="M439.4 362.3c-19.25-20.75-55.5-52-55.5-154.3c0-77.75-54.38-139.9-127.9-155.1V32c0-17.62-14.38-32-32-32S192 14.38 192 32v20.88C118.5 68.13 64.13 130.3 64.13 208c0 102.3-36.25 133.5-55.5 154.3C2.625 368.8 0 376.5 0 384c.125 16.38 13 32 32.13 32h383.8c19.12 0 32-15.62 32.13-32C448 376.5 445.4 368.8 439.4 362.3z"
                  />
                </svg>
                <div class="circleAni"></div>
              </Badge>
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Favorite />
            </IconButton>
            <CartMenu/>
            <LocalLanguageMenu/>
            <IconButton
              className={classes2.root}
              color="primary"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <StyledBadge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar
                  alt="UserName"
                  src="https://images.generated.photos/-0jgmdYA_2h2alD69Tnww7KzLOBqxYJ2RFat3D8FCJE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5NDY1NzYuanBn.jpg"
                />
              </StyledBadge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Navbar;
