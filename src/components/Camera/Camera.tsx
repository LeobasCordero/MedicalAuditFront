import React from 'react';
import Webcam from 'react-webcam';
import { useQrReader } from 'react-qr-barcode-scanner';
import styles from '../../styles/components/camera.scss';

interface CameraProps {
  onBarcodeDetected: (barcode: string) => void;
}

const Camera: React.FC<CameraProps> = ({ onBarcodeDetected }) => {
  const { data } = useQrReader();

  React.useEffect(() => {
    if (data) {
      onBarcodeDetected(data);
    }
  }, [data, onBarcodeDetected]);

  return (
    <div className={styles.camera}>
      <Webcam />
    </div>
  );
};

export default Camera;
