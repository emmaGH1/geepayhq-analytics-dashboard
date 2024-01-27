/* eslint-disable @typescript-eslint/no-unused-vars */
import { Progress } from "@/components/ui/progress"
import { topPlatformsData } from "@/constants";

const TopPlatforms = () => {
 
  return (
    <div className="bg-white dark:bg-primary-dark rounded-xl px-3 w-full pb-3">
       <div className="flex justify-between items-center text-lg">
            <div className=" font-bold mt-3">Top Platforms</div>
            <div className="text-primary hover:text-primary/60 transition-colors duration-300 delay-150 cursor-pointer mt-3">See All
            </div>
        </div>
        <div className="mt-5">
            {topPlatformsData.map((each) => {
                return (
                    <div key={each.name} className="mb-5">
                      <div className="font-bold text-lg mb-3">{each.name}</div>
                      <Progress value={each.progressLevel} className="bg-[#F5F5F5]" bgColor={each.color} />
                      <div className="flex justify-between mt-2">
                        <div className="text-[#525252] dark:text-dark-text">${each.amount}
                        </div>
                        <div className="text-[#525252] dark:text-[#CCCCCC]">+{each.percentage}%</div>
                      </div>
                    </div>
                )
            })}
        </div>
    </div>
  );
};

export default TopPlatforms;