'use client'

import React, { useRef } from 'react'

interface CameraCaptureProps {
  onCapture: (img: string) => void
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Start the camera
  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    if (videoRef.current) {
      videoRef.current.srcObject = stream
    }
  }

  // Capture a frame
  const capture = () => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (video && canvas) {
      const ctx = canvas.getContext('2d')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      ctx?.drawImage(video, 0, 0)
      const img = canvas.toDataURL('image/png')
      onCapture(img)
    }
  }

  return (
    <div className="space-y-4">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full rounded-lg border"
      />
      <canvas ref={canvasRef} className="hidden" />
      <div className="flex justify-center space-x-4">
        <button
          onClick={startCamera}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Buka Kamera
        </button>
        <button
          onClick={capture}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Ambil Foto
        </button>
      </div>
    </div>
  )
}

export default CameraCapture
