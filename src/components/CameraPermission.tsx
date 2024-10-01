// CameraPermission.tsx
import React from 'react';

interface CameraPermissionProps {
  onPermissionGranted: () => void;
  onPermissionDenied: () => void;
}

const CameraPermission: React.FC<CameraPermissionProps> = ({ onPermissionGranted, onPermissionDenied }) => {
  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log('Permiso de cámara concedido');
      onPermissionGranted();
    } catch (error) {
      console.error('Permiso de cámara denegado', error);
      onPermissionDenied();
    }
  };

  return (
    <button onClick={requestCameraPermission}>Solicitar Permiso de Cámara</button>
  );
};

export default CameraPermission;
