import React, { useState } from 'react';
import Home from './components/Home/Home';
import Camera from './components/Camera/Camera';
import ScanResult from './components/ScanResult/ScanResult';
import './styles/main.scss';

enum Screen {
  HOME,
  CAMERA,
  RESULT,
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  const [scannedCode, setScannedCode] = useState<string>('');

  const handleStartScanning = () => {
    setCurrentScreen(Screen.CAMERA);
  };

  const handleCodeScanned = (code: string) => {
    setScannedCode(code);
    setCurrentScreen(Screen.RESULT);
  };

  const handleGoBack = () => {
    setCurrentScreen(Screen.HOME);
  };

  return (
    <div className="app">
      {currentScreen === Screen.HOME && (
        <Home onStartScanning={handleStartScanning} />
      )}
      {currentScreen === Screen.CAMERA && (
        <Camera onCodeScanned={handleCodeScanned} onError={handleGoBack} />
      )}
      {currentScreen === Screen.RESULT && (
        <ScanResult code={scannedCode} onGoBack={handleGoBack} />
      )}
    </div>
  );
};

export default App;
