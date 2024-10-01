import React from 'react';

interface ErrorScreenProps {
  onRetry: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ onRetry }) => {
  return (
    <div className="error-screen">
      <p>No se pudo acceder a la cámara. Por favor, concede permisos para continuar.</p>
      <button className="error-screen__retry-button" onClick={onRetry}>
        Regresar
      </button>
    </div>
  );
};

export default ErrorScreen;
