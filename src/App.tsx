import { Dashboard } from "./components/Dashboard";
import MobileNav from "./components/ui/MobileNav";
import MobileNavContent from "./components/ui/MobileNavContent";
import { Sidenav } from "./components/ui/Sidenav";
import { Topbar } from "./components/ui/Topbar";


const App = () => {
  return (
    <div className="bg-background text-secondary flex flex-row w-full relative">
       <Sidenav />
       <div className="flex flex-col w-full relative">
          <Topbar />
          <MobileNav />
          <MobileNavContent />
          <Dashboard />
       </div>
    </div>
  );
};

export default App;