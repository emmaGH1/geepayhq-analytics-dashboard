import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import MobileNav from "./components/ui/MobileNav";
import MobileNavContent from "./components/ui/MobileNavContent";
import { Sidenav } from "./components/ui/Sidenav";
import { Topbar } from "./components/ui/Topbar";
import { Toaster } from '@/components/ui/sonner'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex flex-row w-full bg-background dark:bg-background-dark text-secondary dark:text-dark-text">
       <div className="w-[80px]">
        <Sidenav />
       </div>
       <div className="relative flex flex-col w-full">
          <Topbar/>
          <MobileNav setIsOpen={setIsOpen} />
          {isOpen && !!isOpen && <MobileNavContent setIsOpen={setIsOpen} />}
          <Dashboard />
          <Toaster className="text-black dark:text-dark-text"/>
       </div>
    </div>
  );
};

export default App;