import { useState } from "react";
import { Avatar } from "../../constants";
import { Calendar as CalendarTable } from "./calendar";
import { toast } from "sonner"
import { Bell, CalendarRange, Search, ChevronDown, Mail, DollarSign } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import { Button } from "./button";

export const Topbar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [showCalendar, setShowCalendar] = useState(false)

  const handleCalender = () => {
    setShowCalendar(prev => !prev)
  }
  return (
    <div className="flex flex-row mx-auto justify-between w-full px-5 items-center h-16 border-b border-[border-color] max-lg:hidden dark:bg-primary-dark dark:border-none">
      <div>
          <h5>
            Dashboard
          </h5>
      </div>
      <div className="flex items-center justify-between">
        <div className="relative mr-5">
          <input type="search" placeholder="Search..."
            className="pl-10 pr-10 py-[6px] rounded-full border border-[#DADDDD] focus:outline-none focus:border-primary bg-transparent placeholder:dark:text-dark-text">
          </input>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className='w-5 h-5 dark:text-dark-text text-[#787486]' />
          </div> 
        </div>
        <div className="flex justify-center items-center mr-5">
          <CalendarRange className="mr-[6px] w-5 h-5" onClick={handleCalender} />
          <div className=" text-sm font-bold">November, 15 2023</div>
          <div onClick={handleCalender}>
            <CalendarTable
              mode="single"
              selected={date}
              onSelect={setDate}
              className={`${showCalendar ? 'block' : 'hidden'} rounded-md border top-10 right-10 z-50 absolute  bg-black text-white dark:text-dark-text`}
            />
          </div>
        </div>
        <Bell
          className="rounded-full border border-[border-color] p-1 w-6 h-6 mr-3" 
          onClick={() => toast('You have 0 unread')}
        />
        <div className="flex items-center border-[border-color] border rounded-3xl px-1">
          <div className="w-6 h-6 mr-1">
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-bold">Justin Berguson</span>
            <span className="text-xs text-[#787486] dark:text-[#CCCCCC] mb-1">Justin@gmail.com</span>            
          </div>
          <ChevronDown className="w-4 h-4 mx-1" />
        </div>
        <div className="absolute top-20 z-50 bg-white dark:bg-primary-dark text-black dark:text-dark-text flex flex-col right-10 hidden">
           <div>User Profile</div>
           <h4>
             Justin Bergson
           </h4>
           <p>Administrator</p>
           <div>
             <Mail />
             <div>justin@gmail.com</div>
           </div>
           <Separator orientation="horizontal"/>
           <div>
             <div>
               <DollarSign />
             </div>
             <div>
               <div>My Profile</div>
               <div>Account Settings</div>
             </div>
           </div>
           <Separator orientation="horizontal"/>
           <div>
             <div>
               <DollarSign />
             </div>
             <div>
               <div>My Profile</div>
               <div>Account Settings</div>
             </div>
           </div>
           <Separator orientation="horizontal"/>
           <div>
             <div>
               <DollarSign />
             </div>
             <div>
               <div>My Profile</div>
               <div>Account Settings</div>
             </div>
           </div>
           <Button>Logout</Button>
        </div>
      </div>
    </div>
  );
};

