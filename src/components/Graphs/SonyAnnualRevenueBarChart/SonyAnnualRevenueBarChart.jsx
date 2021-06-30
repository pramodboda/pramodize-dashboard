import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      year: 2015,
      Q1: 74.7,
      Q2: 64.7,
      amt: 2400,
    },
    {
      year: 2016,
      Q1: 67.2,
      Q2: 57.2,
      amt: 2210,
    },
    {
      year: 2017,
      Q1: 70.7,
      Q2: 60.7,
      amt: 2290,
    },
    {
      year: 2018,
      Q1: 76.8,
      Q2: 66.8,
      amt: 2000,
    },
    {
      year: 2019,
      Q1: 77.9,
      Q2: 67.9,
      amt: 2181,
    },
    {
      year: 2020,
      Q1: 75.9,
      Q2: 65.9,
      amt: 2500,
    },
    {
      year: 2021,
      Q1: 84.5,
      Q2: 74.5,
      amt: 2100,
    },
  ];



const SonyAnnualRevenueBarChart = () => {
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



export default SonyAnnualRevenueBarChart;