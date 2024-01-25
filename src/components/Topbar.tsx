import { ArrowDown, Avatar, Calendar, Notification, Search } from "../constants";

export const Topbar = () => {
  return (
    <div className="flex flex-row mx-auto justify-between w-full px-5 items-center h-16 border-b border-[#E5EAEF] ">
      <div>
          <h5>
            Dashboard
          </h5>
      </div>
      <div className="flex items-center justify-between">
        <div className="relative mr-5">
          <input type="search" placeholder="Search..."
            className="pl-10 pr-10 py-[6px] rounded-full border border-[#DADDDD] focus:outline-none focus:border-primary">
          </input>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src={Search} alt='Search' className='w-5 h-5' />
          </div>
        </div>
        <div className="flex justify-center items-center mr-5">
          <img src={Calendar} alt="Calendar" className="mr-[6px]"/>
          <div className=" text-sm font-bold">November, 15 2023</div>
        </div>
        <img src={Notification} alt="Notification" className="rounded-full border border-[#E5EAEF] p-1 w-6 h-6 mr-3" />
        <div className="flex items-center border-[#E5EAEF] border rounded-3xl px-1">
          <div className="w-6 h-6">
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-bold">Justin Berguson</span>
            <span className="text-xs text-[#787486] ">Justin@gmail.com</span>            
          </div>
          <img src={ArrowDown} alt="ArrowDown" className="w-3 h-3 mx-1" />
        </div>
      </div>
    </div>
  );
};

