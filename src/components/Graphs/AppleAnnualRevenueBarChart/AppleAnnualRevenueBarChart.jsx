import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
  {
    year: 2015,
    Q1: 274.5,
    Q2: 264.5,
    amt: 2400,
  },
  {
    year: 2016,
    Q1: 260.1,
    Q2: 250.1,
    amt: 2210,
  },
  {
    year: 2017,
    Q1: 265.5,
    Q2: 245.5,
    amt: 2290,
  },
  {
    year: 2018,
    Q1: 229.2,
    Q2: 219.2,
    amt: 2000,
  },
  {
    year: 2019,
    Q1: 215.6,
    Q2: 205.6,
    amt: 2181,
  },
  {
    year: 2020,
    Q1: 233.7,
    Q2: 223.7,
    amt: 2500,
  },
  {
    year: 2021,
    Q1: 253.7,
    Q2: 243.7,
    amt: 2100,
  },
];


const AppleAnnualRevenueBarChart = () => {
    return (
      <ResponsiveContainer width="100%" aspect={2.26}>
        <BarChart
          width={500}
          height={300}
          borderRadius={20}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Q1" fill="#8A3FFC" />
          <Bar dataKey="Q2" fill="#E8DAFF" />
        </BarChart>
      </ResponsiveContainer>
    );
  
}



export default AppleAnnualRevenueBarChart;