import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {"Month":"Jan", "Angular":98, "React": 83},
    {"Month":"Feb", "Angular":98, "React": 76},
    {"Month":"Mar", "Angular":89, "React": 79},
    {"Month":"Apr", "Angular":84, "React": 81},
    {"Month":"May", "Angular":60, "React": 50},
    {"Month":"Jun", "Angular":57, "React": 50},
    {"Month":"Jul", "Angular":68, "React": 51},
    {"Month":"Aug", "Angular":70, "React": 54},
    {"Month":"Sep", "Angular":76, "React": 69},
    {"Month":"Oct", "Angular":84, "React": 75},
    {"Month":"Nov", "Angular":73, "React": 70},
    {"Month":"Dec", "Angular":75, "React": 82}
]
                              



const SimpleAreaChart = () => {
        return (
          <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart width={730} height={250} data={data}
                margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorAngular" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e03420" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#e03420" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorReact" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#009de0" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#009de0" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="Month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Angular" stroke="#e03420" strokeWidth={3} fillOpacity={0.3} fill="url(#colorAngular)" />
                <Area type="monotone" dataKey="React" stroke="#009de0" strokeWidth={3} fillOpacity={0.3} fill="url(#colorReact)" />
                </AreaChart>
          </ResponsiveContainer>
        );
}

export default SimpleAreaChart;



