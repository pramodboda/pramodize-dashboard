import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    width:600,
    backgroundColor: theme.palette.background.paper,
  },

  listStyles:{
      width: '320px'
  },
  captionTxtStyles:{
      color: "#999"
  },
  userOnlineStatus: {
    width: "8px",
    height: "8px",
    backgroundColor: "#44b700",
    borderRadius: "100%",
  },
  userOfflineStatus: {
    width: "8px",
    height: "8px",
    backgroundColor: "#f50057",
    borderRadius: "100%",
  },
}));

const users = [
  {
    name: "Sonya Yates",
    avatar:
      "https://images.generated.photos/WxGgS09TF-vj3qBsEILZIkVMV0AQCt_AiuxlvahUFGw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNTcxMzguanBn.jpg",
    onlineStatus: "online",
  },
  {
    name: "Fannie Huff",
    avatar:
      "https://images.generated.photos/x__-9Z1tcqoPH9lOE2ELAzcetVPpPVucqLUQT23J5fk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5OTMxNzEuanBn.jpg",
    onlineStatus: "online",
  },
  {
    name: "Leland Goodwin",
    avatar:
      "https://images.generated.photos/AFqezpgXFu3MYAlgmtK5Syhhpx1dgz-xhYO5C2PxW6Y/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxNDAzMTMuanBn.jpg",
    onlineStatus: "online",
  },
  {
    name: "Erika Garcia",
    avatar:
      "https://images.generated.photos/3sFBqpcxArXKlRki3vqB3d0S9CIHcf9OjqdkV2ipjPg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNzA0ODkuanBn.jpg",
    onlineStatus: "online",
  },
  {
    name: "Isaac Lewis",
    avatar:
      "https://images.generated.photos/lW7FlYO4lzpzmwdg7RcvJbq_azg-_HatyyJ7zDTTF3k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNjk4NTAuanBn.jpg",
    onlineStatus: "online",
  },
  {
    name: "Shelley Francis",
    avatar:
      "https://images.generated.photos/slXo66w5t8Ps7_--FN172tGpPU0kY3QUWYpAaIz-tR4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwODQyNTEuanBn.jpg",
    onlineStatus: "online",
  },

  {
    name: "Eduardo Goodman",
    avatar:
      "https://images.generated.photos/BCp9BJqjeIg0_36rPIpWreD1KbIr6ZM1R2Hcmxdpcuo/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NDM5NzguanBn.jpg",
    onlineStatus: "online",
  },
  {
    name: "Bernice",
    avatar:
      "https://images.generated.photos/xHkVzHnXgi4DMURcNVW5Xwp0ptaIb2zKPC95Ug9gp44/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5OTUwMzQuanBn.jpg",
    onlineStatus: "2 hours ago",
  },
  {
    name: "Francis Ruiz",
    avatar:
      "https://images.generated.photos/KXeF8AlF5xK10NH6TOFfXtZf9cTC2wUTHfzLfvY5wjk/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NjUxMjlfMDE4/Nzg4OF8wMTA5NzUy/LmpwZw.jpg",
    onlineStatus: "14 hours ago",
  },

  {
    name: "Sarah Gutierrez",
    avatar:
      "https://images.generated.photos/GXYR9PZ5dR9l9S706JC92ly--3e-CiE09e9PkfpAQUA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMDk4OTAuanBn.jpg",
    onlineStatus: "offline",
  },
  {
    name: "Micheal Stanley",
    avatar:
      "https://images.generated.photos/LqU1jbdPNUEEtZ_a0Hk8Z3BD5yU6fGT3_Lm96Q7Pecc/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNTA4MjYuanBn.jpg",
    onlineStatus: "offline",
  },

  {
    name: "Minnie Sanders",
    avatar:
      "https://images.generated.photos/C1jWiadVCGkSneyDmt6qAXof22WwseZunZdSLMpDHwY/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2Nzc0MDEuanBn.jpg",
    onlineStatus: "2 days ago",
  },
];

const UserFriendsMenu = () => {
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
        <svg
          class="MuiSvgIcon-root"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            class="fa-primary"
            d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
          />
          <path
            fill="currentColor"
            class="fa-secondary"
            d="M479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"
          />
        </svg>
      </IconButton>


      <Menu
        className ={classes.listStyles}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          {users.map((user, index) => (
            <MenuItem
              button
              className={classes.listStyles}
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <ListItemAvatar>
                <Avatar alt="" src={user.avatar} />
              </ListItemAvatar>
              <ListItemText primary={user.name} />
              <ListItemSecondaryAction>
                {(function () {
                  switch (user.onlineStatus) {
                    case "online":
                      return <div className={classes.userOnlineStatus}></div>;

                    case "offline":
                      return <div className={classes.userOfflineStatus}></div>;

                    default:
                      return <Typography className={classes.captionTxtStyles} variant="caption" gutterBottom> {user.onlineStatus} </Typography>;
                  }
                })()}
              </ListItemSecondaryAction>
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

export default UserFriendsMenu;
