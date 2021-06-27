import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";
import { spacing } from "@material-ui/system";

import Button from "@material-ui/core/Button";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  fullWidth: {
    width: "100%",
  },
  LearningProgressPieChartStyles: {
    position: "relative",
  },
  completedStatusTxt: {
    position: "absolute",
    margin: "auto",
    top: '50px',
    right: 0,
    left: 0,
    bottom: 0,
  },
  centeredContent:{
    textAlign: 'center'
  }
}));

const totalProgress = 100;
const completedStatus = 64;

const data = [
  { name: "Total Progress", value: totalProgress - completedStatus },
  { name: "Group A", value: completedStatus },
];

const COLORS = ["#eee4ff", "#8A3FFC", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const TaskProgressPieChart = () => {
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <Box mx="auto" className={classes.LearningProgressPieChartStyles}>
        <Box
          mx="auto"
          textAlign="center"
          className={classes.completedStatusTxt}
        >
          <Typography variant="h3" component="h3">
            {completedStatus + "%"}
          </Typography>
        </Box>
        <ResponsiveContainer aspect={2.2}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              // label={renderCustomizedLabel}
              outerRadius={80}
              innerRadius={65}
              fill="#8884d8"
              dataKey="value"
              cornerRadius={100}
              startAngle={90}
              endAngle={600}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Box mt={2} textAlign="center">
        <Typography variant="p" component="p" textAlian="center">
          Temporary people teach us permanent lessons.
        </Typography>
      </Box>
      <Box mt={2} textAlign="center">
        <Button mx="auto" variant="contained" color="primary">
          Never Stop Learning!
        </Button>
      </Box>
    </div>
  );
};

export default TaskProgressPieChart;
