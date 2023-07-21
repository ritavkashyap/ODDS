import React from 'react'

import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Colors,

} from 'chart.js'

import {
  PieChart,
  Pie,
  XAxis,
  YAxis,
} from "recharts"

import { Bar } from 'react-chartjs-2';

ChartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function DataVisualization() {

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: "369",
        data: [100, 135, 260, 321, 350, 120, 521, 122, 222, 21, 233, 6],
        backgroundColor: (context) => {
          const value = context.dataset.data[context.dataIndex];
          // Set different colors based on value thresholds
          if (value >= 300) {
            return 'red';
          } else if (value >= 200) {
            return 'orange';
          } else if (value >= 100) {
            return 'yellow';
          } else {
            return 'aqua';
          }
        },
        borderColor: 'black',
        borderWidth: 1,
        // height={400}
      },
    ],

  }
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      bar: {
        barPercentage: 0.8, // Controls the width of the bars relative to the available space
        categoryPercentage: 0.3, // Controls the width of the category groups
      },
    },
  };
  const data2 = [
    { name: "Drone", users: 20000, fill: "#ff0000" },    // red
    { name: "Aircrafts", users: 15000, fill: "#ffa500" },  // orange
    { name: "Birds", users: 10000, fill: "#1900ff" },      // yellow
  ]

  return (

    <div className='Container'>
      <div className="scrolling">
        <h1>DataVisualization</h1>
        <div className="DocBox">
        <Bar
          data={data}
          options={options}
          height={90}
          // barThickness = {3}
          // width={50}
        >
        </Bar> 
        </div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={true}
            data={data2}
            cx={200}
            cy={200}
            outerRadius={80}
             fill="#8884d8" // Default fill color for the pie chart
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>

  )
}

export default DataVisualization