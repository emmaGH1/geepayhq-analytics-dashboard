/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTheme } from "@/components/theme-provider";

import { Active, Box, Category, Discount, Info, LogIn, LogOut, Logo, Profile, Settings, Trend } from "../../constants"
import { Icon } from './Icon';
import { useEffect, useState } from "react";
import { MoonIcon, Sun } from "lucide-react";

export const Sidenav = () => {
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
  return (
    <div className="bg-white border-b border-r border-[#EBECF2] max-lg:hidden dark:bg-primary-dark dark:border-none">
        <div className="fixed flex flex-col items-center justify-between h-screen bg-background dark:bg-primary-dark w-[80px]">
            <div className="flex flex-col items-center justify-center">
                <Icon src={Logo} alt="Logo" className="w-8 h-8 mt-4 mb-2 max-lg:mb-5" />
                <div className="relative">
                    <Icon src={Category} alt="Category" />
                    <Icon src={Active} alt="Active" className="absolute top-0 left-10" />
                </div>
                <Icon src={Trend} alt="Trend" />
                <Icon src={Profile} alt="Profile" />
                <Icon src={Box} alt="Box" />
                <Icon src={Discount} alt="Discount" />
                <Icon src={Info} alt="Info" />
                <div className="flex flex-col items-center justify-center w-full py-2 bg-white cursor-pointer dark:bg-background-dark rounded-3xl">
                    <div className={`${!isThemeDark ? 'bg-primary' : ' bg-white dark:bg-primary-dark'} p-2 mx-1 mb-1 rounded-full`} onClick={() => handleTheme('light')}>
                      <Sun className={`${!isThemeDark ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <div onClick={() => handleTheme('dark')} className={`${isThemeDark ? 'bg-primary' : 'text-gray-500 bg-white dark:bg-primary-dark'} p-2 rounded-full`}>
                      <MoonIcon className={`${isThemeDark ? 'text-white dark:' : 'text-gray-500'}`} />
                    </div>
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

