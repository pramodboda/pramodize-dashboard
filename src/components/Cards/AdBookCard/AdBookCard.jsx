import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import addBookImg from "../../../assets/images/ad-book.png";
const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(145deg, rgba(73,29,139,1) 0%, rgba(138,63,252,1) 35%, rgba(212,187,255,1) 100%)",
      color: '#f9f9f9'
  },
  adBookCardStyles:{
      color: '#f9f9f9',
      
  },
  bookImg: {
    width: "120px",
  },
});

const AdBookCard = () => {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Box textAlign="center" className={classes.adBookCardStyles}>
              <img className={classes.bookImg} src={addBookImg} alt="" />
              <Typography gutterBottom variant="h5" component="h2">
                Frontend Unicorn
              </Typography>
              <Typography variant="body2" component="p">
                Discover how to learn, and what skills are essential to grow as
                a developer. Master the tools and methods, and you’ll feel
                confident in both small and large-scale projects.
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
  );
};

export default AdBookCard;
