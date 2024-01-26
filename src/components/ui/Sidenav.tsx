import { Active, Box, Bulb, Category, Discount, Info, LogIn, LogOut, Logo, Moon, Profile, Settings, Trend } from "../../constants"
import { Icon } from './Icon';

export const Sidenav = () => {
  return (
    <div className="bg-white border-b border-r border-[#EBECF2]">
        <div className="flex flex-col h-[90vh] w-[80px] items-center justify-between bg-background">
            <div className="flex flex-col justify-center items-center">
                <Icon src={Logo} alt="Logo" className="mt-4 w-8 h-8 mb-2 max-lg:mb-5" />
                <div className="relative">
                    <Icon src={Category} alt="Category" />
                    <Icon src={Active} alt="Active" className="absolute left-10 top-0" />
                </div>
                <Icon src={Trend} alt="Trend" />
                <Icon src={Profile} alt="Profile" />
                <Icon src={Box} alt="Box" />
                <Icon src={Discount} alt="Discount" />
                <Icon src={Info} alt="Info" />
                <div className="bg-white w-full rounded-3xl flex flex-col items-center justify-center">
                    <Icon src={Bulb} alt="bulb" containerClass="bg-primary rounded-full w-5 h-5 flex justify-center items-center mt-1" className="w-[14px] h-[14px]" />
                    <Icon src={Moon} alt="Moon" />
                </div>
            </div>

            <div className="flex flex-col max-lg:mb-5">
                <Icon src={LogIn} alt="LogIn" />
                <Icon src={Settings} alt="Settings" />
                <Icon src={LogOut} alt="logouLogOut" />
            </div>
        </div>
    </div>
  )
}

