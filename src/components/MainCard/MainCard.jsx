import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  // },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  currentValue:{
    fontWeight: 'bold'

  },

  cardContentStyles:{
    position: 'relative'
  },
  chipStyle:{
    position: 'absolute',
    top: '16px',
    right: '16px',
    height: '20px',
    padding: '4px 0px',
    fontSize: '85%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: 'rgb(255, 255, 255)',
    marginBottom: '16px'
  }
});

const MainCard = (props) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent style={{backgroundColor: props.bgColor}} className={classes.cardContentStyles}>
        <Chip size="small" label={props.when} placement="top-end" className={classes.chipStyle}/>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.cardTitle}
        </Typography>
        <Typography variant="h4" component="h2" className={classes.currentValue}>
          {props.currentValue}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MainCard;

