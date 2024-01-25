import SalesTrend from "./SalesTrend";

export const Dashboard = () => {
  const salesData = [7, 22, 3, 23, 9, 46, 9, 25, 33, 4, 30, 27, 50];

const roundedSalesData = salesData.map((value) => parseFloat(value.toFixed(3)));

console.log(roundedSalesData);
  return (
    <div className="flex flex-col w-full mx-auto">
       <div className="w-2/4">
         <SalesTrend />
       </div>
    </div>
  );
};

