'use client'

import React, { useState } from 'react'
import CameraCapture from '@/components/ui/CameraCapture'

const hairstyleSuggestions: Record<string, string[]> = {
  Undercut: ['Side Part Undercut', 'Textured Undercut', 'Disconnected Undercut'],
  Pompadour: ['Classic Pompadour', 'Modern Pompadour', 'Faded Pompadour'],
  Buzzcut: ['Military Cut', 'Induction Cut', 'Crew Cut'],
  Mullet: ['Modern Mullet', 'Shaggy Mullet', 'Tapered Mullet'],
}

export default function HairDetect() {
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const detectHairStyle = async (img: string) => {
    setLoading(true)
    setResult(null)

    // Simulasi hasil deteksi AI
    setTimeout(() => {
      setResult('Undercut') // Ganti dengan hasil dari model AI kamu
      setLoading(false)
    }, 2000)
  }

  const recommendations = result ? hairstyleSuggestions[result] ?? [] : []

  return (
    <div className="p-6 space-y-6 max-w-md mx-auto text-center">
      <CameraCapture onCapture={detectHairStyle} />
      {loading && <p className="text-blue-500">Memproses gambar...</p>}
      {result && (
        <div className="space-y-4">
          <p className="text-green-600 font-semibold">
            Gaya Terdeteksi: <strong>{result}</strong>
          </p>
          {recommendations.length > 0 && (
            <div className="text-left">
              <p className="font-medium mb-2">Rekomendasi Potongan Serupa:</p>
              <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300">
                {recommendations.map((style) => (
                  <li key={style}>{style}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
