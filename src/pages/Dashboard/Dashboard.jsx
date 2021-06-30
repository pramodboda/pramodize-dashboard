import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';

import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import CardComp from "../../components/Cards/CardComp/CardComp";
import AdBookCard from "../../components/Cards/AdBookCard/AdBookCard";
import TaskProgressPieChart from "../../components/Graphs/LearningProgressPieChart/LearningProgressPieChart";
import SimpleAreaChart from "../../components/Graphs/SimpleAreaChart/SimpleAreaChart";
import RadialBarChartEx from "../../components/Graphs/RadialBarChartEx/RadialBarChartEx";
import CustomActiveShapePieChart from "../../components/Graphs/CustomActiveShapePieChart/CustomActiveShapePieChart";
import SalesOfProductAreaChart from "../../components/Graphs/SalesOfProductAreaChart/SalesOfProductAreaChart";
import SonyAnnualRevenueBarChart from "../../components/Graphs/SonyAnnualRevenueBarChart/SonyAnnualRevenueBarChart";
import AppleAnnualRevenueBarChart from "../../components/Graphs/AppleAnnualRevenueBarChart/AppleAnnualRevenueBarChart";


import PaperSizesA from "../../components/PaperSizesA/PaperSizesA";
import PaperSizesUS from "../../components/PaperSizesUS/PaperSizesUS";

import TopCardAreaChart1 from "../../components/Graphs/TopCardAreaChart/TopCardAreaChart1";
import TopCardAreaChart2 from "../../components/Graphs/TopCardAreaChart/TopCardAreaChart2";
import TopCardAreaChart3 from "../../components/Graphs/TopCardAreaChart/TopCardAreaChart3";
import TopCardAreaChart4 from "../../components/Graphs/TopCardAreaChart/TopCardAreaChart4";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    //   textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <Paper elevation={0}>
            <FeaturedCard
              bgColor="#e1f2fd"
              cardTitle="Total Users"
              currentValue="14.3k"
              when="Annual"
              tinyGraph={<TopCardAreaChart1 graphColor="#0072C3" />}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Paper elevation={0}>
            <FeaturedCard
              bgColor="#efffe5"
              cardTitle="New Users"
              currentValue="2.6k"
              when="Weekly"
              tinyGraph={<TopCardAreaChart2 graphColor="#008F58" />}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Paper elevation={0}>
            <FeaturedCard
              bgColor="#ffeafc"
              cardTitle="Sales"
              currentValue="$986"
              when="Today"
              tinyGraph={<TopCardAreaChart3 graphColor="#fc07d9" />}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Paper elevation={0}>
            <FeaturedCard
              bgColor="#e4e6ff"
              cardTitle="Revenue"
              currentValue="$34,245"
              when="Quarter"
              tinyGraph={<TopCardAreaChart4 graphColor="#0517fc" />}
            />
          </Paper>
        </Grid>

        <Grid item xs={9}>
          <CardComp title="Yearly sales of iPhone" content={<SalesOfProductAreaChart />} />
          <Grid container spacing={3}>
          <Grid item xs={6}>
          <Box mt={3}>
          <CardComp title="Apple Annual Revenue" content={<AppleAnnualRevenueBarChart/>}/>
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box mt={3}>
          <CardComp title="Sony Annual Revenue" content={<SonyAnnualRevenueBarChart/>}/>
          </Box>
          </Grid>
          </Grid>
          
        </Grid>
        <Grid item xs={3}>
          <AdBookCard/>
          <Box mt={3}>
          <CardComp title="Learning Progress" content={<TaskProgressPieChart/>}/>
          </Box>
        </Grid>


        <Grid item xs={7}>
          <CardComp title="Angular vs React" content={<SimpleAreaChart />} />
        </Grid>
        <Grid item xs={5}>
          <CardComp title="Professional Skills" content={<RadialBarChartEx />}/>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h5">
              Web Developement in 2021 (Monthly Target)
            </Typography>
            <CustomActiveShapePieChart />
            <p>You need abit more effort to hit monthly target</p>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <PaperSizesA />
        </Grid>

        <Grid item xs={4}>
          <PaperSizesUS />
        </Grid>


      </Grid>
    </div>
  );
};

export default Dashboard;
