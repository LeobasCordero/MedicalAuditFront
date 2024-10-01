import React, { useEffect } from 'react';
import Webcam from 'react-webcam';

interface CameraProps {
  onCameraReady: () => void;
  onError: () => void;
}

const Camera: React.FC<CameraProps> = ({ onCameraReady, onError }) => {
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => {
        onCameraReady();
      })
      .catch(() => {
        onError();
      });
  }, [onCameraReady, onError]);

  return (
    <div className="camera">
      <Webcam audio={false} screenshotFormat="image/jpeg" />
    </div>
  );
};

export default Camera;
