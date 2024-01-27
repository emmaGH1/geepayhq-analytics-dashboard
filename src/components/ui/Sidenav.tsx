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
        <div className="flex flex-col h-screen w-[80px] items-center justify-between bg-background dark:bg-primary-dark">
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
                <div className="bg-white dark:bg-background-dark w-full rounded-3xl flex flex-col items-center justify-center py-2 cursor-pointer">
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

