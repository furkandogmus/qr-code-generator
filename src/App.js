import React, { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [qr, setQr] = useState("");

  const handleQR = (e) => {
    setQr(e.target.value);
  };

  const handleSave = () => {
    const svgString = document.querySelector("svg").outerHTML;
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "qrcode.svg";
    downloadLink.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-yellow-300 h-screen w-full flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl text-white shadow-sm rounded-xl hover:shadow-xl hover:scale-125 duration-500 p-4">
        QR Generator
      </h1>
      <QRCode value={qr} />
      <input
        type="url"
        onChange={handleQR}
        className="outline-none w-96 h-12 p-2 pl-2 border-2 border-transparent focus:border-yellow-700 focus:scale-125 duration-500 rounded text-yellow-600 placeholder:text-yellow-700"
        placeholder="Enter a link"
      />
      <button
        type="button"
        onClick={handleSave}
        className="bg-yellow-400 w-40 h-12 rounded text-white font-medium hover:scale-125 hover:bg-yellow-500 duration-500 border-2 border-transparent hover:border-yellow-700"
      >
        Save
      </button>
    </div>
  );
}

export default App;
