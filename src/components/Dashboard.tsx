import { salesData } from "@/constants";
import CardAnalytics from "./CardAnalytics";
import LastOrders from "./LastOrders";
import SalesTrend from "./SalesTrend";
import TopPlatforms from "./TopPlatforms";

export const Dashboard = () => {
const roundedSalesData = salesData.map((value) => parseFloat(value.toFixed(3)));

console.log(roundedSalesData);
  return (
    <div className="flex flex-col w-[95%] mx-auto mt-5">
      <div className="flex justify-between">
        <div className="w-3/5 mr-4">
          <SalesTrend />
        </div>
        <CardAnalytics />
      </div>
      <div className="flex mt-7 mb-10">
        <div className="w-3/5 mr-4">
         <LastOrders />
        </div>
        <TopPlatforms />
      </div>
    </div>
  );
};

