import React from 'react';
import styles from './ErrorScreen.module.scss';

interface ErrorScreenProps {
  onRetry: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ onRetry }) => (
  <div className={styles.errorScreen}>
    <p>No se pudo acceder a la cámara.</p>
    <button onClick={onRetry}>Volver a la pantalla principal</button>
  </div>
);

export default ErrorScreen;
