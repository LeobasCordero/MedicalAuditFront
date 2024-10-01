import React from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

interface ScannerProps {
  onScan: (result: string) => void;
}

const Scanner: React.FC<ScannerProps> = ({ onScan }) => {
  return (
    <BarcodeScannerComponent
      width="100%"
      height="100%"
      onUpdate={(err, result) => {
        if (result) {
          onScan(result.getText());
        }
      }}
    />
  );
};

export default Scanner;
