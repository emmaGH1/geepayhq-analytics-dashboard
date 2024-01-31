import { LastOrdersReceipts } from "@/lib/type-definitions";
import { Download, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
    rowData: LastOrdersReceipts | null,
    toggleDisplay: boolean,
    setToggleDisplay: Dispatch<SetStateAction<boolean>>
}

const DownloadCard = ({ rowData, toggleDisplay, setToggleDisplay }: Props) => {
  
  if (!rowData) {
    return null
  }

  const { name, date, amount, status } = rowData

  const handleDownload = () => {
    const invoiceContent = `
      Invoice for: ${name}
      Date Created: ${date}
      Amount: ${amount}
      Status: ${status}
    `;

    const blob = new Blob([invoiceContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${name}_invoice.txt`;
    link.click();
  };


  return (
    <div className={`fixed top-0 left-0 w-full h-full ${toggleDisplay ? 'flex' : 'hidden'} items-center justify-center z-50`}>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10" onClick={() => setToggleDisplay(prev => !prev)} ></div>
      <div className=" bg-background-dark p-8 rounded-md shadow-md w-96 md:w-1/2 lg:w-1/3 z-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-dark-text">{name}</h2>
          <div className="flex items-center">
            <button
              onClick={handleDownload}
              className="text-gray-500 hover:text-gray-700 transition-colors delay-150 cursor-pointer mr-4"        
            >
              <Download className="w-6 h-6" />
            </button>
            <X onClick={() => setToggleDisplay(prevState => !prevState)} className="text-gray-500 hover:text-gray-700 transition-colors delay-150 cursor-pointer" />
          </div>
        </div>
        <p className="text-dark-text/80 text-sm mb-2">Date Created: {date}</p>
        <p className="text-dark-text/80 text-sm mb-2">Amount: {amount}</p>
        <p className={`font-semibold ${status === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
          Status: {status}
        </p>
      </div>
    </div>
  );
};

export default DownloadCard;
