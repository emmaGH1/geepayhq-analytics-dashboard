import { BoxCart, BoxCoin, BoxRotate, BoxTick, DownTrend, DownTrendArrow, UpTrend, UpTrendArrow } from "../constants";
import { Card } from "@/components/ui/Card";

const CardAnalytics = () => {
  return (
    <div className="grid md:grid-cols-2 w-2/4 gap-4 max-lg:w-full max-lg:mt-5">
        <Card 
          BoxIcon={BoxTick} 
          Name='Total Order'
          Amount={350}
          TrendArrowIcon={UpTrendArrow}
          Percentage={23.5}
          TrendIcon={UpTrend}
        />
        <Card 
          isTrendUp={false}
          BoxIcon={BoxRotate} 
          TrendIcon={DownTrend}
          Name='Total Refund'
          Amount={270}
          TrendArrowIcon={DownTrendArrow}
          Percentage={7}
        />
        <Card 
          BoxIcon={BoxCart} 
          TrendIcon={DownTrend}
          Name='Average Sales'
          Amount={1567}
          TrendArrowIcon={DownTrendArrow}
          Percentage={13}
          isTrendUp={false}
        />
        <Card 
          BoxIcon={BoxCoin} 
          TrendIcon={UpTrend}
          Name='Total Order'
          Amount={350}
          TrendArrowIcon={UpTrendArrow}
          Percentage={57}
        />
    </div>
  );
};

export default CardAnalytics;