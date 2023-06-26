import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as chartjs,LineController,PointElement,Title,plugins,BarElement,CategoryScale,LineElement,LinearScale} from "chart.js";
     
chartjs.register(LineController,BarElement,Title,PointElement,LineElement,LinearScale,plugins,CategoryScale)

const BarChart = () => {
    const data = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'],
      datasets: [
        {
          label: 'Days',
          data: [515, 650, 555, 645,660,643,645],
          backgroundColor: 'rgb(9, 193, 178)',
          borderColor: 'transparent',
          borderWidth: 1,
        },
        {
          label: 'Tasks',
          data: [200, 240, 215, 220, 300,280,300],
          backgroundColor: 'rgb(101, 164, 158)',
          borderColor: 'transparent',
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      indexAxis: 'x',
      scales: {
        y: {
          beginAtZero: true,
        },
        x:{
            grid:{
                display: false
            }
        }
      },
      barThickness: 8,
    };

    const chartStyle = {
        borderRadius: '1rem',
        height: '18rem' ,
        width: '27rem'
    };  
  
    return (
      <div className="w-1/2 h-80">
        <Bar data={data} options={options} style={chartStyle}/>
      </div>
    );
  };
  
  export default BarChart;