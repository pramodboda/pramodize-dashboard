import React,{useState} from "react";

import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

const ApplicationsMenu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
      };
  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" class="fa-primary" d="M512 384c0-8.125-4.125-16.17-12.38-19.92l-57.88-26.25l-161.9 73.38C272.3 414.6 264.3 416.4 256 416.4s-16.25-1.75-23.88-5.125l-161.9-73.38l-57.88 26.25C4.125 367.9 0 375.9 0 384s4.125 16.33 12.38 20.08l233 105.6C248.8 511.3 252.4 512 255.1 512s7.271-.75 10.65-2.25l233-105.6C507.9 400.4 512 392.2 512 384zM0 127.1C0 136.1 4.125 144.3 12.38 148l233 105.8c3.375 1.5 6.979 2.249 10.6 2.249s7.271-.7489 10.65-2.249L499.6 148C507.9 144.3 512 136.1 512 127.1S507.9 111.8 499.6 108l-233-105.8C263.3 .75 259.6 0 256 0S248.8 .75 245.4 2.25L12.38 108C4.125 111.8 0 119.9 0 127.1z"/><path fill="currentColor" class="fa-secondary" d="M512 256.1C512 247.1 507.9 240 499.6 236.3L441.5 210l-161.6 73.25C272.3 286.6 264.3 288.4 256 288.4S239.8 286.6 232.1 283.3L70.5 210L12.38 236.3C4.125 240 0 247.1 0 256.1C0 264.2 4.125 272.5 12.38 276.3l233 105.6c3.375 1.562 6.979 2.197 10.6 2.197s7.271-.6349 10.65-2.197l233-105.6C507.9 272.5 512 264.2 512 256.1z"/></svg>
        </ListItemIcon>
        <ListItemText primary="Applications" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" class="fa-primary" d="M192 160c35.35 0 64 28.65 64 64s-28.65 64-64 64S128 259.3 128 224S156.7 160 192 160zM288 416H96c-8.836 0-16-7.164-16-16C80 355.8 115.8 320 160 320h64c44.18 0 80 35.82 80 80C304 408.8 296.8 416 288 416z"/><path fill="currentColor" class="fa-secondary" d="M336 0h-288C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48v-416C384 21.49 362.5 0 336 0zM144 64h96C248.8 64 256 71.16 256 80S248.8 96 240 96h-96C135.2 96 128 88.84 128 80S135.2 64 144 64zM192 160c35.35 0 64 28.66 64 64s-28.65 64-64 64S128 259.3 128 224S156.7 160 192 160zM288 416H96c-8.836 0-16-7.164-16-16C80 355.8 115.8 320 160 320h64c44.18 0 80 35.82 80 80C304 408.8 296.8 416 288 416z"/></svg>
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" class="fa-primary" d="M240 352h-128C85.49 352 64 373.5 64 400C64 408.8 71.16 416 80 416h192c8.836 0 16-7.164 16-16C288 373.5 266.5 352 240 352zM240 256c0-35.34-28.65-64-64-64s-64 28.66-64 64s28.65 64 64 64S240 291.3 240 256zM528 32h-480C21.49 32 0 53.49 0 80V128h576V80C576 53.49 554.5 32 528 32z"/><path fill="currentColor" class="fa-secondary" d="M0 128v304C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V128H0zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S140.7 192 176 192zM272 416h-192C71.16 416 64 408.8 64 400C64 373.5 85.49 352 112 352h128c26.51 0 48 21.49 48 48C288 408.8 280.8 416 272 416zM496 352h-128c-8.836 0-16-7.164-16-16s7.164-16 16-16h128c8.836 0 16 7.164 16 16S504.8 352 496 352zM496 288h-128C359.2 288 352 280.8 352 272S359.2 256 368 256h128C504.8 256 512 263.2 512 272S504.8 288 496 288zM496 224h-128C359.2 224 352 216.8 352 208S359.2 192 368 192h128C504.8 192 512 199.2 512 208S504.8 224 496 224z"/></svg>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" class="fa-primary" d="M240 352h-128C85.49 352 64 373.5 64 400C64 408.8 71.16 416 80 416h192c8.836 0 16-7.164 16-16C288 373.5 266.5 352 240 352zM240 256c0-35.34-28.65-64-64-64s-64 28.66-64 64s28.65 64 64 64S240 291.3 240 256zM528 32h-480C21.49 32 0 53.49 0 80V128h576V80C576 53.49 554.5 32 528 32z"/><path fill="currentColor" class="fa-secondary" d="M0 128v304C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V128H0zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S140.7 192 176 192zM272 416h-192C71.16 416 64 408.8 64 400C64 373.5 85.49 352 112 352h128c26.51 0 48 21.49 48 48C288 408.8 280.8 416 272 416zM496 352h-128c-8.836 0-16-7.164-16-16s7.164-16 16-16h128c8.836 0 16 7.164 16 16S504.8 352 496 352zM496 288h-128C359.2 288 352 280.8 352 272S359.2 256 368 256h128C504.8 256 512 263.2 512 272S504.8 288 496 288zM496 224h-128C359.2 224 352 216.8 352 208S359.2 192 368 192h128C504.8 192 512 199.2 512 208S504.8 224 496 224z"/></svg>
            </ListItemIcon>
            <ListItemText primary="Support Center" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" class="fa-primary" d="M240 352h-128C85.49 352 64 373.5 64 400C64 408.8 71.16 416 80 416h192c8.836 0 16-7.164 16-16C288 373.5 266.5 352 240 352zM240 256c0-35.34-28.65-64-64-64s-64 28.66-64 64s28.65 64 64 64S240 291.3 240 256zM528 32h-480C21.49 32 0 53.49 0 80V128h576V80C576 53.49 554.5 32 528 32z"/><path fill="currentColor" class="fa-secondary" d="M0 128v304C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V128H0zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S140.7 192 176 192zM272 416h-192C71.16 416 64 408.8 64 400C64 373.5 85.49 352 112 352h128c26.51 0 48 21.49 48 48C288 408.8 280.8 416 272 416zM496 352h-128c-8.836 0-16-7.164-16-16s7.164-16 16-16h128c8.836 0 16 7.164 16 16S504.8 352 496 352zM496 288h-128C359.2 288 352 280.8 352 272S359.2 256 368 256h128C504.8 256 512 263.2 512 272S504.8 288 496 288zM496 224h-128C359.2 224 352 216.8 352 208S359.2 192 368 192h128C504.8 192 512 199.2 512 208S504.8 224 496 224z"/></svg>
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" class="fa-primary" d="M240 352h-128C85.49 352 64 373.5 64 400C64 408.8 71.16 416 80 416h192c8.836 0 16-7.164 16-16C288 373.5 266.5 352 240 352zM240 256c0-35.34-28.65-64-64-64s-64 28.66-64 64s28.65 64 64 64S240 291.3 240 256zM528 32h-480C21.49 32 0 53.49 0 80V128h576V80C576 53.49 554.5 32 528 32z"/><path fill="currentColor" class="fa-secondary" d="M0 128v304C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V128H0zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S140.7 192 176 192zM272 416h-192C71.16 416 64 408.8 64 400C64 373.5 85.49 352 112 352h128c26.51 0 48 21.49 48 48C288 408.8 280.8 416 272 416zM496 352h-128c-8.836 0-16-7.164-16-16s7.164-16 16-16h128c8.836 0 16 7.164 16 16S504.8 352 496 352zM496 288h-128C359.2 288 352 280.8 352 272S359.2 256 368 256h128C504.8 256 512 263.2 512 272S504.8 288 496 288zM496 224h-128C359.2 224 352 216.8 352 208S359.2 192 368 192h128C504.8 192 512 199.2 512 208S504.8 224 496 224z"/></svg>
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" class="fa-primary" d="M240 352h-128C85.49 352 64 373.5 64 400C64 408.8 71.16 416 80 416h192c8.836 0 16-7.164 16-16C288 373.5 266.5 352 240 352zM240 256c0-35.34-28.65-64-64-64s-64 28.66-64 64s28.65 64 64 64S240 291.3 240 256zM528 32h-480C21.49 32 0 53.49 0 80V128h576V80C576 53.49 554.5 32 528 32z"/><path fill="currentColor" class="fa-secondary" d="M0 128v304C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V128H0zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S140.7 192 176 192zM272 416h-192C71.16 416 64 408.8 64 400C64 373.5 85.49 352 112 352h128c26.51 0 48 21.49 48 48C288 408.8 280.8 416 272 416zM496 352h-128c-8.836 0-16-7.164-16-16s7.164-16 16-16h128c8.836 0 16 7.164 16 16S504.8 352 496 352zM496 288h-128C359.2 288 352 280.8 352 272S359.2 256 368 256h128C504.8 256 512 263.2 512 272S504.8 288 496 288zM496 224h-128C359.2 224 352 216.8 352 208S359.2 192 368 192h128C504.8 192 512 199.2 512 208S504.8 224 496 224z"/></svg>
            </ListItemIcon>
            <ListItemText primary="eCommerce" />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
};

export default ApplicationsMenu;
