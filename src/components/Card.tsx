
interface Props {
    BoxIcon: string,
    TrendIcon: string,
    Name: string,
    Amount: number,
    TrendArrowIcon: string,
    Percentage: number,
    isTrendUp?: boolean
}

export const Card = ({ BoxIcon, TrendIcon, Name, Amount, TrendArrowIcon, Percentage, isTrendUp = true }: Props) => {
  return (
    <div className="bg-white rounded-xl">
       <div className="flex flex-col p-2 h-full justify-between">
            <div className="flex justify-between items-center">
                <img src={BoxIcon} alt="box-icon" className="border border-[#E1DFDF] rounded-full w-7 h-7 p-1"/>
                <img src={TrendIcon} alt="trend-icon" />
            </div>
            <div>
                {Name}
            </div>
            <h5>{Amount}</h5>
            <div className="flex justify-between">
                <div className={` ${isTrendUp ? 'bg-positive text-[#34CAA5]' : 'bg-negative text-[#ED544E] '} flex text-md rounded-xl px-2 `}>
                <img src={TrendArrowIcon} alt="trend-arrow-icon" />
                <div className="ml-2">
                    <span>{Percentage}%</span> 
                </div>
                </div>
                <div className="text-md text-[#606060] ">
                    vs. previous month
                </div>
            </div>
       </div>
    </div>
  );
};

