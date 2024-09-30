import { useState } from 'react';
import './App.css';
import QRCode from 'react-qr-code';

function App() {
  const [input, setInput] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQrCode = () => {
    setQrCode(input);
    setInput('');
  };

  return (
    <div className="wrapper">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={input}
        placeholder="Please enter a value..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        disabled={!input && input.trim() === '' ? true : false}
        onClick={generateQrCode}
      >
        Generate
      </button>
      <QRCode
        size={350}
        value={qrCode}
        id="qr-code-example"
      ></QRCode>
    </div>
  );
}

export default App;
