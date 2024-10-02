import React from 'react';
import styles from './Home.module.scss';

interface HomeProps {
  onStartScanning: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartScanning }) => {
  return (
    <div className={styles.home}>
      <button className={styles.scanButton} onClick={onStartScanning}>
        Iniciar Escaneo
      </button>
    </div>
  );
};

export default Home;
