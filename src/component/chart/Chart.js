import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Dropdown from '../dropdown/Dropdown';
import './chart.css';

function Chart(){
    const data = [
        {
          name: 'Jan',
          uv: 4000,
        },
        {
          name: 'Febr',
          uv: 3000,
        },
        {
          name: 'Mar',
          uv: 2000,
        },
        {
          name: 'Apr',
          uv: 2780,
        },
        {
          name: 'May',
          uv: 1890,
        },
        {
          name: 'Jun',
          uv: 2390,
        },
        {
          name: 'Jul',
          uv: 3670,
        },
        {
          name: 'Aug',
          uv: 3490,
        },
        {
          name: 'Sep',
          uv: 2590,
        },
        {
          name: 'Oct',
          uv: 2990,
        },
        {
          name: 'Nov',
          uv: 3490,
        },
        {
          name: 'Dec',
          uv: 3890,
        },
      ];
      
     const options = [
        { value: 'option2', label: 'Monthly' },
        { value: 'option1', label: 'Quaterly' },
        { value: 'option2', label: 'Half Yearly' },
        { value: 'option3', label: 'Yearly' },
      ]
    return (
        <div className="chart">
            <div className="chart-con">
                <div className='chart-c1'>
                  <span className='c2'>Overview</span>
                  <span className='c3'>Monthly Earning</span>
                </div>
                <Dropdown options={options}></Dropdown>
            </div>
            <div className="chart-g">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart  data={data}>
                    <XAxis axisLine={false} dataKey="name" />
                    <Tooltip wrapperStyle={{ background: '#8884d8' }}/>
                    
                    <Bar radius={12} dataKey="uv" fill="rgb(177, 177, 225)" />
                </BarChart>
            </ResponsiveContainer>
            </div>
            
        </div>
    )
}
export default Chart;