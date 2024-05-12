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
    MeetingPending: 4000,
    MeetingDone: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    MeetingPending: 3000,
    MeetingDone: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    MeetingPending: 2000,
    MeetingDone: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    MeetingPending: 2780,
    MeetingDone: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    MeetingPending: 1890,
    MeetingDone: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    MeetingPending: 2390,
    MeetingDone: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    MeetingPending: 3490,
    MeetingDone: 4300,
    amt: 2100,
  },
  {
    name: 'Page F',
    MeetingPending: 2390,
    MeetingDone: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    MeetingPending: 3490,
    MeetingDone: 4300,
    amt: 2100,
  },
  {
    name: 'Page D',
    MeetingPending: 2780,
    MeetingDone: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    MeetingPending: 1890,
    MeetingDone: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    MeetingPending: 2390,
    MeetingDone: 3800,
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
        <Bar dataKey="MeetingDone" fill="#348f6c" shape={<Rectangle />} radius={[10, 10, 0, 0]} width={20} />
        <Bar dataKey="MeetingPending" fill="##e2c992"  shape={<Rectangle />} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  
  );
};

export default DashBarChart;
