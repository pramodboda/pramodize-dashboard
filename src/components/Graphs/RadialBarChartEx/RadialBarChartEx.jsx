import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'HTML5',
    rating: 15,
    pv: 2400,
    fill: '#fed539',
  },
  {
    name: 'CSS3',
    rating: 15,
    pv: 4567,
    fill: '#f7921e',
  },
  {
    name: 'JS',
    rating: 15,
    pv: 1398,
    fill: '#ef5222',
  },
  {
    name: 'ES',
    rating: 14,
    pv: 9800,
    fill: '#c9499b',
  },
  {
    name: 'TS',
    rating: 15,
    pv: 3908,
    fill: '#61559e',
  },
  {
    name: 'React',
    rating: 12,
    pv: 4800,
    fill: '#00bbf2',
  },
  {
    name: 'MongoDB',
    rating: 8,
    pv: 4800,
    fill: '#96c93c',
  },
  {
    name: 'Node',
    rating: 5,
    pv: 4800,
    fill: '#49b648',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const RadialBarChartEx = () => {

 
    return (
      
      // <ResponsiveContainer width= "100%" aspect= {1.5}>
      //   <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="100%" barSize={15} data={data}>
      //     <RadialBar
      //       minAngle={15}
      //       label={{ position: 'insideStart', fill: '#fff', fontSize: '10px'}}
      //       background
      //       clockWise = {false}
      //       dataKey="rating"
      //       cornerRadius={10}
      //       // endAngle={0}
      //     />
      //     <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      //   </RadialBarChart>
      // </ResponsiveContainer>

<ResponsiveContainer width="100%" aspect= {1.5}>
<RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="100%" barSize={10} data={data}>
  <RadialBar
    minAngle={15}
    label={{ position: 'insideStart', fill: '#fff',fontSize: '10px' }}
    background
    clockWise
    dataKey="rating"
    cornerRadius={10}
  />
  <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
</RadialBarChart>
</ResponsiveContainer>

    );

}


export default RadialBarChartEx;