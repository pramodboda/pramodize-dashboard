import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    // maxHeight: 300,
  },
  inline: {
    display: "inline",
  },
  userOffline: {
    backgroundColor: "#44b700",
  },
  userOnline: {
    backgroundColor: "#44b700",
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}))(Badge);

const NewMsgMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge badgeContent={4} color="secondary">
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

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <StyledBadge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar
                  alt="Deep Deepu"
                  src="https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/92276773_3461075443917217_90785210521616384_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=mPb7FtnSsvoAX-uNesK&tn=1nvjaopEhWt_nmb3&_nc_ht=scontent.fhyd14-2.fna&oh=3df75b2dc94c4a28445a1ffecb5500b5&oe=60CF86B1"
                />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText
              primary="Deep Deepu"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  ></Typography>
                  {
                    "Wow what a professional UI components! this is how you develop diamonds!"
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <StyledBadge
                className="userOffline"
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar
                  alt="Elon Musk"
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"
                />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText
              primary="Elon Musk"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  ></Typography>
                  {
                    "As dicussed, will you work for us? Waiting for your response!"
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <StyledBadge
                className="userOffline"
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar
                  alt="Akki Akshy"
                  src="https://scontent.fhyd14-2.fna.fbcdn.net/v/t31.18172-8/19222745_872450019575103_7650319018502263446_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=gWkBNPHYIMcAX-j1d4v&_nc_ht=scontent.fhyd14-2.fna&oh=eb652838b717a22df48b4e14d75d447e&oe=60EEDEC0"
                />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText
              primary="Akki Akshy"
              secondary={
                <React.Fragment>
                  {"Hi Pro, Please send me link."}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <StyledBadge
                className="userOffline"
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar
                  alt="Elisa Phelps"
                  src="https://images.generated.photos/9zwArTDh4DdHkZp5VjG2OCADTz4qvDI3lroe-Z2ovbw/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MTk3MDcuanBn.jpg"
                />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText
              primary="Elisa Phelps"
              secondary={
                <React.Fragment>
                  {"This help me to build faster & beautiful applications."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

        </List>
        <Button color="primary" fullWidth="true">
              Chats
            </Button>
      </Menu>
    </div>
  );
};

export default NewMsgMenu;
