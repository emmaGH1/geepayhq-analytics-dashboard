/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Calendar, Notification, Search } from "@/constants";
import { Calendar as CalendarTable } from './calendar'
import { Menu } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav = ({ setIsOpen }: Props) => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [showCalendar, setShowCalendar] = useState(false)

  const handleCalender = () => {
    setShowCalendar(prev => !prev)
  }

  return (
    <div className='flex lg:hidden w-full justify-between bg-white p-2 items-center relative'>
       <div className="flex items-center">
         <Menu className="w-8 h-8 mr-5" onClick={() => setIsOpen(prev => !prev)} />
         <img src={Search} alt="search" className="w-6 h-6"/>
       </div>
       <div className="flex items-center">
          <div className="flex justify-center items-center mr-4">
                <img src={Calendar} alt="Calendar" className="mr-[6px]" onClick={handleCalender}/>
                <div className="hidden sm:block text-sm font-bold">November, 15 2023</div>
                <div onClick={handleCalender}>
                <CalendarTable
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className={`${showCalendar ? 'block' : 'hidden'} rounded-md border top-10 right-10 z-50 absolute  bg-black text-white`}
                />
                </div>
           </div>
           
           <img 
              src={Notification} alt="Notification" className="rounded-full border border-[#E5EAEF] p-1 w-8 h-8 mr-5" 
              onClick={() => toast('You have 0 unread')}
            />
            
            <div>
                <img src={Avatar} alt="avatar" />
            </div>
       </div>
    </div>
  );
};

export default MobileNav;