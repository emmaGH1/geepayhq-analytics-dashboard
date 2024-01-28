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
    <div className="absolute flex flex-col items-center justify-center h-screen">
      <div className="p-4 bg-white rounded-md shadow-md dark:bg-background-dark">
        <img src={each.imgUrl} alt="avatar" />
        <div className="mb-2 text-lg font-bold">Name: {each.name}</div>
        <div>Date: {each.date}</div>
        <div>Status: {each.status}</div>
        <div>Amount: {each.amount}</div>
      </div>
      <button
        onClick={handleDownload}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
      >
        Download
      </button>
    </div>
  );
};

export default DownloadCard;
