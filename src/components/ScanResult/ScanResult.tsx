import React from 'react';
import styles from './ScanResult.module.scss';

interface ScanResultProps {
  code: string;
  onGoBack: () => void;
}

const ScanResult: React.FC<ScanResultProps> = ({ code, onGoBack }) => {
  return (
    <div className={styles.scanResult}>
      <h2>Código Escaneado:</h2>
      <p>{code}</p>
      <button className={styles.goBackButton} onClick={onGoBack}>
        Regresar a la pantalla principal
      </button>
    </div>
  );
};

export default ScanResult;
