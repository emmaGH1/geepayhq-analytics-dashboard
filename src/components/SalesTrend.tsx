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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
  
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
    
 const options: ChartOptions<'bar'> = {
      responsive: true,
      plugins: {
        tooltip: {
          displayColors: false,
          callbacks: {
          label: (tooltipItem) => `$${tooltipItem.formattedValue}.000`,
          title: () => ''
      },
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: true,
          },
          border: {
            dash: [3, 5],
            display: false,
        }, 
        ticks: {
          maxTicksLimit: 10,
          callback: (value) => {
            if (value === 0) {
              return 0;
            }
        
            const numericValue = typeof value === 'string' ? parseFloat(value) : value;
        
            return `${numericValue.toFixed(3)}`; // Format the tick labels to display '.000'
          },
        },
        
        },
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
            data: salesData
            ,
          },
        ],
      };
  
  return (
    <div className='flex flex-col bg-white dark:bg-primary-dark p-2 rounded-xl'>

      <div className='flex flex-row justify-between items-center mb-5'>
        <h5 className=' text-lg'>Sales Trend</h5>
        <div className='flex items-center'>
          <span className='mr-2'>Sort by:</span>
          <div className='flex border border-[##E1DFDF] rounded-full text-md px-2 items-center dark:text-dark-text'>
          <Select>
            <SelectTrigger className="w-[180px] border-none bg-transparent dark:text-dark-text">
              <SelectValue placeholder="Weekly"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='dark:text-dark-text'>
                <SelectItem value="apple">Daily</SelectItem>
                <SelectItem value="banana">Weekly</SelectItem>
                <SelectItem value="blueberry">Monthly</SelectItem>
                <SelectItem value="grapes">Yearly</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
            {/* <ChevronDown className="w-4 h-4 mx-1" /> */}
          </div>
        </div>
      </div>

      <Bar options={options} data={data} />
    </div>
  );
}
