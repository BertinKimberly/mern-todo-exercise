import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as chartjs,LineController,PointElement,Title,plugins,BarElement,CategoryScale,LineElement,LinearScale} from "chart.js";
     
chartjs.register(LineController,BarElement,Title,PointElement,LineElement,LinearScale,plugins,CategoryScale)

const LineChart = () => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May','Jun','July'],
      datasets: [
        {
          label: 'Months',
          data: [50, 45, 53, 57, 48,48,36],
          borderColor: 'rgb(9, 193, 178)',
          backgroundColor: 'rgb(9, 193, 178)',
          borderJoinStyle: 'round',
          lineTension: 0.4,
          pointRadius: 1
        },
        {
          label: 'Tasks',
          data: [40, 42, 57, 48,42,45,49],
          borderColor: 'rgb(101, 164, 158)',
          backgroundColor: 'rgb(101, 164, 158)',
          borderJoinStyle: 'round',
          lineTension: 0.4,
          pointRadius: 1

        },
      ],
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: false,
        },
        x:{
            grid:{
                display: false
            }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            boxWidth: 10, // Adjust the width of the legend items
            borderRadius: 20, // Adjust the border radius of the legend items
            borderColor: null,
          },
        },
      },
    };

    const chartStyle = {
        radius: '1rem',
        height: '18rem' ,
        width: '26rem'
    };  
  
    return (
      <div className="w-full h-80">
        <Line data={data} options={options} style={chartStyle}/>
      </div>
    );
  };
  
  export default LineChart;