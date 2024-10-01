import React, { useState } from 'react';
import Webcam from 'react-webcam';
//import { QRScanner } from '@yudiel/react-qr-scanner';
import { QrScanner } from '@yudiel/react-qr-scanner';
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
        <QrScanner onResult={(result) => onCodeScanned(result.getText())} />

      )}
    </div>
  );
};

export default Camera;
