import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import InputBase from "@material-ui/core/InputBase";

import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
    width:'60px'
  },
}));

const StepperInput = (e) => {
  const classes = useStyles();

  const [count, setCount] = useState(0);

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="small outlined primary button group">
        <Button
          aria-label="reduce"
          onClick={() => {
            setCount(Math.max(count - 1, 0));
          }}
        >
          <RemoveIcon fontSize="small" />
        </Button>

        <TextField
          id="outlined-margin-dense"
          defaultValue={count}
          className={classes.textField}
          variant="outlined"
          size='small'
          value={count}
          disabled
          onChange={(e) => {
              setCount(e.target.value);
          }} 
        />

        <Button
          aria-label="increase"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default StepperInput;
