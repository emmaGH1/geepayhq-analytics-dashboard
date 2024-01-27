/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Calendar, Search } from "@/constants";
import { Calendar as CalendarTable } from './calendar'
import { Bell, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useTheme } from "@/components/theme-provider";
interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav = ({ setIsOpen }: Props) => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [showCalendar, setShowCalendar] = useState(false)
  const [isThemeDark, setIsThemeDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const { setTheme } = useTheme()
 
  useEffect(() => {
    if (isThemeDark === true) {
        setTheme('dark')
        setIsThemeDark(true)
    } else {
        setTheme('light')
        setIsThemeDark(false)
    }
  }, [])
  
  const handleTheme = (theme: string) => {
    if (theme === 'dark') {
        setTheme('dark')
        setIsThemeDark(true)
    } else {
        setTheme('light')
        setIsThemeDark(false)
    }
  }

  const handleCalender = () => {
    setShowCalendar(prev => !prev)
  }

  return (
    <div className='flex lg:hidden w-full justify-between bg-white dark:bg-primary-dark p-2 items-center relative'>
       <div className="flex items-center">
         <Menu className="w-8 h-8 mr-5" onClick={() => setIsOpen(prev => !prev)} />
         <img src={Search} alt="search" className="w-6 h-6"/>
       </div>
       <div className="flex items-center">
          <div className="sm:flex justify-center items-center mr-4 hidden">
                <img src={Calendar} alt="Calendar" className="mr-[6px]" onClick={handleCalender}/>
                <div className="text-sm font-bold">November, 15 2023</div>
                <div onClick={handleCalender}>
                <CalendarTable
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className={`${showCalendar ? 'block' : 'hidden'} rounded-md border top-10 right-10 z-50 absolute  bg-black text-white dark:text-dark-text`}
                />
                </div>
           </div>
           
           <div className="mr-5">
             {isThemeDark ? (
              <div>
                <Moon className={`${isThemeDark ? 'block dark:text-dark-text text-black' : 'text-gray-500 hidden'}`} onClick={() => handleTheme('light')} />
              </div>
             )
             : 
             (
              <div>
                <Sun className={`${!isThemeDark ? 'block dark:text-dark-text text-black' : 'text-gray-500 hidden'}`} onClick={() => handleTheme('dark')} />
              </div>
             )
            }
           </div>

           <Bell className="rounded-full border border-[border-color] p-1 w-8 h-8 mr-5 dark:text-dark-text" 
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