import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Camera from './components/Camera/Camera';
import ErrorScreen from './components/Error/ErrorScreen';

const App: React.FC = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [showError, setShowError] = useState(false);
  const [scannedCode, setScannedCode] = useState<string | null>(null);

  const handleActivateCamera = () => {
    setShowCamera(true);
    setShowError(false);
  };

  const handleCodeScanned = (code: string) => {
    setScannedCode(code);
    setShowCamera(false);
  };

  const handleError = () => {
    setShowError(true);
    setShowCamera(false);
  };

  const handleRetry = () => {
    setShowCamera(false);
    setShowError(false);
  };

  return (
    <div>
      {!showCamera && !showError && <Home onActivateCamera={handleActivateCamera} />}
      {showCamera && <Camera onCodeScanned={handleCodeScanned} onError={handleError} />}
      {showError && <ErrorScreen onRetry={handleRetry} />}
      {scannedCode && <p>Código Escaneado: {scannedCode}</p>}
    </div>
  );
};

export default App;
