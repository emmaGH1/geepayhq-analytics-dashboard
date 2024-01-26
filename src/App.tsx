import { Dashboard } from "./components/Dashboard";
import { Sidenav } from "./components/ui/Sidenav";
import { Topbar } from "./components/ui/Topbar";


const App = () => {
  return (
    <div className="bg-background text-secondary flex flex-row w-full">
       <Sidenav />
       <div className="flex flex-col w-full">
          <Topbar />
          <Dashboard />
       </div>
    </div>
  );
};

export default App;