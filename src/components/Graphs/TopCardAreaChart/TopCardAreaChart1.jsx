import React from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    pv: 4300,
    amt: 2100,
  },
];

const TopCardAreaChart1 = (props) => {
  return (
    <ResponsiveContainer width="100%" aspect={1.5}>
     <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
    <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor={props.graphColor} stopOpacity={0.2}/>
        <stop offset="95%" stopColor={props.graphColor} stopOpacity={0}/>
        </linearGradient>
    </defs>
    <Tooltip />
    <Area type="monotone" dataKey="pv" stroke={props.graphColor} fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
    </ResponsiveContainer>
  );
};

export default TopCardAreaChart1;
