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

const FormsMenu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 384H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" fill="currentColor" class="fa-secondary"/><path d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96z" fill="currentColor" class="fa-primary"/></svg>
        </ListItemIcon>
        <ListItemText primary="Forms" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96z" fill="currentColor" class="fa-secondary"/><path d="M432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" fill="currentColor" class="fa-primary"/></svg>
            </ListItemIcon>
            <ListItemText primary="Base Input" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 288H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 128H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-256H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" fill="currentColor" class="fa-secondary"/><path d="M208 288H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-384H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm0 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" fill="currentColor" class="fa-primary"/></svg>
            </ListItemIcon>
            <ListItemText primary="Input Group" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 384H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" fill="currentColor" class="fa-secondary"/><path d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16z" fill="currentColor" class="fa-primary"/></svg>
            </ListItemIcon>
            <ListItemText primary="Checkbox" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 384H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" fill="currentColor" class="fa-secondary"/><path d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48z" fill="currentColor" class="fa-primary"/></svg>
            </ListItemIcon>
            <ListItemText primary="Radio" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zM192 384a128 128 0 1 1 128-128 127.93 127.93 0 0 1-128 128z" fill="currentColor" class="fa-secondary"/><path d="M192 384a128 128 0 1 1 128-128 127.93 127.93 0 0 1-128 128z" fill="currentColor" class="fa-primary"/></svg>
            </ListItemIcon>
            <ListItemText primary="Switch Buttons" />
          </ListItem>
          
        </List>
      </Collapse>
    </div>
  );
};

export default FormsMenu;
