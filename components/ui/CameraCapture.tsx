"use client";

import React, { useEffect, useRef, useState } from "react";

interface CameraCaptureProps {
  onCapture: (img: string) => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Start camera on mount
  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
        setError(null);
      }
    } catch (err) {
      setError("Tidak dapat mengakses kamera.");
      console.error(err);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
    stream?.getTracks().forEach((track) => track.stop());
    setIsCameraActive(false);
  };

  const capture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx?.drawImage(video, 0, 0);
      const img = canvas.toDataURL("image/png");
      onCapture(img);
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="text-red-500 text-center font-medium">{error}</div>
      )}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full rounded-lg border shadow"
      />
      <canvas ref={canvasRef} className="hidden" />
      <div className="flex justify-center space-x-4">
        <button
          onClick={capture}
          disabled={!isCameraActive}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        >
          Ambil Foto
        </button>
        <button
          onClick={stopCamera}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Matikan Kamera
        </button>
      </div>
    </div>
  );
};

export default CameraCapture;
