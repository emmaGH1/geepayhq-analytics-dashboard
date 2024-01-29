import CardAnalytics from "./CardAnalytics";
import LastOrders from "./LastOrders";
import SalesTrend from "./SalesTrend";
import TopPlatforms from "./TopPlatforms";

export const Dashboard = () => {
  return (
    <div className="flex flex-col w-[95%] mx-auto mt-5">
      <div className="flex justify-between max-lg:flex-col">
        <div className="w-3/5 mr-4 max-lg:w-full">
          <SalesTrend />
        </div>
        <CardAnalytics />
      </div>
      <div className="flex mb-10 max-lg:flex-col mt-7">
        <div className="w-3/5 mr-4 max-lg:w-full">
         <LastOrders />
        </div>
        <div className="w-2/4 max-lg:w-full max-lg:mt-5">
          <TopPlatforms />
        </div>       
      </div>
    </div>
  );
};

