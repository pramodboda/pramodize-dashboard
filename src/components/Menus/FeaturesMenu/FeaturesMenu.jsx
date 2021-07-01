import React from "react";


import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f0e7ff',
    },
    buttonContainer:{
        '& > *': {
            margin: theme.spacing(0.5),
          },
    },
    
  }));

const FeatureMenu = () => {
    const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };




  return (
    <div className={classes.buttonContainer}>
      <Button  className={classes.root} color="primary" aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClick}>Hylooo</Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        MenuListProps={{disablePadding: true, onMouseLeave: handleClose}}
        elevation={0}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        
      >
        <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/myAccount">My account</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/logout">Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default FeatureMenu;
