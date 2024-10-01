import React from 'react';
import styles from './Home.module.scss';
import Button from '../../components/Button/Button';

interface HomeProps {
  onActivateCamera: () => void;
}

const Home: React.FC<HomeProps> = ({ onActivateCamera }) => {
  return (
    <div className={styles.home}>
      <Button onClick={onActivateCamera} label="Iniciar Cámara" />
    </div>
  );
};

export default Home;
