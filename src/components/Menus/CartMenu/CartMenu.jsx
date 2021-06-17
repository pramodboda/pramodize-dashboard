import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import StepperInput from "../../Buttons/StepperInput/StepperInput";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  cartProductImg: {
    width: "60px",
    //   border: '1px solid red'
  },
  cartProductName: {
    width: "100px",
  },
}));

const cartItems = [
  {
    productName: "iPhone 12 Pro",
    productImg:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021658000",
    price: "1,59,900",
  },
  {
    productName: "Dell U4919DW",
    productImg:
      "https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/peripherals_dell/Monitors/ultrasharp/u4919dw/u4919dw_ldk_0003.psd?fmt=pjpg&amp;pscan=auto&amp;scl=1&amp;hei=402&amp;wid=356&amp;qlt=85,0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;size=356,402",
    price: "2,29,269",
  },
  {
    productName: "iPad Pro",
    productImg:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104_GEO_IN?wid=470&hei=556&fmt=p-jpg&qlt=95&.v=1617920526000",
    price: "2,12,900",
  },
];

const CartMenu = () => {
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
        <Badge badgeContent={3} color="secondary">
          <svg
            class="MuiSvgIcon-root"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              class="fa-primary"
              d="M243.1 2.724C231.3-3.4 216.8 1.193 210.7 12.94L106.7 212.9c-6.109 11.75-1.531 26.25 10.22 32.34C120.5 247.1 124.3 248 127.1 248c8.656 0 17.03-4.719 21.31-12.94l103.1-200C259.4 23.32 254.8 8.818 243.1 2.724zM469.3 212.9l-104-200c-6.141-11.78-20.56-16.37-32.36-10.22c-11.75 6.094-16.33 20.59-10.22 32.34l103.1 200c4.281 8.218 12.64 12.94 21.31 12.94c3.734 0 7.516-.875 11.06-2.719C470.8 239.2 475.4 224.7 469.3 212.9z"
            />
            <path
              class="fa-secondary"
              d="M560 192l-101.6 .0012l10.89 20.94c6.109 11.75 1.531 26.25-10.22 32.34c-3.547 1.844-7.328 2.719-11.06 2.719c-8.672 0-17.03-4.719-21.31-12.94l-22.38-43.07H171.7L149.3 235.1C145 243.3 136.6 248 127.1 248c-3.734 0-7.516-.875-11.06-2.719C105.2 239.2 100.6 224.7 106.7 212.9l10.89-20.94L16 192c-8.836 0-16 7.164-16 15.1v32c0 8.836 7.164 15.1 16 15.1h23.11l45.75 205.9C91.37 491.2 117.3 512 147.3 512h281.3c29.1 0 55.97-20.83 62.48-50.12l45.75-205.9H560c8.838 0 16-7.164 16-15.1V208C576 199.2 568.8 192 560 192z"
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
        {cartItems.map((item) => (
          <div>
            <ListItem alignItems="center">
              <Box>
                <div>
                  <img
                    className={classes.cartProductImg}
                    src={item.productImg}
                    alt=""
                  />{" "}
                  &nbsp;&nbsp;
                </div>
              </Box>

              <Box className={classes.cartProductName}>
                <Typography variant="subtitle2" gutterBottom>
                  {item.productName}
                </Typography>
              </Box>
              <Box flexGrow={1}>
                <div>
                  <StepperInput />
                </div>
              </Box>
              <Box>
                <div> ₹{item.price}</div>
              </Box>
            </ListItem>
            <Divider component="li" />
          </div>
        ))}
        <ListItem>
          <ListItemText
            primary="TOTAL"
          />
          
          <ListItemSecondaryAction>
            <Typography variant="h5">₹1,59,900</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <Typography variant="body2">Subtotal</Typography>
          <ListItemSecondaryAction>
            <Typography variant="p">₹</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <Typography variant="body2">Shipping</Typography>
          <ListItemSecondaryAction>
            <Typography variant="p">2.00</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <Typography variant="body2">Tax</Typography>
          <ListItemSecondaryAction>
            <Typography variant="p">3.24</Typography>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <Button alignContent="flex-end" variant="contained" color="primary">
            Checkout
          </Button>
        </ListItem>
      </Menu>
    </div>
  );
};
export default CartMenu;
