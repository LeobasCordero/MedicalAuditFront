import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { QrScanner, Result } from '@yudiel/react-qr-scanner';
import styles from './Camera.module.scss';

interface CameraProps {
  onCodeScanned: (code: string) => void;
  onError: () => void;
}

const Camera: React.FC<CameraProps> = ({ onCodeScanned, onError }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);

  const handleUserMedia = (stream: MediaStream) => {
    setHasCameraPermission(true);
  };

  const handleUserMediaError = () => {
    setHasCameraPermission(false);
    onError();
  };

  const handleScan = (result: Result | null) => {
    if (result) {
      const scannedText = result.getText(); // Accede al texto usando el método público
      if (scannedText) {
        onCodeScanned(scannedText);
      }
    }
  };

  if (hasCameraPermission === false) {
    return null;
  }

  return (
    <div className={styles.camera}>
      {hasCameraPermission === null ? (
        <Webcam
          audio={false}
          onUserMedia={handleUserMedia}
          onUserMediaError={handleUserMediaError}
        />
      ) : (
        <QrScanner
          onResult={handleScan}
          constraints={{ facingMode: 'environment' }} // Utiliza la cámara trasera si está disponible
        />
      )}
    </div>
  );
};

export default Camera;
