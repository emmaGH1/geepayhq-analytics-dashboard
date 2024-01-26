import { Avatar, Calendar, Notification, Search } from "@/constants";
import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <div className="flex lg:hidden w-full justify-between bg-white p-2 items-center">
       <div className="flex items-center">
         <Menu className="w-8 h-8 mr-5"/>
         <img src={Search} alt="search" className="w-6 h-6"/>
       </div>
       <div className="flex items-center">
          <div className="flex justify-center items-center mr-4">
                <img src={Calendar} alt="Calendar" className="mr-[6px]"/>
                <div className="hidden sm:block text-sm font-bold">November, 15 2023</div>
           </div>
           
           <img 
              src={Notification} alt="Notification" className="rounded-full border border-[#E5EAEF] p-1 w-8 h-8 mr-5" 
            />
            
            <div>
                <img src={Avatar} alt="avatar" />
            </div>
       </div>
    </div>
  );
};

export default MobileNav;