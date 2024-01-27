/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { Invoice, recentOrdersData } from "@/constants"
import { FileDown } from "lucide-react";


const LastOrders = () => {
  return (
    <div className="bg-white dark:bg-primary-dark rounded-xl px-3">
        <div className="flex justify-between items-center text-lg">
            <div className=" font-bold mt-3 ml-1">Last Orders</div>
            <div className="text-primary hover:text-primary/60 transition-colors duration-300 delay-150 cursor-pointer mt-3">See All</div>
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
                        <div>
                            <TableRow key={each.name} className=" whitespace-nowrap">
                                <TableCell className="flex items-center text-black dark:text-dark-text text-md font-medium max-lg:mr-5">
                                    <img src={each.imgUrl} className='w-7 h-7 mr-2'/>
                                    <div>{each.name}</div>
                                </TableCell>
                                <TableCell className="text-[#737373] dark:text-[#CCCCCC]">{each.date}</TableCell>
                                <TableCell className="font-bold">${each.amount}</TableCell>
                                <TableCell 
                                className={`${each.status === 'Paid' ? 'text-[#34CAA5]' : 'text-[#ED544E]'}`}
                                >{each.status}</TableCell>
                                <TableCell className="flex">
                                    <FileDown className="w-6 h-5"/>
                                    <div className="ml-1 font-semibold">View</div>
                                </TableCell>
                            </TableRow>
                        </div>
                        )
                    })}
            </TableBody>
        </Table>
    </div>
  );
};

export default LastOrders;