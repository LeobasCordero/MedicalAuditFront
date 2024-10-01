import React, { useState } from 'react';
import Button from '../Button/Button';
import Camera from '../Camera/Camera';
import Error from '../Error/ErrorScreen';
import styles from '../../styles/components/home.scss';

const Home: React.FC = () => {
  const [hasCamera, setHasCamera] = useState<boolean | null>(null);
  const [permission, setPermission] = useState<boolean | null>(null);
  const [barcode, setBarcode] = useState<string | null>(null);

  const handleButtonClick = () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setHasCamera(false);
      return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => {
        setPermission(true);
      })
      .catch(() => {
        setPermission(false);
      });
  };

  if (hasCamera === false || permission === false) {
    return <Error />;
  }

  if (permission) {
    return <Camera onBarcodeDetected={setBarcode} />;
  }

  return (
    <div className={styles.home}>
      <Button onClick={handleButtonClick} />
      {barcode && <p>Barcode: {barcode}</p>}
    </div>
  );
};

export default Home;
