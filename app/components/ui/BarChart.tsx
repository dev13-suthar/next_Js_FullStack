"use client"
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

type props = {
  income:number,
  expense:number
}
const theme = {
  axis: {
    ticks: {
      text: {
        fill: '#FFFFFF' // Set axis tick color to white
      }
    },
    legend: {
      text: {
        fill: '#FFFFFF' // Set axis legend color to white
      }
    }
  },
  legends: {
    text: {
      fill: '#FFFFFF' // Set legend text color to white
    }
  }
};

  const BarChart = ({income,expense}:props) => {
    const chartData = [
      { category: 'Income', value: income },
      { category: 'Expense', value: expense }
    ];

    return (
      <div style={{ height: 400,width:350 }} className='text-black' >
        <ResponsiveBar
          data={chartData}
          keys={['value']}
          indexBy="category"
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          padding={0.3}
          colors={{ scheme: 'accent' }}
          borderColor={{ from: 'color', modifiers: [['darker', 2.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Category',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Amount',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={"Black"}
          theme={theme}
        />
    </div>
  );
};

export default BarChart;
