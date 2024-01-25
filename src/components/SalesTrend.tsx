/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
  
export default function SalesTrend() {
    ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
); 
    
const salesData = [7, 22, 3, 23, 9, 46, 9, 25, 33, 4, 30, 27, 50];

const hoverBackgroundColor = 'linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)'
    
 const options: ChartOptions<'bar'> = {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },

        },
        y: {
          grid: {
            display: true,
            drawTicks: false,
          },
          border: {
            dash: [3, 5],
            display: false,
            dashOffset: 100
          }, 
          ticks: {
            
          },

        }
      },
    };
    
    const data: ChartData<'bar'> = {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
          {
            label: 'Monthly Sales',
            backgroundColor: 'rgba(52, 202, 165, 0.10)',
            borderColor: 'transparent',
            borderRadius: 360,
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(52, 202, 165, .5)',
            data: salesData.map(number => Number(number.toFixed(3))),
          },
        ],
      };
  
  return <Bar options={options} data={data} />;
}
