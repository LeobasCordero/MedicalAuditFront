import React, { useState } from 'react';
import Button from './components/Button';
import Camera from './components/Camera';
import Scanner from './components/Scanner';
import ErrorScreen from './components/ErrorScreen';
import CameraPermission from './components/CameraPermission';

const App: React.FC = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [showError, setShowError] = useState(false);
  const [barcodeData, setBarcodeData] = useState<string | null>(null);

  const handleButtonClick = () => {
    setShowCamera(true);
  };

  const handlePermissionGranted = () => {
    setShowCamera(true);
  };

  const handlePermissionDenied = () => {
    setShowError(true);
  };

  const handleCameraReady = () => {
    setShowError(false);
  };

  const handleCameraError = () => {
    setShowError(true);
    setShowCamera(false);
  };

  const handleScan = (result: string) => {
    setBarcodeData(result);
    setShowCamera(false);
  };

  const handleRetry = () => {
    setShowError(false);
    setShowCamera(false);
  };

  return (
    <div className="app">
      {!showCamera && !showError && !barcodeData && (
        <CameraPermission
          onPermissionGranted={handlePermissionGranted}
          onPermissionDenied={handlePermissionDenied}
        />
      )}
      {showCamera && (
        <Camera onCameraReady={handleCameraReady} onError={handleCameraError}>
          <Scanner onScan={handleScan} />
        </Camera>
      )}
      {showError && <ErrorScreen onRetry={handleRetry} />}
      {barcodeData && (
        <div className="barcode-result">
          <p>Resultado del Código de Barras: {barcodeData}</p>
          <button onClick={() => setBarcodeData(null)}>Volver al inicio</button>
        </div>
      )}
    </div>
  );
};

export default App;
