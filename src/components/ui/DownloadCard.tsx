interface Props {
    each: {
        name: string;
        date: string;
        amount: string;
        status: string;
        imgUrl: string;
    }
}[]

const DownloadCard = ({ each }: Props) => {
  const handleDownload = () => {
    // Create a Blob containing the text data
    const blob = new Blob([JSON.stringify(each)], { type: 'text/plain' });
    // Create a link element and trigger a click to download the file
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'data.txt';
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen absolute">
      <div className="bg-white dark:bg-background-dark p-4 rounded-md shadow-md">
        <div className="text-lg font-bold mb-2">Name: {each.name}</div>
        <div>Date: {each.date}</div>
        <div>Status: {each.status}</div>
        <div>Amount: {each.amount}</div>
      </div>
      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
      >
        Download
      </button>
    </div>
  );
};

export default DownloadCard;
