import React from 'react';
import {
  BarChart,
  Bar,
  Rectangle, 
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    sales: 4000,
    purchases: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    sales: 3000,
    purchases: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    sales: 2000,
    purchases: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    sales: 2780,
    purchases: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    sales: 1890,
    purchases: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    sales: 2390,
    purchases: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    sales: 3490,
    purchases: 4300,
    amt: 2100,
  },
  {
    name: 'Page F',
    sales: 2390,
    purchases: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    sales: 3490,
    purchases: 4300,
    amt: 2100,
  },
  {
    name: 'Page D',
    sales: 2780,
    purchases: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    sales: 1890,
    purchases: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    sales: 2390,
    purchases: 3800,
    amt: 2500,
  },    
];

const DashBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        barSize={5}
        barGap={20}
        data={data}
      >       
        <Tooltip/>
        <Bar dataKey="purchases" fill="#348f6c" shape={<Rectangle />} radius={[10, 10, 0, 0]} width={20} />
        <Bar dataKey="sales" fill="##e2c992"  shape={<Rectangle />} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  
  );
};

export default DashBarChart;
