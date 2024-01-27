import { Logo, MobileNavLinks } from "@/constants";
import { X } from 'lucide-react';
import { SetStateAction } from "react";

interface Props {
    setIsOpen: React.Dispatch<SetStateAction<boolean>>,
}
const MobileNavContent = ({ setIsOpen }: Props) => {

  return (
    <>
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(prev => !prev)}></div>

      {/* Mobile Navigation Content */}
      <div className="fixed bg-white dark:bg-primary-dark h-screen w-3/5 md:w-2/5 z-50 overflow-y-auto">
        <div className="flex justify-between items-center mt-3 ml-2">
            <div className='flex items-center'>     
                <img src={Logo} alt="logo" onClick={() => setIsOpen(prev => !prev)} />
                <div className="uppercase font-bold ml-3 mr-1">Dashboard</div>
            </div>
            <X className='block mr-1' onClick={() => setIsOpen(prev => !prev)} />
        </div>

        <div className="flex flex-col mt-5">
          {MobileNavLinks.map((link) => (
            <div
              key={link.label}
              onClick={() => setIsOpen(prev => !prev)}
              className={`flex items-center capitalize font-semibold mt-7 ml-5 ${
                link.label === 'Category' ? 'bg-primary py-3 rounded-xl text-white dark:text-dark-text mr-5' : ''
              }`}
            >
              <img src={link.imgUrl} alt={link.label} className="mr-2 ml-2" />
              <div>{link.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavContent;
