/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { recentOrdersData } from "@/constants"
import { LastOrdersReceipts } from "@/lib/type-definitions";
import { FileDown } from "lucide-react";
import { useState } from "react";
import DownloadCard from "./DownloadCard";


const LastOrders = () => {
  const [cardData, setCardData] = useState<LastOrdersReceipts | null>(null)
  const [toggleDisplay, setToggleDisplay] = useState(false)

  const handleClick = (rowData: LastOrdersReceipts ) => {
    setCardData(rowData)
    setToggleDisplay(true)
  }

  return (
    <div className="px-3 bg-white dark:bg-primary-dark rounded-xl">
        <div className="flex items-center justify-between text-lg">
            <div className="mt-3 ml-1 font-bold ">Last Orders</div>
            <div className="mt-3 transition-colors duration-300 delay-150 cursor-pointer text-primary hover:text-primary/60">See All</div>
        </div>
        <Table>
            <TableHeader>
                <TableRow className="text-[#9CA4AB] dark:text-dark-text">
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Invoice</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                    {recentOrdersData.map((each) => {
                        return (
                        <TableRow key={each.name} className=" whitespace-nowrap">
                            <TableCell className="flex items-center font-medium text-black dark:text-dark-text text-md max-lg:mr-5">
                                <img src={each.imgUrl} className='mr-2 w-7 h-7'/>
                                <div>{each.name}</div>
                            </TableCell>
                            <TableCell className="text-[#737373] dark:text-[#CCCCCC]">{each.date}</TableCell>
                            <TableCell className="font-bold">${each.amount}</TableCell>
                            <TableCell 
                            className={`${each.status === 'Paid' ? 'text-[#34CAA5]' : 'text-[#ED544E]'}`}
                            >{each.status}</TableCell>
                            <TableCell className="flex cursor-pointer hover:text-primary/90 delay-100 transition-colors duration-150" onClick={() => handleClick(each)}>
                                <FileDown className="w-6 h-5"/>
                                <div className="ml-1 font-semibold">View</div>
                            </TableCell>
                        </TableRow>
                        )
                    })}
            </TableBody>
        </Table>
        <DownloadCard rowData={cardData} toggleDisplay={toggleDisplay} setToggleDisplay={setToggleDisplay} />
    </div>
  );
};

export default LastOrders;