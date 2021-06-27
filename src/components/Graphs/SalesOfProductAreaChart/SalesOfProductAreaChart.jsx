import React from 'react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area} from 'recharts';

const data = [
    {
      "year": "2006",
      "pv":19.1,
    //   "amt": 2400
    },
    {
      "year": "2007",
      "pv":24.4,
    //   "amt": 2210
    },
    {
      "year": "2008",
      "pv":37.4,
    //   "amt": 2290
    },
    {
      "year": "2009",
      "pv":42.7,
    //   "amt": 2000
    },
    {
      "year": "2010",
      "pv":65,
    //   "amt": 2181
    },
    {
      "year": "2011",
      "pv":108,
    //   "amt": 2500
    },
    {
      "year": "2012",
      "pv":156.3,
    //   "amt": 2100
    },
    {
      "year": "2013",
      "pv":170.8,
    //   "amt": 2100
    },
    {
      "year": "2014",
      "pv":182.6,
    //   "amt": 2100
    },
    {
      "year": "2015",
      "pv":233.6,
    //   "amt": 2100
    },
    {
      "year": "2016",
      "pv":215.4,
    //   "amt": 2100
    },
    {
      "year": "2017",
      "pv":229,
    //   "amt": 2100
    },
    {
      "year": "2018",
      "pv":265.4,
    //   "amt": 2100
    },
    {
      "year": "2019",
      "pv":260.1,
    //   "amt": 2100
    },
    {
      "year": "2020",
      "pv":274.3,
    //   "amt": 2100
    }
  ]
  
const SalesOfProductAreaChart = () => {
    return(
        <ResponsiveContainer width="100%" aspect={2.5}>                   
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {/* <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
        </ResponsiveContainer>
    )
}

export default SalesOfProductAreaChart;



















