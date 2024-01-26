import CardAnalytics from "./CardAnalytics";
import SalesTrend from "./SalesTrend";

export const Dashboard = () => {
  const salesData = [7, 22, 3, 23, 9, 46, 9, 25, 33, 4, 30, 27, 50];

const roundedSalesData = salesData.map((value) => parseFloat(value.toFixed(3)));

console.log(roundedSalesData);
  return (
    <div className="flex flex-col w-[95%] mx-auto mt-5">
      <div className="flex justify-between">
        <div className="w-2/4 mr-4">
          <SalesTrend />
        </div>
        <CardAnalytics />
      </div>
    </div>
  );
};

