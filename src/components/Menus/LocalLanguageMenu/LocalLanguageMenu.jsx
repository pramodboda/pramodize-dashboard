import React from "react";
import { makeStyles } from "@material-ui/core/styles";


import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
  },

  localFlag: {
    width: "24px",
    heigth: "24px",
    //   borderRadius: '100%'
  },
  localFlagMenu: {
    //   width:'300px'
  },
}));

const options = [
  {
    flagURL:
      "https://cdn.iconscout.com/icon/free/png-64/india-flag-country-nation-union-empire-32988.png",
    localName: "India",
  },

  {
    flagURL:
      "https://cdn.iconscout.com/icon/free/png-64/canada-flag-country-nation-union-empire-32938.png",
    localName: "Canada",
  },

  {
    flagURL:
      "https://cdn.iconscout.com/icon/free/png-64/japan-flag-country-nation-union-empire-33001.png",
    localName: "Japan",
  },
  {
    flagURL:
      "https://cdn.iconscout.com/icon/free/png-64/germany-flag-country-nation-union-empire-32989.png",
    localName: "Germany",
  },
  {
    flagURL:
      "https://cdn.iconscout.com/icon/free/png-64/swaziland-flag-country-nation-union-empire-33094.png",
    localName: "Swaziland",
  },
  {
    flagURL:
      "https://cdn.iconscout.com/icon/free/png-64/austria-flag-country-nation-union-empire-32920.png",
    localName: "Austria",
  },

  {
    flagURL:
      "https://cdn.iconscout.com/icon/free/png-64/united-states-of-america-flag-country-nation-union-empire-33135.png",
    localName: "United States of America",
  },
  {
    flagURL:
      "https://cdn.iconscout.com/icon/free/png-64/new-zealand-flag-country-nation-union-empire-33036.png",
    localName: "New Zealand",
  },
  {
    flagURL:
      "https://cdn.iconscout.com/icon/free/png-64/united-kingdom-flag-country-nation-union-empire-33115.png",
    localName: "United Kingdom",
  }

];

const LocalLanguageMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const indianCurrencyFormat = (digit) => {
    var x=12345652457.557;
    x=x.toString();
    var afterPoint = '';
    if(x.indexOf('.') > 0)
       afterPoint = x.substring(x.indexOf('.'),x.length);
    x = Math.floor(x);
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers !== '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

  }

  return (
  
    <div className={classes.root}>
      {indianCurrencyFormat}
      <IconButton
        aria-haspopup="true"
        aria-controls="lock-menu"
        aria-label="when device is locked"
        onClick={handleClickListItem}
      >
        <img
          className={classes.localFlag}
          src={options[selectedIndex].flagURL}
          alt={options[selectedIndex].flagURL}
        />
      </IconButton>
      <Menu
        className={classes.localFlagMenu}
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        MenuListProps={{
          disablePadding: true
        }}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <img
              className={classes.localFlag}
              src={option.flagURL}
              alt={option.flagURL}
            />{" "}
            &nbsp; {option.localName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
export default LocalLanguageMenu;
