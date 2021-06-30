import React,{useState} from "react";

import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

const PagesMenu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          {/* <InboxIcon /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" class="fa-primary" d="M384 128h-128V0L384 128z"/><path fill="currentColor" class="fa-secondary" d="M256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256z"/></svg>
        </ListItemIcon>
        <ListItemText primary="Pages" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 160v192a96 96 0 0 1-96 96h-84a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h84a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32h-84a12 12 0 0 1-12-12V76a12 12 0 0 1 12-12h84a96 96 0 0 1 96 96z" fill="currentColor" class="fa-secondary"/><path d="M215.6 295.9H24a23.94 23.94 0 0 1-24-24v-32a23.94 23.94 0 0 1 24-24h191.5l-77.6-71.1a23.84 23.84 0 0 1-.7-34.5l21.9-21.9a24.08 24.08 0 0 1 33.9-.1L344.9 239a24 24 0 0 1 0 34.1L193 423.7a24 24 0 0 1-33.9-.1l-21.9-21.9a24 24 0 0 1 .8-34.7z" fill="currentColor" class="fa-primary"/></svg>
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M487.75 315.6l-42.6-24.6a192.62 192.62 0 0 0 0-70.2l42.6-24.6a12.11 12.11 0 0 0 5.5-14 249.2 249.2 0 0 0-54.7-94.6 12 12 0 0 0-14.8-2.3l-42.6 24.6a188.83 188.83 0 0 0-60.8-35.1V25.7A12 12 0 0 0 311 14a251.43 251.43 0 0 0-109.2 0 12 12 0 0 0-9.4 11.7v49.2a194.59 194.59 0 0 0-60.8 35.1L89.05 85.4a11.88 11.88 0 0 0-14.8 2.3 247.66 247.66 0 0 0-54.7 94.6 12 12 0 0 0 5.5 14l42.6 24.6a192.62 192.62 0 0 0 0 70.2l-42.6 24.6a12.08 12.08 0 0 0-5.5 14 249 249 0 0 0 54.7 94.6 12 12 0 0 0 14.8 2.3l42.6-24.6a188.54 188.54 0 0 0 60.8 35.1v49.2a12 12 0 0 0 9.4 11.7 251.43 251.43 0 0 0 109.2 0 12 12 0 0 0 9.4-11.7v-49.2a194.7 194.7 0 0 0 60.8-35.1l42.6 24.6a11.89 11.89 0 0 0 14.8-2.3 247.52 247.52 0 0 0 54.7-94.6 12.36 12.36 0 0 0-5.6-14.1zm-231.4 36.2a95.9 95.9 0 1 1 95.9-95.9 95.89 95.89 0 0 1-95.9 95.9z" fill="currentColor" class="fa-secondary"/><path d="M256.35 319.8a63.9 63.9 0 1 1 63.9-63.9 63.9 63.9 0 0 1-63.9 63.9z" fill="currentColor" class="fa-primary"/></svg>
            </ListItemIcon>
            <ListItemText primary="Widgets" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 160v96h160v-96zm0 256h160v-96H288zM64 256h160v-96H64zm0 160h160v-96H64z" fill="currentColor" class="fa-secondary"/><path d="M464 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zM224 416H64v-96h160zm0-160H64v-96h160zm224 160H288v-96h160zm0-160H288v-96h160z" fill="currentColor" class="fa-primary"/></svg>
            </ListItemIcon>
            <ListItemText primary="Pricing Tables" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M96 320h192v-64H96zm288-192H272a16 16 0 0 1-16-16V0H24A23.94 23.94 0 0 0 0 23.88V488a23.94 23.94 0 0 0 23.88 24H360a23.94 23.94 0 0 0 24-23.88V128zM64 72a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8zm0 64a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8zm256 304a8 8 0 0 1-8 8h-80a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8zm0-104a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h224a16 16 0 0 1 16 16z" fill="currentColor" class="fa-secondary"/><path d="M377 105L279.1 7a24 24 0 0 0-17-7H256v112a16 16 0 0 0 16 16h112v-6.1a23.9 23.9 0 0 0-7-16.9zm-73 119H80a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h224a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm-16 96H96v-64h192zm24 96h-80a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z" fill="currentColor" class="fa-primary"/></svg>
            </ListItemIcon>
            <ListItemText primary="Invoices" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M9.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L176,322.72,109.28,256ZM342.79,111.45,320.55,89.21a31.46,31.46,0,0,0-44.48,0L176,189.28,242.72,256,342.79,155.93a31.46,31.46,0,0,0,0-44.48Z" fill="currentColor" class="fa-secondary"/><path d="M342.79,356.07a31.46,31.46,0,0,1,0,44.48l-22.24,22.24a31.46,31.46,0,0,1-44.48,0L9.21,155.93a31.46,31.46,0,0,1,0-44.48L31.45,89.21a31.46,31.46,0,0,1,44.48,0Z" fill="currentColor" class="fa-primary"/></svg>
            </ListItemIcon>
            <ListItemText primary="Error" />
          </ListItem>
          
        </List>
      </Collapse>
    </div>
  );
};

export default PagesMenu;
