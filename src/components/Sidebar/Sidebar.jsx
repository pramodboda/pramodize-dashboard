import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import SideBarToggle from "./SideBarToggle";

import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ApplicationsMenu from "../Menus/ApplicationsMenu/ApplicationsMenu";
import PagesMenu from "../Menus/PagesMenu/PagesMenu";
import FormsMenu from "../Menus/FormsMenu/FormsMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",
    // overflow: 'auto',

    "& .MuiListItemIcon-root svg": {
      width: "18px",
      height: "18px",
      paddingLeft: "5px",
    },
    "& .MuiButtonBase-root": {
      "& .MuiListItemIcon-root, & .MuiListItemText-root": {
        color: "#C7C7C7",
      },
      "&:hover .MuiListItemIcon-root, &:hover .MuiListItemText-root": {
        color: "#f9f9f9",
      },
    },
    "& .MuiSvgIcon-root": {
      fill: "#FFD216",
    },
    "& .MuiCollapse-container": {
      backgroundColor: "#3f1978",
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  subheader: {
    color: "#f9f9f9",
  },
  brandLogo: {
    padding: 0,
  },
}));

function Sidebar() {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <div className="side-navbar">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
        className={classes.root}
      >
        <ListItem className={classes.brandLogo}>
          <SideBarToggle />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <g className="fa-group">
                <path
                  fill="currentColor"
                  className="fa-secondary"
                  d="M510.62 92.63l-95.32 76.28a48.66 48.66 0 0 1 .7 7.09 48 48 0 0 1-96 0 47.44 47.44 0 0 1 .71-7.1l-95.33-76.27a45.11 45.11 0 0 1-29.66 1.59l-101.5 101.5A47.9 47.9 0 1 1 48 160a47.87 47.87 0 0 1 12.28 1.78l101.5-101.5A47.87 47.87 0 0 1 160 48a48 48 0 0 1 96 0 47.44 47.44 0 0 1-.71 7.1l95.32 76.26a46.5 46.5 0 0 1 34.76 0l95.34-76.27A48.66 48.66 0 0 1 480 48a48.36 48.36 0 1 1 30.62 44.63z"
                />
                <path
                  fill="currentColor"
                  className="fa-primary"
                  d="M400 320h-64a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V336a16 16 0 0 0-16-16zm160-128h-64a16 16 0 0 0-16 16v288a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V208a16 16 0 0 0-16-16zm-320 0h-64a16 16 0 0 0-16 16v288a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V208a16 16 0 0 0-16-16zM80 352H16a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V368a16 16 0 0 0-16-16z"
                />
              </g>
            </svg>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ApplicationsMenu />
        <PagesMenu />
        <FormsMenu />
      </List>
    </div>
  );
}

export default Sidebar;
